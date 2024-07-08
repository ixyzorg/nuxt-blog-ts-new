<template>
  <NuxtLink :to="article._path" class="group">
    <article>
      <time
        class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
        datetime="2022-09-05"
        ><span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
          ><span
            class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"
          ></span
        ></span>
        {{ formatTime(article.published) }}
      </time>
      <div class="flex">
        <h2
        class=" text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
      >
        {{ article.title }}
      </h2>
      <UBadge v-for="tag in article.tags" color="primary" size="xs" variant="soft" :ui="{size:{ xs:'text-xs px-1 py-0.5'} }" class="mx-3">{{tag}}</UBadge>
      </div>
      <p class="text-sm text-gray-400  group-hover:text-gray-700">
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
const props=defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>