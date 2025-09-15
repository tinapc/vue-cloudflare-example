<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page of our Vue Cloudflare Example application!</p>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <UserInfo />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { useHead } from '@vueuse/head';
import UserInfo from '../components/UserInfo.vue';
useHead({
  title: 'Home Page - Vue Cloudflare Example',
  meta: [
    {
      name: 'description',
      content: 'This is the home page of our Vue Cloudflare Example application.'
    }
  ]
});
</script>