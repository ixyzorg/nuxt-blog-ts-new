<template>
    <UTooltip text="切换主题" :ui="{ popper: { strategy: 'absolute' } }">
      <button
        class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
        @click="isDark = !isDark"
      >
        <UIcon
          aria-hidden="true"
          :name="isDark ? 'i-solar-sun-2-outline' : 'i-solar-moon-outline'"
          class="w-5 h-5"
          dynamic
        />
        <span class="sr-only">切换主题</span>
      </button>
    </UTooltip>
  </template>
  
  <script setup lang="ts">
  const colorMode = useColorMode();
  const isDark = computed({
    get() {
      return colorMode.value === "dark";
    },
    set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  });
  </script>