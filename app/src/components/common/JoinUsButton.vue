<script setup lang="ts">
const props = withDefaults(defineProps<{
  mode?: "inline-block" | "block";
}>(), {
  mode: "inline-block"
});
</script>

<template>
  <a href="https://ncc.work/about/join"
     target="_blank"
     class="text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-br from-pink-700 to-purple-700"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <span v-if="$slots.default">
      <slot></slot>
      </span>
    <span v-else>{{ $t("join-at-header-default") }}</span>
  </a>
</template>

<style scoped lang="css">

</style>