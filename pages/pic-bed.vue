<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="图床" :description="description" />
    <div :class="{ drag_over: isDragOver }"
      class="overflow-hidden drag-over cursor-pointer sm:h-44 h-32 border-dashed border-2 border-gray-600 rounded-2xl flex justify-center items-center dark:border-gray-400"
      @click="handleClick" @dragover.prevent="handleDragOver" @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop">
      <input type="file" accept="image/*" class="hidden" @change="onFileChange" ref="inputRef">
      <div v-if="imgUrl" class="sm:h-44 h-32 relative">
        <div class="w-full h-full absolute bg-gray-600 bg-opacity-50 flex justify-center items-center" >
          <div class="loader"></div>
        </div>
        <img :src="imgUrl"/>
      </div>
      <div v-else class="flex">
        <UIcon name="i-heroicons-photo" class="w-12 h-12 text-teal-500" />
        <div class="ml-4">
          <div class="text-gray-600 dark:text-gray-400">点击上传</div>
          <div class="text-gray-600 dark:text-gray-400">或拖拽图片到此处</div>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="fileItem in fileList" :key="fileItem.url"
        class="my-4 border-dashed border-2 border-gray-600 rounded-2xl dark:border-gray-400 relative">
        <UBadge color="primary" size="md" variant="solid" :ui="{ size: { xs: 'text-xs px-1 py-0.5' } }"
          class="absolute top-1 right-1 cursor-pointer rounded-md" @click="handleCopy(fileItem.markdown)">
          Copy
        </UBadge>
        <img :src="fileItem.url" alt="upLoad" class="w-full rounded-2xl" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const description = "🌁文章板块一直使用md格式进行编写,图床一直使用第三方且需要登录,now我可以自由发挥激情创作了";
useSeoMeta({
  title: "图床 | ixyz",
  description,
});
const file = ref<null | File>(null)
const inputRef = ref<HTMLInputElement>();

const fileList = ref<fileItem[]>([])

const handleClick = () => {
  inputRef.value?.click();
};
const isDragOver = ref(false)//拖动样式

const handleDragOver = (e: Event) => {
  isDragOver.value = true
}
const handleDragLeave = (e: Event) => {
  isDragOver.value = false
}
const handleDrop = (e: DragEvent) => {
  file.value = e.dataTransfer!.files[0]
  uploadFile(file.value)
}
const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  file.value = target.files![0];
  uploadFile(file.value)
};

const imgUrl = ref<string>('')

const uploadFile = async (file: any) => {
  imgUrl.value = URL.createObjectURL(file)
  const formData = new FormData()
  formData.append("file", file)
  try {
    const res = await $fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
    fileList.value.unshift(res.data)
  } catch (err) {
    throw new Error("上传失败");
  }
  imgUrl.value = ''
}

const handleCopy = async (url: string) => {
  await navigator.clipboard.writeText(url)
}
</script>

<style scoped>
.drag_over {
  border-color: #14af9c;
  background-color: rgba(20, 175, 156, 0.1);
}

.loader {
  width: 40px;
  height: 60px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --r1: radial-gradient(farthest-side at bottom, #000 93%, #0000);
  --r2: radial-gradient(farthest-side at top, #000 93%, #0000);
  background:
    var(--c), var(--r1), var(--r2),
    var(--c), var(--r1), var(--r2),
    var(--c), var(--r1), var(--r2);
  background-repeat: no-repeat;
  animation: l1 1s infinite alternate;
}

@keyframes l1 {

  0%,
  10% {
    background-size: 8px 0, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
  }

  90%,
  100% {
    background-size: 8px 100%, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 -2px, 0 calc(100% + 2px), 50% 50%, 50% -2px, 50% calc(100% + 2px), 100% 50%, 100% -2px, 100% calc(100% + 2px);
  }
}
</style>
