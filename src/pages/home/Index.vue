<template>
  <span>state{{ store.count }}</span>
  <span>getters{{ store.double }}</span>
  <el-button @click="store.increment"></el-button>
  <Login />
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { useUserStore } from '@/stores'
const store = useUserStore()
</script>
