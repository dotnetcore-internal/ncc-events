import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
import { needUpdate } from "@/hooks/useVer";
import { getLocaleResource, updateLocaleResource } from "@/hooks/useResource";

export function setupI18n(options = { locale: "en" }) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

// @ts-ignore
export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector("html")?.setAttribute("lang", locale);
}

// @ts-ignore
export async function loadLocaleMessages(i18n, locale, path: string) {

  //get the language resource looks like: /locals/en/t_common.json
  const resourceName = path === "/" ? "_common" : path.replace(/\//g, "_");
  const queryPath = `/locales/${locale}/t_${resourceName}.json`;

  //get the language resource from local storage first
  const localStorageMessages = getLocaleResource(path, locale);

  if (!!localStorageMessages && !needUpdate(localStorageMessages[resourceName]["version"])) {
    // set locale and locale message
    if (isLocaleSupport(locale)) {
      i18n.global.mergeLocaleMessage(locale, localStorageMessages);
    } else {
      appendNewSupportLocals(locale);
      i18n.global.setLocaleMessage(locale, localStorageMessages);
    }

  } else {

    //load locale messages from remote
    await fetch(queryPath)
      .then(response => response.json())
      .then(messages => {
        // set locale and locale message
        if (isLocaleSupport(locale)) {
          i18n.global.mergeLocaleMessage(locale, messages);
        } else {
          appendNewSupportLocals(locale);
          i18n.global.setLocaleMessage(locale, messages);
        }

        //to update language resource into local storage
        updateLocaleResource(path, locale, messages);

      })
      .catch(err => {
        console.log(err);
        locale = "en";
      });

  }

  //After the resource is loaded, the Path is written to the registration list
  registerPath(path, locale);

  return nextTick();
}

//region Support Locales

export const SUPPORT_LOCALES: string[] = [];

export function appendNewSupportLocals(locale: string) {
  if (!SUPPORT_LOCALES.includes(locale)) {
    SUPPORT_LOCALES.push(locale);
  }
}

export function isLocaleSupport(locale: string): boolean {
  return SUPPORT_LOCALES.includes(locale);
}

//endregion

//region Registered Paths

export const REGISTERED_PATHS: string[] = [];

export function registerPath(path: string, locale: string) {
  if (!REGISTERED_PATHS.includes(`${locale}#${path}`)) {
    REGISTERED_PATHS.push(`${locale}#${path}`);
  }
}

export function hasRegisteredPath(path: string, locale: string): boolean {
  return REGISTERED_PATHS.includes(`${locale}#${path}`);
}

//endregion
