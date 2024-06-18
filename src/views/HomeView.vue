<template>
  <div class="flex justify-center items-center  min-h-screen">
    <el-button size="small" class=" absolute top-2 right-2" type="danger" @click="store.onLogOut()">Log Out</el-button>
    <div class="md:text-[60px] font-medium text-text2">Hello {{ store.userInfo?.Username }}</div>
  </div>
</template>
<script setup lang="ts">
import { appStore } from '@/stores';
const store = appStore();
</script>
