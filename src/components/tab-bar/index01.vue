<template>
    <div class="tab-bar">
      <template v-for="(item, index) in tabBarData" :key="index">
        <div
          class="tab-bar-item"
          @click="getPath(item, index)"
          :class="{ active: currentIndex === index }"
        >
          <img :src="currentIndex===index?getImage(item.activeImage):getImage(item.image)" />
          <span>{{ item.title }}</span>
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  import tabBarData from "@/assets/data/tab-bar.js";
  import getImage from "@/utils/getImage.js";
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  
  const router = useRouter();
  const currentIndex = ref(0);
  const getPath = (item, index) => {
    router.push({path:item.path})
    currentIndex.value = index;
  };
  </script>
  
  <style lang="less" scoped>
  .tab-bar {
    --primary-color:#ff9854;
  
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;
  
    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
  
      &.active {
        color: var(--primary-color);
      }
  
      img {
        width: 30px;
        height: 30px;
      }
  
      span {
        font-size: 14px;
        margin-top: 2px;
      }
    }
  }
  </style>
  