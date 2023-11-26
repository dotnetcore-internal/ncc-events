<script setup lang="ts">
import Anchor from "@/components/basic/AnchorElement.vue";

const props = withDefaults(defineProps<{
  mode?: "h5" | "classic"
  title?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  routeName?: string;
  classValue?: string;
}>(), {
  mode: "h5",
  title: "",
  href: "#",
  target: "_self"
});
</script>

<template>
  <div class="title-link-block">
    <anchor :href="href" :route-name="routeName" :title="title" :mode="mode" class="leading-7" :class-value="classValue" :target="target">
      <slot></slot>
    </anchor>
  </div>
</template>

<style scoped lang="css">
.title-link-block {
  @apply text-black dark:text-white hover:text-purple-500 font-bold;
  @apply underline underline-offset-8 decoration-purple-500 decoration-2;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}
</style>