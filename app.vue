<template>
  <NuxtLoadingIndicator color="#14b8a6"/>
  <AppNavBar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>