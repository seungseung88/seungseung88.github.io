<script lang="ts" setup>
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>
<template>
  <div>
    <h2>Blog</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
