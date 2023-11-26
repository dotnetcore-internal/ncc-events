<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

import { useEmitter } from "@/hooks/useEmitter";

import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const props = withDefaults(defineProps<{
  featureKey: string
}>(), {});

const emitter = useEmitter();

const itemTarget = ref(null);
const panelTarget = ref(null);
const { isOutside: itemIsOutside } = useMouseInElement(itemTarget);
const { isOutside: panelIsOutside } = useMouseInElement(panelTarget);

const hidePanelCommandRef = ref<boolean | null>(null);

const hidePanelCommand = (keyPassed: string) => {
  if (keyPassed === props.featureKey) {
    hidePanelCommandRef.value = true;
  }
  nextTick(() => {
    hidePanelCommandRef.value = null;
  });
};

const itemIsOutsideRef = ref(true);
const panelIsOutsideRef = ref(true);

watch(itemIsOutside, (value) => {
  let timeout = 200;
  if (value) {
    timeout = 500;
  }
  setTimeout(() => {
    nextTick(() => {
      itemIsOutsideRef.value = value;
    });
  }, timeout);

});

watch(panelIsOutside, (value) => {
  let timeout = 200;
  if (value) {
    timeout = 500;
  }
  setTimeout(() => {
    nextTick(() => {
      panelIsOutsideRef.value = value;
    });
  }, timeout);

});

const displayPanel = computed(() => {
  if (hidePanelCommandRef.value)
    return false;
  return !itemIsOutsideRef.value || !panelIsOutsideRef.value;
});


watch(displayPanel, (value) => {
  if (value) {
    // console.log("displayPanel", props.featureKey);
    emitter.emit("toSelectHeaderPanelFor", { featureKey: props.featureKey });
  } else {
    // console.log("hidePanel", props.featureKey);
  }
});

onMounted(() => {
  emitter.on("toSelectHeaderPanelFor", (e) => {
    const event = e as { featureKey: string; };
    if (event.featureKey === props.featureKey)
      return;
    hidePanelCommand(event.featureKey);
  });
});

onUnmounted(() => {
  emitter.off("toSelectHeaderPanelFor");
});
</script>

<template>
  <a href="#" @click.prevent
     class="block-title text-gray-500 text-sm text-center z-50"
     :class="{
        'border-b-4': displayPanel,
        'border-purple-800': displayPanel,
        'dark:border-purple-500': displayPanel,
        'text-purple-700': displayPanel,
        'dark:text-purple-100': displayPanel,
     }"
     ref="itemTarget">
    <slot></slot>
  </a>


  <transition enter-active-class="animate__animated animate__fadeIn animate__faster">
    <!--leave-active-class="animate__animated animate__fadeOut animate__fast"-->

    <div class="block-body" ref="panelTarget" v-show="displayPanel">

      <div class="w-full h-0.5 bg-purple-600/40"></div>

      <div class="responsive-width h-full">

        <div class="grid grid-cols-3 h-full">

          <div class="col1 h-full block pr-6">
            <slot name="col1"></slot>
            <placeholder-block height="1.25rem"></placeholder-block>
          </div>

          <div class="col2 h-full block pr-3">
            <slot name="col2"></slot>
            <placeholder-block height="1.25rem"></placeholder-block>
          </div>

          <div class="col3 h-full block border-l-2 border-gray-200/40 dark:border-white/10 pl-3">
            <slot name="col3"></slot>
            <placeholder-block height="1.25rem"></placeholder-block>
          </div>

        </div>

      </div>

    </div>

  </transition>

</template>

<style scoped lang="css">
.block-title {
  @apply inline-block;
  @apply h-20 -mt-0.5 mx-2 xl:px-7 lg:px-5 py-3;
  @apply font-bold hover:text-purple-700 dark:hover:text-purple-100;
  @apply hover:border-b-4 border-purple-800 dark:border-purple-500;
  line-height: 3.5rem;
}

.block-body {
  @apply fixed w-full left-0 right-0 z-30 h-auto overflow-hidden;
  @apply shadow-md shadow-gray-200 dark:shadow-black;
  @apply bg-white dark:bg-black;
  @apply text-left;
  /*height: 36rem;*/
  top: calc(5rem - 2px);
  /*
   * 此处临时性地进行了注释，以便在目前内容不丰富时不至于过多留白
   * 1、注释 height: 36rem，启用 h-auto 和 overflow-hidden，让 Panel 自动适配
   * 2、不使用
   */
}

@media (prefers-color-scheme: dark) {

}
</style>