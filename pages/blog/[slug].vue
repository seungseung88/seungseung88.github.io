<script setup>
const { slug } = useRoute().params;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first();
});
</script>

<template>
  <p>{{ slug }}</p>
  <main>
    <ContentRenderer :value="post" />
  </main>
</template>
