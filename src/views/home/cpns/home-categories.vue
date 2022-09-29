<template>
  <div class="home-categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.home-categories {
    margin: 0 20px 0 20px;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  .item {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    img {
      width: 32px;
      height: 32px;
    }
    .title {
      text-align: center;
    }
  }
}
</style>
