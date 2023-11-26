<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  height: "20px" | "90px" | "1.25rem" | "2.5rem" | string,
  bgColor?: "" | "bg-black" | "bg-white",
  bgColorClass?: string,
}>(), {
  bgColor: ""
});

const getBgColor = computed(() => {
  let color = props.bgColor;
  switch (color) {
    case "bg-black":
      return "bg-black";
    case "bg-white":
      return "bg-white";
    default:
      return props.bgColorClass ?? "";
  }
});
</script>

<template>
  <div :class="getBgColor" :style="{height: height}"></div>
</template>

<style scoped lang="css">

</style>