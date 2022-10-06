<template>
  <div>
    <router-view v-slot="props">
      <keep-alive includes="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <TabBar v-if="!route.meta.tabbarHidden"></TabBar>
    <Loading></Loading>
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import { useRoute } from "vue-router";
import Loading from "@/components/loading/index.vue";
const route = useRoute();
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
