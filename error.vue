<script setup lang="ts">
const num = ref(5)
onMounted(()=>{
  const timer = setInterval(() => {
  num.value--
  if (num.value === 0) {
    navigateTo('/')
    clearInterval(timer)
  }
}, 1000)
})
</script>
<template>
  <main class="min-h-screen flex items-center justify-center"> 
    <div class="error-container ">
    <UContainer class="text-center">
      <p >噢不！我们好像闯入了一片数字迷雾，找不到你要去的地方！</p>
      <div class="h-10"></div>
      <UButton to="/" color="gray">({{ num }})秒后回到首页</UButton>
    </UContainer>
    </div>
  </main>
  <AppFooter class="m-auto" />
</template>