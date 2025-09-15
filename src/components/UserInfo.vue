<template>
  <ul>
      <li v-if="user">ID: {{ user.id }}</li>
      <li v-if="user">Title: {{ user.title }}</li>
      <li v-if="user">Completed: {{ user.completed }}</li>
    </ul>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
interface IUser {
  id: number;
  title: string;
  completed: boolean;
}

const user = ref<IUser | null>(null);

onMounted(async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  user.value = res.data;
})
</script>

<style scoped>

</style>