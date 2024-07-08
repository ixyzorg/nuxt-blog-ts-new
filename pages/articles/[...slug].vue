<template>
  <main class="min-h-screen" ref="mainRef">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <ContentDoc v-slot="{ doc }" tag="article">
        <!-- 文章目录 -->
        <ClientOnly>
            <div class="fixed hidden lg:block" :style="{left:mainLeft+mainWidth+10+'px'}">
            <p class="m-0.5">目录</p>
            <p class="m-px" v-for="headline1 in doc.body!.toc!.links" :key="headline1.id">
              <NuxtLink class="text-sm font-black" :to="`#${headline1.text}`">{{headline1.text}}</NuxtLink>
              <template v-if="headline1.children">
                <p class="m-px" v-for="headline2 in headline1.children" :key="headline2.id">
                  <NuxtLink class="text-xs" :to="`#${headline2.text}`">{{headline2.text}}</NuxtLink>
                </p>
              </template>
            </p>
          </div>
          </ClientOnly>
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script lang="ts" setup>
const mainRef = ref<HTMLElement>()
const {left:mainLeft,width:mainWidth} = useElementBounding(mainRef)
useSeoMeta({
  title: "文章 | ixyz",
})
</script>
<style>
.prose a,
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply no-underline;
}
</style>
