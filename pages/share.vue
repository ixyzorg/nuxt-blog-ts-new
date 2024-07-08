<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="分享" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const description =
  "👾网络上发现的一些有用的工具、资源、文章、工具等";
useSeoMeta({
  title: "分享 | ixyz",
  description,
});
const bookmarks: BookMarkItem[] = [
  {
    id: 1,
    label: "Lorem Picsum - 好用的随机图片URL在线生成器",
    url: "https://picsum.photos",
  },
  {
    id: 2,
    label: "比特虫-制作ico图标",
    url: "https://www.bitbug.net",
  },
  {
    id: 3,
    label: "Swiper中文网 - 轮播图幻灯片js插件",
    url: "https://www.swiper.com.cn/index.html",
  }
];

function getHost(url:string) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}
</script>
