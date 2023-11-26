<script setup lang="ts">

import type { AuthorModel } from "@/apis/ContentModels";

const props = withDefaults(defineProps<{
  author: AuthorModel
}>(), {});

</script>

<template>

  <div class="w-32 inline-block align-top">

    <div class="w-12 rounded-full overflow-hidden mx-auto">
      <img :src="author.avatar" :alt="author.name" />
    </div>

    <div class="text-center text-sm p-3 font-light">
      {{ author.name }}
    </div>

  </div>


</template>

<style scoped lang="css">

</style>