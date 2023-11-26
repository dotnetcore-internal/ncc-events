<script setup lang="ts">

import { computed } from "vue";

const props = withDefaults(defineProps<{
  colorMode?: "auto" | "dark" | "light" | "always-dark" | "always-light"
}>(), {
  colorMode: "auto"
});

const colorClass = computed(() => {
  let mode = props.colorMode;
  switch (mode) {
    case "dark":
    case "always-light":
      return "border-white";
    case "light":
    case "always-dark":
      return "border-black";
    default:
      return "border-black dark:border-white";
  }
});

</script>

<template>

  <hr class="m-5" :class="colorClass" />

</template>

<style scoped lang="css">

</style>