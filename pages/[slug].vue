<script lang="ts" setup>
const { slug } = useRoute().params;
</script>
<template>
  <div>
    {{ slug }}
  </div>
</template>
