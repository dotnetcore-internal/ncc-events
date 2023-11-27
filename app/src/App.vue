<script setup lang="ts">
import { RouterView } from "vue-router";

import { useUiStore } from "@/stores/uiStore";
import { getCookieValueWithDefaults, go } from "@/hooks/usePageToolkits";

import NavigationResources from "@/components/common/NavigationResources.vue";
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import HeaderTitle from "@/components/common/header/HeaderTitle.vue";
import FooterPendant from "@/components/common/footer/FooterPendant.vue";
import FooterLocale from "@/components/common/footer/FooterLocale.vue";
import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import FooterCopyright from "@/components/common/footer/FooterCopyright.vue";
import FooterNccLogo from "@/components/common/footer/FooterNccLogo.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

const uiStore = useUiStore();

const locale = getCookieValueWithDefaults<string | unknown>("locale", (t) => t === undefined || t === null || t === "", () => "en") as string;

uiStore.setLocale(locale ?? "en");

</script>

<template>

  <header-title />

  <div class="mt-24 min-h-75vh">
    <RouterView />
  </div>

  <footer class="bg-black text-white relative">
    <div class="responsive-width">

      <placeholder-block height="90px" />

      <navigation-resources />

      <placeholder-block height="1.25rem" />

      <div class="p-5">
        <div class="inline-block align-middle">
          <a href="https://ncc.work/" title=".NET Core Community">
            <img src="/images/logo.black.png" width="220" alt="NCC" />
          </a>
        </div>
      </div>

      <div class="clear-both"></div>

      <div class="pb-2.5 px-5" v-show="!uiStore.isMobileMode">
        {{ $t("footer-we-part1") }} <span class="text-xl font-bold">{{ $t("footer-we-part2") }}</span>{{ $t("footer-we-part3") }} <br />
        {{ $t("footer-we-part4") }}
      </div>

      <div class="clear-both"></div>

      <left-right-layout>

        <template #left>
          <div class="p-5 inline-block align-middle">
            <a href="https://ncc.work/all-ncc"
               class="text-white font-bold border p-2 px-5">
              {{ $t("all-ncc") }}
            </a>
          </div>
        </template>

        <template #right>
          <div class="p-5">
            <FooterPendant />
          </div>
        </template>

      </left-right-layout>

      <horizontal-rule-element colorMode="dark" />

      <footer-copyright>
        <template #maintain-by>
          <anchor href="https://ncc.work/" title=".NET Core Community" mode="classic" class="underline hover:underline underline-offset-4">NCC</anchor>
        </template>
      </footer-copyright>

      <footer-ncc-logo />

      <footer-locale />

      <div class="clear-both"></div>

      <placeholder-block height="90px" bg-color="bg-black" />

    </div>
  </footer>

</template>

<style src="./App.css" lang="css"></style>
