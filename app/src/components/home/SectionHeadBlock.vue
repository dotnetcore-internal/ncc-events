<script setup lang="ts">

</script>

<template>

  <span class="section-head">
    <slot></slot>
  </span>

</template>

<style scoped lang="css">
.section-head {
  @apply text-5xl font-medium;
  @apply pt-16 ;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  line-height: 4.75rem;
}
</style>