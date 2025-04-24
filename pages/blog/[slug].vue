<script setup>
const { slug } = useRoute().params;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first();
});
</script>

<template>
  <BlogHeader :post="post" />
  <main>
    <div class="prose prose-slate max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </main>
</template>

<style>
.prose pre {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.25rem 0;
}

.prose code {
  background-color: #f1f5f9;
  color: #475569;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875em;
}

.prose pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
}
</style>
