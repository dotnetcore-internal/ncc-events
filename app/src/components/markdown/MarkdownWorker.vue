<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";

import MarkdownIt from "markdown-it";
// @ts-ignore
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightJS from "markdown-it-highlightjs";
// @ts-ignore
import MarkdownItSub from "markdown-it-sub";
// @ts-ignore
import MarkdownItSup from "markdown-it-sup";
// @ts-ignore
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
// @ts-ignore
import MarkdownHighlight from "markdown-it-highlight-lines";
import { align } from "@mdit/plugin-align";
import { mark } from "@mdit/plugin-mark";

import WaveLoading from "@/components/basic/WaveLoading.vue";

const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();

const props = withDefaults(defineProps<{
  source: string;
  i18n?: boolean;
  fallbackLocale?: string;
  finalFallbackFn?: () => void;
  includeFileExtension?: boolean;
  fileExtension?: string;
  redirectTo404?: boolean;
}>(), {
  i18n: false,
  fallbackLocale: "en",
  includeFileExtension: true,
  fileExtension: ".md",
  finalFallbackFn: () => {
  },
  redirectTo404: false
});

const markdown = new MarkdownIt({ html: true, xhtmlOut: true, breaks: true, linkify: true, typographer: true })
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightJS)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTaskLists)
  .use(MarkdownItTOC)
  .use(MarkdownHighlight)
  .use(align)
  .use(mark);

const loading = ref(true);
const success = ref(false);
const content = ref("");
const key = ref("");

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

const useMarkdownContent = computed(() => {
  return content.value;
});

const useMarkdownHtml = computed(() => {
  return markdown.render(useMarkdownContent.value);
});

const toLoadMarkdownContent = async (source: string, locale?: string) => {

  key.value = source;
  loading.value = true;
  success.value = false;

  let finallyFallbackFnFlag = false;

  if (source.length === 0) {

    content.value = "";
    loading.value = false;
    success.value = false;

  } else {

    if (!locale || locale.length === 0) {
      locale = useLocaleSuffix.value;
    } else if (!locale.startsWith(".")) {
      locale = `.${locale}`;
    }

    const fetchSource = `/content/${source}`;

    try {

      const res = await fetch(fetchSource + locale + useFileExtensions.value);

      if (res.ok) {

        content.value = await res.text();
        success.value = true;

      } else {

        if (!locale || locale.length === 0) {
          locale = useFallbackLocaleSuffix.value;
        } else if (!locale.startsWith(".")) {
          locale = `.${locale}`;
        }

        const res2 = await fetch(fetchSource + locale + useFileExtensions.value);

        if (res2.ok) {

          content.value = await res.text();
          success.value = true;

        } else {

          content.value = "";
          success.value = false;
          finallyFallbackFnFlag = true;

        }

      }

    } catch (error) {

      if (!locale || locale.length === 0) {
        locale = useFallbackLocaleSuffix.value;
      } else if (!locale.startsWith(".")) {
        locale = `.${locale}`;
      }

      const res2 = await fetch(fetchSource + locale + useFileExtensions.value);

      if (res2.ok) {

        content.value = await res2.text();
        success.value = true;

      } else {

        content.value = "";
        success.value = false;
        finallyFallbackFnFlag = true;

      }

    } finally {

      loading.value = false;

      if (finallyFallbackFnFlag) {

        props.finalFallbackFn();

        if (props.redirectTo404) {
          await router.replace("/404");
        }

      }

    }

  }
};

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
    if (!props.i18n)
      return;
    const event = e as { locale: string };
    await toLoadMarkdownContent(props.source, event.locale);
  });

  await toLoadMarkdownContent(props.source);

});

onUnmounted(() => {

  emitter.off("toChangeLocale");

});

</script>

<template>

  <wave-loading v-show="loading" />

  <div v-show="!loading" v-html="useMarkdownHtml" class="markdown-body" :key="key" />

</template>

<style lang="css">

</style>