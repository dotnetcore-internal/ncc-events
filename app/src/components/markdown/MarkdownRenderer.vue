<script setup lang="ts">
import { computed, onMounted, onUnmounted, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";

const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();
const content: any = shallowRef(null);

const props = withDefaults(defineProps<{
  source: string;
  i18n?: boolean;
  fallbackLocale?: string;
  includeFileExtension?: boolean;
  fileExtension?: string;
  retryTimeout?: number;
  redirectTo404?: boolean;
}>(), {
  i18n: false,
  fallbackLocale: "en",
  includeFileExtension: true,
  fileExtension: ".md",
  redirectTo404: true
});

const useLocaleSuffix = computed(() => {
  if (props.i18n)
    return `.${uiStore.locale}`;
  return "";
});

const useFallbackLocaleSuffix = computed(() => {
  if (props.i18n)
    return `.${props.fallbackLocale}`;
  return "";
});

const useFileExtensions = computed(() => {
  if (props.includeFileExtension)
    return props.fileExtension;
  return "";
});

const toImportMarkdown = async (source: string, locale?: string, skipRetry: boolean = false) => {
  if (source.length === 0) {

    content.value = "";

  } else {

    if (!locale || locale.length === 0) {
      locale = useLocaleSuffix.value;
    } else if (!locale.startsWith(".")) {
      locale = `.${locale}`;
    }

    import(/* @vite-ignore */"../../content/" + props.source + locale + useFileExtensions.value)
      .then(e => {
        content.value = e.default;
      })
      .catch(() => {

        if (!locale || locale.length === 0) {
          locale = useFallbackLocaleSuffix.value;
        } else if (!locale.startsWith(".")) {
          locale = `.${locale}`;
        }

        import(/* @vite-ignore */"../../content/" + props.source + locale + useFileExtensions.value)
          .then(e => {
            content.value = e.default;
          })
          .catch(() => {

            if (!skipRetry && !!props.retryTimeout) {
              retryToImportMarkdown(props.retryTimeout, source, locale);
            } else if (props.redirectTo404) {
              router.replace("/404");
            }

          });

      });
  }
};

const retryToImportMarkdown = async (timeout: number, source: string, locale?: string) => {
  setTimeout(async () => {
    await toImportMarkdown(source, locale, true);
  }, timeout);
};

onMounted(async () => {

  await toImportMarkdown(props.source);

  emitter.on("toChangeLocale", async (e) => {
    if (!props.i18n)
      return;
    const event = e as { locale: string };
    await toImportMarkdown(props.source, event.locale);
  });

});

onUnmounted(() => {

  emitter.off("toChangeLocale");

});

</script>

<template>

  <component :is="content" :key="name" />

</template>

<style lang="css">

</style>