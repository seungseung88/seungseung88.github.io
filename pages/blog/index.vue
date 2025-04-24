<script lang="ts" setup>
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>
<template>
  <h2
    class="text-xl font-bold my-6 bg-gradient-to-r from-gray-800 to-sky-700 text-transparent bg-clip-text inline-flex items-center"
  >
    <Icon name="heroicons:book-open" class="w-5 h-5 mr-2 text-sky-600" />
    スンスンのブログ
  </h2>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <div v-for="post in posts" :key="post.id" class="mx-auto max-w-sm rounded">
      <NuxtLink :to="post.path">
        <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img :src="post['meta']['image'] as string" class="h-56 w-full object-cover" />

          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500"> {{ post.date }} </time>

            <h3 class="mt-0.5 text-lg min-h-10 text-gray-900">{{ post.title }}</h3>

            <div class="flex flex-row gap-2">
              <LogoBadge class="bg-green-100 text-green-700">Nuxt</LogoBadge>
              <LogoBadge class="bg-blue-900 text-white">Github</LogoBadge>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>
