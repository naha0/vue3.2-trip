<template>
  <div>
    <router-view></router-view>
    <TabBar v-if="!route.meta.tabbarHidden"></TabBar>
  </div>
</template>

<script setup>
  import TabBar from '@/components/tab-bar/index.vue'
  import { useRoute } from 'vue-router';
  const route = useRoute()
</script>

<style lang="less" scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
