<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="分享" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.label">
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
const description = '👾网络上发现的一些有用的工具、资源、文章、工具等'
useSeoMeta({
  title: '分享 | ixyz',
  description,
})
const bookmarks: BookMarkItem[] = [
  {
    label: 'vue2',
    url: 'https://v2.cn.vuejs.org',
  },
  {
    label: 'vue3',
    url: 'https://cn.vuejs.org/',
  },
  {
    label: 'react中文文档',
    url: 'https://react.docschina.org',
  },
  {
    label: 'nuxt',
    url: 'https://nuxt.com',
  },
  {
    label: 'vite',
    url: 'https://cn.vitejs.dev',
  },
  {
    label: 'webpack',
    url: 'https://www.webpackjs.com',
  },
  {
    label: 'create-react-app脚手架',
    url: 'https://github.com/facebook/create-react-app',
  },
  {
    label: 'element-plus',
    url: 'http://element-plus.org/zh-CN/',
  },
  {
    label: 'vant',
    url: 'https://vant.pro/vant/#/zh-CN',
  },
  {
    label: 'primevue',
    url: 'https://primevue.org',
  },
  {
    label: 'Ant Design',
    url: 'https://4x.ant.design/docs/react/introduce-cn',
  },
  {
    label: 'nest中文文档',
    url: 'https://nest.nodejs.cn',
  },
  {
    label: 'typeorm',
    url: 'https://typeorm.bootcss.com',
  },
  {
    label: 'uniapp',
    url: 'https://uniapp.dcloud.net.cn',
  },
  {
    label: '微信公众平台',
    url: 'https://mp.weixin.qq.com',
  },
  {
    label: 'tailwind 中文文档',
    url: 'https://tailwind.nodejs.cn',
  },
  {
    label: '兼容性支持查看',
    url: 'https://caniuse.com',
  },
  {
    label: 'Lorem Picsum - 好用的随机图片URL在线生成器',
    url: 'https://picsum.photos',
  },
  {
    label: '比特虫-制作ico图标',
    url: 'https://www.bitbug.net',
  },
  {
    label: 'css-loader-style',
    url: 'https://css-loaders.com',
  },
  {
    label: 'Animate.css',
    url: 'https://animate.style',
  },
  {
    label: '阿里巴巴字体库',
    url: 'https://www.iconfont.cn',
  },
  {
    label: 'echarts - 统计图表',
    url: 'https://echarts.apache.org',
  },
  {
    label: '正则表达式-测试',
    url: 'https://tool.oschina.net/regex',
  },
  {
    label: 'axios',
    url: 'https://www.axios-http.cn',
  },
  {
    label: 'socket.io',
    url: 'https://socket.io',
  },
  {
    label: 'vue3粒子库',
    url: 'https://www.npmjs.com/package/@tsparticles/vue3',
  },
  {
    label: 'vite-plugin-svg-icons',
    url: 'https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md',
  },
  {
    label: 'pinia-plugin-persistedstate',
    url: 'https://prazdevs.github.io/pinia-plugin-persistedstate/zh/',
  },
  {
    label: 'day.js',
    url: 'https://dayjs.fenxianglu.cn',
  }
]

function getHost(url: string) {
  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.')) {
    host = host.substring(4)
  }
  return host
}
</script>
