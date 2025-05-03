<script setup>
const { slug } = useRoute().params;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first();
});
</script>

<template>
  <BlogHeader :post="post" />
  <main>
    <div class="prose prose-lg mx-auto">
      <ContentRenderer :value="post" />
    </div>
  </main>
</template>
