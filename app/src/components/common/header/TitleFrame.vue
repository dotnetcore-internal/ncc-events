<script setup lang="ts">
import { computed, ref } from "vue";
import { usePreferredDark } from "@vueuse/core";

import { useUiStore } from "@/stores/uiStore";
import { go, lockBody, unlockBody } from "@/hooks/usePageToolkits";

import { Close, HamburgerButton } from "@icon-park/vue-next";

import JoinUsButton from "@/components/common/JoinUsButton.vue";
import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";

const uiStore = useUiStore();

const currentPrefersDarkMode = usePreferredDark();

const useLogoUrl = computed(() => {
  return currentPrefersDarkMode.value
    ? "/images/logo-header-dark.png"
    : "/images/logo-header-light.png";
});

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const useHeaderClass = computed(() => {
  return uiStore.isMobileMode
    ? "bg-white dark:bg-black"
    : "backdrop-blur-md bg-white/75 dark:bg-black/75";
});

//region Mobile Mode

const displayMobileMenu = ref(false);

const switchMobileMenu = () => {
  if (displayMobileMenu.value) {
    unlockBody();
  } else {
    lockBody();
  }
  displayMobileMenu.value = !displayMobileMenu.value;
};

//endregion

</script>

<template>

  <header :class="useHeaderClass"
          class="h-20 w-full shadow-md fixed left-0 top-0 right-0 z-50">

    <div class="responsive-width" v-show="!uiStore.isMobileMode">

      <left-right-layout>
        <template #left>
          <div class="inline-block align-top">
            <a href="https://ncc.work/" target="_blank" title=".NET Core Community">
              <img :src="useLogoUrl" width="180" alt="NCC" />
            </a>
          </div>
          <div class="ml-5 inline-block">

            <slot></slot>

          </div>

        </template>

        <template #right>
          <div class="mx-auto mt-6">
            <join-us-button>
              {{ $t("join-at-header-desktop") }}
            </join-us-button>
          </div>
        </template>

      </left-right-layout>

    </div>

    <div class="responsive-width" v-show="uiStore.isMobileMode">
      <left-right-layout>

        <template #left>
          <div class="inline-block align-top mt-2 ml-4">
            <a href="https://ncc.work/" target="_blank" title=".NET Core Community">
              <img :src="useLogoUrl" width="140" alt="NCC" />
            </a>
          </div>
        </template>

        <template #right>
          <div class="mr-8 mt-8 cursor-pointer" @click="switchMobileMenu">
            <hamburger-button v-show="!displayMobileMenu" theme="filled" size="28" :fill="useIconColor" />
            <close v-show="displayMobileMenu" theme="filled" size="28" :fill="useIconColor" />
          </div>
        </template>

      </left-right-layout>
    </div>

  </header>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster">

    <div id="mobile-menu" v-show="uiStore.isMobileMode && displayMobileMenu">
      <div class="fixed top-20 left-0 right-0 bottom-0 overflow-scroll">
        <div class="responsive-width">

          <ul class="title-ul">
            <slot></slot>
          </ul>

          <div class="px-10">
            <join-us-button mode="block" :need-refresh="true">
              <span class="text-lg">{{ $t("join-at-header-mobile") }}</span>
            </join-us-button>
          </div>

        </div>

      </div>
    </div>

  </transition>


</template>

<style scoped lang="css">
.title-ul {
  @apply p-10;
}

#mobile-menu {
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply z-30;
  @apply transition-all duration-300;
  @apply flex flex-col justify-center items-center;
  @apply bg-white dark:bg-black;
}
</style>