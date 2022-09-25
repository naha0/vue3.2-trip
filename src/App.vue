<template>
  <div>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script setup>
  import TabBar from '@/components/tab-bar/index.vue'
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
