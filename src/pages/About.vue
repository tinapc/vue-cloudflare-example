<template>
  <div>
    <h1>About Page</h1>
    <UserInfo />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import UserInfo from '../components/UserInfo.vue';

useHead({
  title: 'About Page - Vue Cloudflare Example',
  meta: [
    {
      name: 'description',
      content: 'This is the about page'
    }
  ]
});
</script>