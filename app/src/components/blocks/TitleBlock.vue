<script setup lang="ts">
import { computed } from "vue";
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const props = withDefaults(defineProps<{
  h1Mode?: "true" | "false";
  colorMode?: "auto" | "dark" | "light" | "always-dark" | "always-light";
  withHorizontalRule?: boolean;
  withPlaceholder?: boolean;
  isFontBold?: boolean;
  isFontBlack?: boolean;
}>(), {
  h1Mode: "true",
  colorMode: "auto",
  withHorizontalRule: false,
  withPlaceholder: undefined,
  isFontBold: false,
  isFontBlack: true
});

const titleColor = computed(() => {
  let mode = props.colorMode;
  switch (mode) {
    case "dark":
    case "always-light":
      return "text-white";
    case "light":
    case "always-dark":
      return "text-black";
    default:
      return "text-black dark:text-white";
  }
});

const titleFontBlack = computed(() => {
  return props.isFontBlack ? "font-black" : "";
});

const titleFontBold = computed(() => {
  return props.isFontBold ? "font-bold" : "";
});

const titleClass = computed(() => {
  return `${titleColor.value} ${titleFontBlack.value} ${titleFontBold.value}`;
});

const displayPlaceholder = computed(() => {
  return props.withHorizontalRule
    ? false
    : props.withPlaceholder ?? true;
});

</script>

<template>

  <h1 v-if="h1Mode" class="title-block text-4xl tracking-tight p-5 pb-0" :class="titleClass">
    <slot></slot>
  </h1>
  <div v-else class="title-block text-3xl tracking-tight p-5 pb-0" :class="titleClass">
    <slot></slot>
  </div>

  <HorizontalRuleElement v-if="withHorizontalRule" :colorMode="colorMode" />

  <PlaceholderBlock v-else-if="displayPlaceholder" height="1.25rem" />

</template>

<style scoped lang="css">
.title-block {
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}
</style>