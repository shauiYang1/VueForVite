<template>
  <span>state{{ store.count }}</span>
  <span>getters{{ store.double }}</span>
  <el-button @click="store.increment"></el-button>
  <Login />
  <img :src="jpg1">
  <img :src="playLoading">
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import jpg1 from '@/assets/jpg/02edd026b99893ec8291d72a6169ea57.jpg';
import playLoading from '@/assets/jpg/2.jpg';
const store = useUserStore()

</script>
