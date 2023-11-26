<script setup lang="ts">

import { go } from "@/hooks/usePageToolkits";

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
  <a v-if="mode === 'h5'" :class="classValue" :href="props.href" @click.prevent="go(props.routeName??'home')" :title="title">
    <slot></slot>
  </a>
  <a v-else :class="classValue" :href="props.href" :target="props.target" :title="title">
    <slot></slot>
  </a>
</template>

<style scoped lang="css">

</style>