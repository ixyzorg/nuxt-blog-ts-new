<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="项目"
      :description="description"
    />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "📃参与的一些开源项目,如果你有更好的idea,不妨让它变得更好,大家一起变好玩儿!";
useSeoMeta({
  title: "项目 | ixyz",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
