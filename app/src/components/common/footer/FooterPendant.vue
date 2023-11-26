<script setup lang="ts">
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";
import { go } from "@/hooks/usePageToolkits";
import { Github, Telegram, Twitter, Wechat } from "@icon-park/vue-next";

let footerIconWidth = ref(26);

const qrCodeBoxRef = ref(null);
const { isOutside } = useMouseInElement(qrCodeBoxRef);
</script>

<template>

  <a href="https://twitter.com/ncc_community" :title="$t('social-twitter-tip')" target="_blank" class="align-middle inline-block mx-2">
    <Twitter theme="filled" :size="footerIconWidth" fill="#ffffff" />
  </a>
  <a href="https://reddit.com/r/TheNCC" :title="$t('social-reddit-tip')" target="_blank" class="align-middle inline-block mx-2">
    <svg t="1698644520030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4566" data-spm-anchor-id="a313x.search_index.0.i5.73f13a81QDVP27" :width="footerIconWidth" :height="footerIconWidth">
      <path
          d="M625.727964 666.847792q9.151997 9.151997 0 17.727994-35.423989 35.423989-113.727964 35.423989t-113.727964-35.423989q-9.151997-8.575997 0-17.727994 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999q27.423991 27.999991 96.57597 27.999991 68.575979 0 96.57597-27.999991 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999zM450.272019 563.423824q0 21.151993-14.847995 35.999989t-35.999989 14.847995-36.287989-14.847995-15.135995-35.999989q0-21.727993 15.135995-36.575989t36.287989-14.847995 35.999989 15.135995 14.847995 36.287989zM675.999949 563.423824q0 21.151993-15.135995 35.999989t-36.287989 14.847995-35.999989-14.847995-14.847995-35.999989 14.847995-36.287989 35.999989-15.135995 36.287989 14.847995 15.135995 36.575989zM819.423904 494.847845q0-27.999991-19.999994-47.999985t-48.575985-19.999994-49.151985 20.575994q-74.271977-51.423984-177.727944-54.847983l35.999989-161.727949 114.271964 25.727992q0 21.151993 14.847995 35.999989t35.999989 14.847995 36.287989-15.135995 15.135995-36.287989-15.135995-36.287989-36.287989-15.135995q-30.84799 0-45.727986 28.575991l-126.271961-27.999991q-10.847997-2.847999-14.271996 9.151997l-39.423988 178.271944q-102.847968 3.999999-176.575945 55.423983-19.999994-21.151993-49.727984-21.151993-28.575991 0-48.575985 19.999994t-19.999994 47.999985q0 19.999994 10.559997 36.575989t28.287991 25.151992q-3.423999 15.423995-3.423999 31.99999 0 81.151975 79.999975 138.847957t192.57594 57.727982q113.151965 0 193.15194-57.727982t79.999975-138.847957q0-18.271994-3.999999-32.57599 17.151995-8.575997 27.423991-24.863992t10.271997-36.287989zM1023.99984 511.99984q0 103.999968-40.575987 198.847938t-109.151966 163.423949-163.423949 109.151966-198.847938 40.575987-198.847938-40.575987-163.423949-109.151966-109.151966-163.423949-40.575987-198.847938 40.575987-198.847938 109.151966-163.423949 163.423949-109.151966 198.847938-40.575987 198.847938 40.575987 163.423949 109.151966 109.151966 163.423949 40.575987 198.847938z"
          p-id="4567" data-spm-anchor-id="a313x.search_index.0.i4.73f13a81QDVP27" class="selected" fill="#ffffff"></path>
    </svg>
  </a>
  <a href="https://github.com/dotnetcore" :title="$t('social-github-tip')" target="_blank"
     class="align-middle inline-block mx-2">
    <Github theme="filled" :size="footerIconWidth" fill="#ffffff" />
  </a>
  <a href="https://gitee.com/dotnetcore" :title="$t('social-gitee-tip')" target="_blank" class="align-middle inline-block mx-2">
    <svg t="1698644918070" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5596" :width="footerIconWidth" :height="footerIconWidth">
      <path d="M512 992C246.896 992 32 777.104 32 512S246.896 32 512 32s480 214.896 480 480-214.896 480-480 480z m242.952-533.328H482.383a23.712 23.712 0 0 0-23.71 23.712l-0.025 59.256c0 13.08 10.608 23.712 23.688 23.712h165.96c13.104 0 23.712 10.608 23.712 23.688v11.856a71.112 71.112 0 0 1-71.112 71.112H375.68a23.712 23.712 0 0 1-23.688-23.712V423.128a71.112 71.112 0 0 1 71.088-71.112h331.824a23.712 23.712 0 0 0 23.688-23.712l0.072-59.256a23.712 23.712 0 0 0-23.688-23.712H423.08a177.769 177.769 0 0 0-177.769 177.792v331.825c0 13.104 10.609 23.712 23.713 23.712h349.632A159.984 159.984 0 0 0 778.64 618.681V482.36a23.712 23.712 0 0 0-23.712-23.688z" fill="#ffffff" p-id="5597" data-spm-anchor-id="a313x.search_index.0.i8.73f13a81QDVP27"
            class="selected"></path>
    </svg>
  </a>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div class="absolute bottom-16 right-12 w-52 rounded-2xl overflow-hidden" v-show="!isOutside">
      <img src="/images/official-wechat-account-qrcode.jpg" alt="NCC WeChat QR Code" />
    </div>
  </transition>
  <a ref="qrCodeBoxRef"
     href="https://ncc.work/wechat-open-ncc"
     :title="$t('social-wechat-tip')"
     target="_blank"
     class="align-middle inline-block mx-2">
    <Wechat theme="filled" :size="footerIconWidth" fill="#ffffff" />
  </a>
  <a href="https://t.me/ncc_radio" :title="$t('social-telegram-radio-tip')" target="_blank" class="align-middle inline-block mx-2">
    <Telegram theme="filled" :size="footerIconWidth" fill="#ffffff" />
  </a>

</template>

<style scoped lang="css">

</style>