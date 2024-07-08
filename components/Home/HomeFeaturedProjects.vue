<template>
  <div>
    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-6">
      项目
    </h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="project in projects"
        :key="project._id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="all &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script  setup lang="ts">
const {data:projects} = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>
