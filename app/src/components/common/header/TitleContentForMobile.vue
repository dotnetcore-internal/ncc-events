<script setup lang="ts">
import { computed, ref } from "vue";
import { usePreferredDark } from "@vueuse/core";
import { Down, Up } from "@icon-park/vue-next";

import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";

const currentPrefersDarkMode = usePreferredDark();

const displayPanel = ref(false);

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const switchPanel = () => {
  displayPanel.value = !displayPanel.value;
};
</script>

<template>
  <li class="title-li-item">
    <div @click="switchPanel" class="cursor-pointer">
      <left-right-layout>
        <template #left>
          <slot></slot>
        </template>
        <template #right>
          <div class="m-3">
            <up v-if="displayPanel" theme="filled" size="16" :fill="useIconColor" class="mobile-control-icon" />
            <down v-else theme="filled" size="16" :fill="useIconColor" class="mobile-control-icon" />
          </div>
        </template>
      </left-right-layout>
    </div>

    <div class="block-body-mobile" v-show="displayPanel">

      <div class="responsive-width">

        <div class="col1">
          <slot name="col1"></slot>
        </div>

        <div class="col2">
          <slot name="col2"></slot>
        </div>

        <div class="col3">
          <slot name="col3"></slot>
        </div>

      </div>

    </div>

  </li>
</template>

<style scoped lang="css">
.title-li-item {
  @apply block;
  @apply dark:text-white;
  @apply border-b border-gray-200 dark:border-gray-700;;
  line-height: 3rem;
}

.block-body-mobile {
  @apply border-t-4 border-purple-800 dark:border-purple-500;
}
</style>