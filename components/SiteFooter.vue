<script setup>
const links = [
  { name: 'Github', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'Instagram', href: 'https://github.com', icon: 'entypo-social:instagram' },
];
</script>
<template>
  <footer class="bg-gray-800 mt-20">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row items-center my-5">
      <p class="flex-1">&copy; SeungSeung 2025. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4">
        <a v-for="link in links" :key="link.name" :href="link.href" class="flex items-center">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300"></Icon>
        </a>
      </div>
    </section>
  </footer>
</template>
