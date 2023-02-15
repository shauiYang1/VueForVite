<template>
  <span>{{ store.double }}</span>
  <Login />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
const store = useUserStore()
</script>
