<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="留言板" :description="description" />
    <div class="space-y-24">
      <div id="tcomment"></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const description = "🖊️留下你的足迹";
useSeoMeta({
  title: "留言 | ixyz",
  description,
});
const config = useRuntimeConfig();
const url = config.public.msgUrl;
onMounted(()=>{
  //@ts-ignore
  twikoo.init({
    envId: url, // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
    el: '#tcomment', // 容器元素
     lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
  })
})
</script>
