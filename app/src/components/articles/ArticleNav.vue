<script setup lang="ts">
import { computed } from "vue";

import type { PageDescriptor } from "@/apis/ContentModels";

const props = withDefaults(defineProps<{
  descriptor: PageDescriptor;
  previous: () => {};
  next: () => {};
  first: () => {};
  last: () => {};
  go: (pageNumber: number) => {};
  baseUrl?: string;
  useTitle?: string;
  useFolioMode?: "default" | "name" | "folio";
  hiddenIfBtnDisabled?: boolean;
  alignCenter?: boolean;
  enableFirstBtn?: boolean;
  enableLastBtn?: boolean;
  enablePreviousBtn?: boolean;
  enableNextBtn?: boolean;
  displayFirstBtnMode?: "default" | "folio" | "customized";
  displayLastBtnMode?: "default" | "folio" | "customized";
  displayPreviousBtnMode?: "default" | "customized";
  displayNextBtnMode?: "default" | "customized";
}>(), {
  useTitle: "",
  useFolioMode: "default",
  hiddenIfBtnDisabled: false,
  alignCenter: true,
  enableFirstBtn: true,
  enableLastBtn: true,
  enablePreviousBtn: true,
  enableNextBtn: true,
  displayFirstBtnMode: "default",
  displayLastBtnMode: "default",
  displayPreviousBtnMode: "default",
  displayNextBtnMode: "default"
});

const hasPreviousBtn = computed(() => {
  return props.descriptor.current > 1;
});

const hasNextBtn = computed(() => {
  return props.descriptor.current < props.descriptor.total;
});

const useAvailablePageNumbers = computed(() => {

  const result = [];

  if (props.descriptor.total <= 5) {

    for (let i = 1; i <= props.descriptor.total; i++) {
      result.push(i);
    }

  } else {
    // 总页码大于5
    if (props.descriptor.current <= 2) {
      // 左侧临界值
      for (let i = 1; i <= 5; i++) {
        result.push(i);
      }
    } else if (props.descriptor.current >= props.descriptor.total - 1) {
      // 右侧临界值
      for (let i = props.descriptor.total - 4; i <= props.descriptor.total; i++) {
        result.push(i);
      }
    } else {
      // 中间的状态
      for (let i = props.descriptor.current - 2; i <= props.descriptor.current + 2; i++) {
        result.push(i);
      }
    }
  }
  return result;
});

const getHref = (pageNumber: number) => {
  if (props.baseUrl) {
    return pageNumber === 1
        ? `${props.baseUrl}`
        : `${props.baseUrl}/page/${pageNumber}`;
  } else {
    return "javascript:;";
  }
};

const changeUrlOnly = (url: string) => {
  window.history.pushState({}, props.useTitle, url);
};

const first = () => {
  changeUrlOnly(getHref(1));
  props.first();
};

const last = () => {
  changeUrlOnly(getHref(props.descriptor.total));
  props.last();
};

const previous = () => {
  changeUrlOnly(getHref(props.descriptor.current - 1));
  props.previous();
};

const next = () => {
  changeUrlOnly(getHref(props.descriptor.current + 1));
  props.next();
};

const go = (pageNumber: number) => {
  changeUrlOnly(getHref(pageNumber));
  props.go(pageNumber);
};

const folioToName = (pageNumber: number) => {
  if (props.useFolioMode !== "name")
    return pageNumber;

  if (!props.descriptor.nameSeries)
    return pageNumber;

  const index = pageNumber - 1;

  if (index < 0 || index >= props.descriptor.nameSeries.length)
    return pageNumber;

  return props.descriptor.nameSeries[index];
};

const useFirstFolioOrName = computed(() => {
  if (!props.enableFirstBtn)
    return "";
  if (props.useFolioMode === "name") {
    return props.descriptor.nameSeries ? props.descriptor.nameSeries[0] : 1;
  } else {
    return 1;
  }
});

const useLastFolioOrName = computed(() => {
  if (!props.enableLastBtn)
    return "";
  if (props.useFolioMode === "name") {
    return props.descriptor.nameSeries ? props.descriptor.nameSeries[props.descriptor.nameSeries.length - 1] : props.descriptor.total;
  } else {
    return props.descriptor.total;
  }
});

</script>

<template>

  <div class="article-pagination" :class="{'justify-center': alignCenter}">

    <a v-if="enableFirstBtn"
       @click.prevent="first" :href="getHref(1)"
       :class="{disabled: descriptor.current === 1, conceal: descriptor.current === 1 && hiddenIfBtnDisabled}">
      <span v-if="displayFirstBtnMode === 'folio'">
        {{ useFirstFolioOrName }}
      </span>
      <span v-else-if="displayFirstBtnMode === 'customized'">
        <slot name="first-btn">
          {{ $t("page.first") }}
        </slot>
      </span>
      <span v-else>
        {{ $t("page.first") }}
      </span>
    </a>

    <a v-if="enablePreviousBtn"
       @click.prevent='previous'
       :href="getHref(descriptor.current-1)"
       :class="{disabled: !hasPreviousBtn, conceal: !hasPreviousBtn && hiddenIfBtnDisabled}">
      <span v-if="displayPreviousBtnMode === 'customized'">
        <slot name="previous-btn">
          {{ $t("page.previous") }}
        </slot>
      </span>
      <span v-else>
        {{ $t("page.previous") }}
      </span>
    </a>

    <span v-if='enablePreviousBtn && descriptor.current > 3'>...</span>

    <a v-for='pageNumber in useAvailablePageNumbers'
       @click.prevent='go(pageNumber)'
       :href="getHref(pageNumber)"
       :class='{active: descriptor.current===pageNumber}'
       :key='pageNumber'>
      {{ folioToName(pageNumber) }}
    </a>

    <span v-if='enableNextBtn && descriptor.current < descriptor.total - 2'>...</span>

    <a v-if="enableNextBtn"
       @click.prevent='next'
       :href="getHref(descriptor.current+1)"
       :class='{disabled: !hasNextBtn,conceal:!hasNextBtn && hiddenIfBtnDisabled}'>
      <span v-if="displayNextBtnMode === 'customized'">
        <slot name="next-btn">
          {{ $t("page.next") }}
        </slot>
      </span>
      <span v-else>
        {{ $t("page.next") }}
      </span>
    </a>

    <a v-if="enableLastBtn"
       @click.prevent="last"
       :href="getHref(descriptor.total)"
       :class="{disabled: descriptor.current === descriptor.total,conceal: descriptor.current === descriptor.total && hiddenIfBtnDisabled}">
      <span v-if="displayLastBtnMode === 'folio'">
        {{ useLastFolioOrName }}
      </span>
      <span v-else-if="displayLastBtnMode === 'customized'">
        <slot name="last-btn">
          {{ $t("page.last") }}
        </slot>
      </span>
      <span v-else>
        {{ $t("page.last") }}
      </span>
    </a>

  </div>

</template>

<style scoped lang="css">

.article-pagination {
  @apply flex p-8;

  > a {
    @apply inline-block px-2 py-1 mr-2.5;
    @apply border border-gray-300 dark:border-gray-700 rounded;
    @apply text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-sm;
    @apply no-underline;

    &.active {
      @apply text-white dark:text-purple-300 bg-purple-800 border-purple-800;
    }

    &.disabled {
      @apply cursor-not-allowed opacity-40 dark:opacity-25;
      @apply hover:text-gray-400;
    }

    &.conceal {
      display: none;
    }
  }

  > span {
    @apply mr-2.5;
  }
}

</style>