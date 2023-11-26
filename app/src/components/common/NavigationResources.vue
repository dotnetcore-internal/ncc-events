<script lang="ts" setup>
import JoinUsButton from "@/components/common/JoinUsButton.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
</script>

<template>

  <div class="p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
    <div class="nav-about-us">
      <span class="nav-title">{{ $t("about-us") }}</span>
      <span class="nav-item">
        <anchor href="https://ncc.work/about/who-we-are" :title="$t('who-we-are')" mode="classic">{{ $t("who-we-are") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/people/project-management-committee" :title="$t('pmc')" mode="classic">{{ $t("pmc") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/conduct" :title="$t('code-of-conduct')" mode="classic">{{ $t("code-of-conduct") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/about/story" :title="$t('story')" mode="classic">{{ $t("story") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/about/faq" :title="$t('faq')" mode="classic">{{ $t("faq") }}</anchor>
      </span>

      <hr class="my-5 w-5 border-white/50" />

      <span class="nav-item">
        <anchor href="https://ncc.work/about/contact" :title="$t('contact-us')" mode="classic">{{ $t("contact-us") }}</anchor>
      </span>
    </div>
    <div class="nav-projects">
      <span class="nav-title">{{ $t("projects") }}</span>
      <span class="nav-item">
        <anchor href="https://contribute.ncc.work" :title="$t('project-contribute')" target="_blank" mode="classic">{{ $t("project-contribute") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://landscape.ncc.work" :title="$t('project-landscape')" target="_blank" mode="classic">{{ $t("project-landscape") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://tools.ncc.work" :title="$t('project-tools')" target="_blank" mode="classic">{{ $t("project-tools") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/projects" :title="$t('project-member-full')" mode="classic">{{ $t("project-member") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/archived-projects" :title="$t('project-archived-full')" mode="classic">{{ $t("project-archived-full") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="https://ncc.work/project-maturity-model" :title="$t('project-maturity-model-full')" mode="classic">{{ $t("project-maturity-model-full") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="project-join-ncc" route-name="project-join-ncc" :title="$t('project-how-to-join-us')" target="_blank" mode="classic">{{ $t("project-how-to-join-us") }}</anchor>
      </span>
    </div>
    <div class="nav-Learning">
      <span class="nav-title">{{ $t("learning") }}</span>
    </div>
    <div class="nav-community">
      <span class="nav-title">{{ $t("community") }}</span>
      <span class="nav-item">
        <anchor href="/" route-name="home"  :title="$t('community-events')">{{ $t("community-events") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/meetups" route-name="meetups" :title="$t('community-meetups')">{{ $t("community-meetups") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://2f.ncc.work" :title="$t('community-2f')" target="_blank" mode="classic">{{ $t("community-2f") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/community-online" :title="$t('community.online')" mode="classic">{{ $t("community-online") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://glossary.ncc.work" :title="$t('glossary')" target="_blank" mode="classic">{{ $t("glossary") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="https://ncc.work/participation-guidelines" :title="$t('community-participation')" mode="classic">{{ $t("community-participation") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/rules" :title="$t('community-rules')" mode="classic">{{ $t("community-rules") }}</anchor>
      </span>
    </div>
    <div class="nav-resource">
      <span class="nav-title">{{ $t("resources-and-media") }}</span>
      <span class="nav-item">
        <anchor href="https://ncc.work/news" :title="$t('media-news')" mode="classic">{{ $t("media-news") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/weekly" :title="$t('media-weekly')" mode="classic">{{ $t("media-weekly") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/announcements" :title="$t('media-announcements')" mode="classic">{{ $t("media-announcements") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://ncc.work/brand-guidelines" :title="$t('media-brand')" mode="classic">{{ $t("media-brand") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore/ncc-artwork" :title="$t('media-logos')" target="_blank" mode="classic">{{ $t("media-logos") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank" mode="classic">NCC@GitHub</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank" mode="classic">NCC@Gitee</anchor>
      </span>
    </div>
    <div class="nav-resource">
      <join-us-button>{{ $t("join-at-footer") }}</join-us-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-title {
  @apply text-xs font-black pb-6 block;
}

.nav-item {
  @apply text-xs leading-7 block;
  @apply no-underline;
  @apply hover:underline underline-offset-4 hover:text-purple-100;
}

</style>