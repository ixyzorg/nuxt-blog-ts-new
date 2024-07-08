<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">社交媒体</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm group-hover:text-primary-600">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"/>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
const links = [
  {
    name: "GitHub",
    url: "https://github.com/ixyzorg",
    icon: "i-bi-github",
  },{
    name:"掘金",
    url: "https://juejin.cn/user/4391924477999897",
    icon: "JuejinSvg",
  },
  {
    name: "力扣",
    url: "https://leetcode.cn/u/ixyz",
    icon: "LeecodeSvg",
  },
];
</script>
