<script setup>
defineProps({
  post: Object,
});
</script>
<template>
  <section class="mt-10">
    <div>
      <div class="flex flex-row gap-2">
        <LogoBadge class="bg-green-100 text-green-700">Nuxt</LogoBadge>
        <LogoBadge class="bg-blue-900 text-white">Github</LogoBadge>
      </div>
      <p class="text-gray-400 dark:text-gray-100 mt-3">{{ post.date }}</p>
    </div>
    <h3 class="mt-3 text-3xl dark:text-gray-100">{{ post.title }}</h3>
    <p class="mt-3 text-lg dark:text-gray-100">
      {{ post.description }}
    </p>
  </section>
  <span class="flex items-center my-10">
    <span class="h-px flex-1 bg-gray-300"></span>
  </span>
</template>
