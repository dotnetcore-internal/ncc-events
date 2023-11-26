<script setup lang="ts">
import { inject, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useRoute } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";

import { Earth } from "@icon-park/vue-next";
import { setLocaleToCookie } from "@/hooks/usePageToolkits";
import { toSetOrLoadLanguage } from "@/hooks/useLocaleToolkits";

import TitleBlock from "@/components/blocks/TitleBlock.vue";

const i18n = inject("$i18n");
const route = useRoute();
const uiStore = useUiStore();
const emitter = useEmitter();

const target = ref(null);
const displayLanguagesBox = ref(false);

onClickOutside(target, () => hideLanguagesBox());

const hideLanguagesBox = () => {
  displayLanguagesBox.value = false;
};

const switchLanguagesBox = () => {
  displayLanguagesBox.value = !displayLanguagesBox.value;
};

const setLanguage = async (locale: string) => {

  hideLanguagesBox();

  await toSetOrLoadLanguage(i18n, locale, route.path);

  uiStore.setLocale(locale);

  emitter.emit("toChangeLocale", { locale: locale });

  setLocaleToCookie(locale);
};
</script>

<template>

  <div class="p-5 py-7 pr-0 mx-auto align-middle float-right cursor-pointer relative">

    <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster">

      <div ref="target" class="languages-box" v-show="displayLanguagesBox">

        <title-block h1-mode="false" color-mode="light" :with-horizontal-rule="false" :with-placeholder="true" :is-font-black="false">
          <div class="text-lg text-center">{{ $t("i18n-switch-title") }}</div>
        </title-block>

        <div class="columns-1">
          <span class="languages-item" @click="setLanguage('zh')">中文（简体）</span>
          <span class="languages-item" @click="setLanguage('zh-tw')">中文（正体）</span>
          <span class="languages-item" @click="setLanguage('en')">English</span>
        </div>

      </div>

    </transition>

    <earth theme="outline" size="24" fill="#f8f8f8" :strokeWidth="2" @click="switchLanguagesBox" :title="$t('i18n-switch-tip')" />
  </div>

  <div class="clear-both"></div>

  <div class="fixed left-0 top-0 right-0 bottom-0 z-40" v-show="displayLanguagesBox"></div>


</template>

<style scoped lang="css">
.languages-box {
  @apply absolute -right-16 bottom-14 pb-5 w-52 z-50 overflow-hidden;
  @apply bg-white text-black;
  @apply rounded-2xl shadow-2xl;
}

.languages-item {
  @apply p-1 px-3 block;
  @apply text-center;
  @apply hover:bg-purple-400/20;
  @apply cursor-pointer;
}
</style>