<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

setTitle("Page Not Found");
</script>

<template>
  <body-block>

    <div class="err-404">
      <p class="py-6">404</p>
      <p class="text-4xl pt-3">Page Not Found！</p>
      <p class="text-lg font-light leading-7 py-2">This is not the web page you're looking for.</p>
    </div>
    <div class="err-jump">
      <anchor href="/" title="Go to Homepage" mode="classic">
        <span class="text-white px-5 py-2 bg-gradient-to-br from-pink-700 to-purple-700 rounded-lg">
          Go to Homepage
        </span>
      </anchor>
    </div>

  </body-block>
</template>

<style scoped lang="css">
.err-404 {
  @apply text-9xl font-black text-center leading-10;
  @apply pt-48;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

.err-jump {
  @apply text-sm text-center leading-10 mt-6;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
}
</style>