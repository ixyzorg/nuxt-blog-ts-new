<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
    :to="project.path"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-400  group-hover:text-gray-700">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    ></div>
    <UAvatar
      :src="project.pic"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps(['project'])
</script>
