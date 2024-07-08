<template>
  <div>
    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-6">
      文章
    </h2>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="all &rarr;"
        to="/articles"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles-home", () =>
  queryContent("/articles")
    .sort({ published: -1 })
    .limit(3)
    .find()
);
</script>
