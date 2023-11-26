<script setup lang="ts">
import type { AuthorModel } from "@/apis/ContentModels";
import { getAuthors, hasAuthors } from "@/apis/ContentModels";

import ArticleAuthorBlock from "@/components/articles/ArticleAuthorBlock.vue";

const props = withDefaults(defineProps<{
  author: AuthorModel | AuthorModel[] | null
}>(), {});

</script>

<template>

  <div v-if="hasAuthors(author)" class="mt-10">

    <article-author-block v-for="a in getAuthors(author)" :key="a.id" :author="a" />

    <div class="w-48 border-b-2 border-b-gray-400 mx-auto my-3"></div>

  </div>

</template>

<style scoped lang="css">

</style>