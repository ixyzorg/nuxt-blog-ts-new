<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeRecentArticles />
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "ixyz",
  description:
    "我是付孟镝,一个专注于前端开发的coder,喜欢写代码,喜欢分享,www.ixyz.org是我的博客,在这里你可以找到我",
  keywords:
    "付孟镝,ixyz,前端,博客,前端开发,前端工程师,前端开发"
});
onMounted(() => {
  console.log('halo!guys')
});
</script>