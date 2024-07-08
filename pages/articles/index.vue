<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="文章" :description="description" />
    <ul class="space-y-16">
      <li v-for="article in articles" :key="article._id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "📝项目中一些Bug的解决,新知识的学习,code过程中的一些思考...";
useSeoMeta({
  title: "文章 | ixyz",
  description,
})
const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>