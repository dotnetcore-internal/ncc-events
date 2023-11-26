<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { usePreferredDark, useWindowSize } from "@vueuse/core";
import { unlockBody } from "@/hooks/usePageToolkits";

import { useUiStore } from "@/stores/uiStore";
import { RightSmallUp } from "@icon-park/vue-next";

import TitleFrame from "@/components/common/header/TitleFrame.vue";
import TitleContentBlock from "@/components/common/header/TitleContentBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

const uiStore = useUiStore();

const { width } = useWindowSize();

const updateMobileMode = (n: number) => {
  if (n < 1024) {
    uiStore.setMobileMode(true);
    unlockBody();
  } else {
    uiStore.setMobileMode(false);
  }
};

watch(width, (n) => {
  updateMobileMode(n);
});

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const useSecondaryTitleTopBorder = computed(() => {
  return uiStore.isMobileMode
    ? "2px"
    : "0";
});

onMounted(() => {
  updateMobileMode(width.value);
});

</script>

<template>

  <title-frame>

    <title-content-block feature-key="about">
      <span class="header-title">{{ $t("about") }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t("about-block-discover-ncc") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/about/who-we-are" :title="$t('who-we-are')" mode="classic">
              {{ $t("who-we-are") }}
              <span>
                {{ $t("who-we-are-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/people/project-management-committee" :title="$t('pmc')" mode="classic">
              {{ $t("pmc") }}
              <span>
                {{ $t("pmc-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("about-block-additional-info") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/conduct" :title="$t('code-of-conduct')" mode="classic">
              {{ $t("code-of-conduct") }}
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/about/faq" :title="$t('faq')" mode="classic">
              {{ $t("faq") }}
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("about-block-featured-reads") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/about/story" :title="$t('story')" mode="classic">
              {{ $t("story") }}
              <span>
                {{ $t("story-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="projects">
      <span class="header-title">{{ $t("projects") }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t("projects-block-ncc-projects") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/projects" :title="$t('project-all-full')" mode="classic">
              {{ $t("project-all") }}
              <span>
                {{ $t("project-all-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/top-level-projects" :title="$t('project-top-level-full')" mode="classic">
              {{ $t("project-top-level") }}
              <span>
                {{ $t("project-top-level-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/archived-projects" :title="$t('project-archived-full')" mode="classic">
              {{ $t("project-archived") }}
              <span>
                {{ $t("project-archived-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/project-maturity-model" :title="$t('project-maturity-model-full')" mode="classic">
              {{ $t("project-maturity-model") }}
              <span>
                {{ $t("project-maturity-model-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("projects-block-get-involved") }}</li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work" :title="$t('project-contribute')" target="_blank" mode="classic">
              {{ $t("project-contribute") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
              <span>
                {{ $t("project-contribute-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://landscape.ncc.work" :title="$t('project-landscape')" target="_blank" mode="classic">
              {{ $t("project-landscape") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
              <span>
                {{ $t("project-landscape-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work/project-join-ncc" :title="$t('project-how-to-join-us')" target="_blank" mode="classic">
              {{ $t("project-how-to-join-us") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("projects-block-tools-resources") }}</li>

          <li class="header-content">
            <anchor href="https://tools.ncc.work" :title="$t('project-tools')" target="_blank" mode="classic">
              {{ $t("project-tools") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank" mode="classic">
              NCC@GitHub
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank" mode="classic">
              NCC@Gitee
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="learning">
      <span class="header-title">{{ $t("learning") }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t("learning-block-applying") }}</li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("learning-block-additional-info") }}</li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("learning-block-featured-reads") }}</li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="community">
      <span class="header-title">{{ $t("community") }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t("community-block-take-part") }}</li>

          <li class="header-content">
            <anchor href="/" route-name="home" :title="$t('community-events')">
              {{ $t("community-events") }}
              <span>
                {{ $t("community-events-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/meetups" route-name="meetups" :title="$t('community-meetups')">
              {{ $t("community-meetups") }}
              <span>
                {{ $t("community-meetups-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://2f.ncc.work" :title="$t('community-2f')" target="_blank" mode="classic">
              {{ $t("community-2f") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
              <span>
                {{ $t("community-2f-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("community-block-content") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/community-online" :title="$t('community-online')" mode="classic">
              {{ $t("community-online") }}
              <span>
                {{ $t("community-online-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/participation-guidelines" :title="$t('community-participation')" mode="classic">
              {{ $t("community-participation") }}
              <span>
                {{ $t("community-participation-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/rules" :title="$t('community-rules')" mode="classic">
              {{ $t("community-rules") }}
              <span>
                {{ $t("community-rules-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("community-block-resources") }}</li>

          <li class="header-content">
            <anchor href="https://glossary.ncc.work" :title="$t('glossary')" target="_blank" mode="classic">
              {{ $t("glossary") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
              <span>
                {{ $t("glossary-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="resource">
      <span class="header-title">{{ $t("resources-and-media") }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t("media-block-news") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/news" :title="$t('media-news')" mode="classic">
              {{ $t("media-news") }}
              <span>
                {{ $t("media-news-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/weekly" :title="$t('media-weekly')" mode="classic">
              {{ $t("media-weekly") }}
              <span>
                {{ $t("media-weekly-desc") }}
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://ncc.work/announcements" :title="$t('media-announcements')" mode="classic">
              {{ $t("media-announcements") }}
              <span>
                {{ $t("media-announcements-desc") }}
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t("media-block-resources") }}</li>

          <li class="header-content">
            <anchor href="https://ncc.work/brand-guidelines" :title="$t('media-brand')" mode="classic">
              {{ $t("media-brand") }}
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://github.com/dotnetcore/ncc-artwork" :title="$t('media-logos')" target="_blank" mode="classic">
              {{ $t("media-logos") }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor" />
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>


      </template>
    </title-content-block>

  </title-frame>

</template>

<style scoped lang="css">
.header-title {
  @apply font-black;
}

.header-sub-title {
  @apply text-xs font-bold text-gray-400;
  @apply pt-5 pl-5;
}

.header-content {
  @apply my-1 block;
}

.header-content a {
  @apply w-full pl-5 py-3 block;
  @apply text-lg font-black dark:text-white;
  @apply hover:text-purple-900 hover:dark:text-purple-100;
  @apply hover:bg-purple-500/5 hover:dark:bg-purple-900/5;
  @apply rounded-xl;
}

.header-content span {
  @apply my-1.5 block;
  @apply text-xs font-medium text-gray-400 dark:text-gray-500;
}

.header-content-arrow {
  @apply !inline-block;
  @apply -ml-1 align-middle;
}

.header-sub-title-secondary {
  @apply border-gray-200 dark:border-white/10;
  border-top-width: v-bind(useSecondaryTitleTopBorder);
}
</style>