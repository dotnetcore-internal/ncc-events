<script setup lang="ts">
import { useRoute } from "vue-router";
import Anchor from "@/components/basic/AnchorElement.vue";

const route = useRoute();

const clearAllCache = () => {
  localStorage.clear();
};

</script>

<template>
  <div class="copyright">

    <span class="leading-6">
      {{ $t("copyright") }}
    </span>

    <br />

    <span class="leading-6">
      {{ $t("footer-note-part1") }}

      <slot name="maintain-by"></slot>

      {{ $t("footer-note-part2") }}

      <span class="dev" v-html="$t('footer-note-part3')"></span>

      <span class="dev" v-html="$t('footer-note-part4')"></span>

      {{ $t("footer-note-part5") }}
    </span>

    <br /><br />

    <span class="pr-2 leading-6">
      <anchor
        mode="classic"
        :href="'https://github.com/dotnetcore/ncc-events/issues/new?title=Your+issue&projects=dotnetcore/ncc-events/1&body=From+URL%3A+https%3A%2F%2Fevents.ncc.work'+route.path.replace(/\//g, '%2F')"
        target="_blank"
        :title="$t('submit-website-bug')">
        {{ $t("submit-website-bug") }}
        </anchor>
    </span>

    |

    <span class="px-2 leading-6">
      <span @click="clearAllCache" :title="$t('clear-all-cache')" class="cursor-pointer">
        {{ $t("clear-all-cache") }}
      </span>
    </span>

    |

    <span class="pl-2 leading-6">
       {{ $t("we-love-os") }}
    </span>

  </div>
</template>

<style scoped lang="css">
.copyright {
  @apply px-5 text-xs my-3.5 align-middle float-left;
}

.dev > a {
  @apply underline underline-offset-2;
}
</style>