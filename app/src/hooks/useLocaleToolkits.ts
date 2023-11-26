import { hasRegisteredPath, loadLocaleMessages, setI18nLanguage } from "@/i18n";
import { isLegitimatePage, truncatePath } from "@/utils/LegitimatePageHelper";

function toFixedPath(path: string): string {
  const truncate = truncatePath(path);

  if (truncate) {
    return truncate;
  }

  return path;
}

const toSetOrLoadLanguage = async (i18n: unknown, locale: string, path: string) => {

  if (isLegitimatePage(path)) {

    //to fixed path
    const fixedPath = toFixedPath(path);

    //to check whether the resource is registered
    //if registered, the resource has been loaded into the i18n manager
    //and return.
    if (!hasRegisteredPath(fixedPath, locale)) {

      // load locale messages
      await loadLocaleMessages(i18n, locale, fixedPath);
    }

  }

  //force to load common language resource
  if (!hasRegisteredPath("/", locale)) {
    // load locale messages
    await loadLocaleMessages(i18n, locale, "/");
  }

  // set i18n language
  setI18nLanguage(i18n, locale);
};

export {
  toSetOrLoadLanguage
};