<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) in tabBarData" :key="index">
      <div
        class="tab-bar-item"
        @click="getPath(item, index)"
        :class="{ active: currentIndex === index }"
      >
        <img :src="currentIndex===index?getImage(item.activeImage):getImage(item.image)" />
        <span>{{ item.title }}</span>
      </div>
    </template> -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item
          @click="currentIndex = index"
          :class="{ active: currentIndex === index }"
          :to="item.path"
        >
          <span>{{ item.title }}</span>
          <template #icon>
            <img
              :src="
                currentIndex === index
                  ? getImage(item.activeImage)
                  : getImage(item.image)
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tab-bar.js";
import getImage from "@/utils/getImage.js";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  --van-tabbar-item-icon-size: 26px !important;

  img {
    height: 30px;
  }
}
</style>
