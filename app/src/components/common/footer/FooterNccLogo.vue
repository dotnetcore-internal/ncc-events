<script setup lang="ts">

import { go } from "@/hooks/usePageToolkits";
</script>

<template>
  <div class="p-5 py-7 mx-auto align-middle float-right">
    <a href="https://ncc.work/"
       target="_blank"
       @click.prevent="go('home')">
      <img src="/images/logo-seq.wire-black.png" width="24" alt="NCC" />
    </a>
  </div>
</template>

<style scoped lang="css">

</style>