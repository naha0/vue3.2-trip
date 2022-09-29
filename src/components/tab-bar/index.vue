<template>
  <div class="tab-bar">
    <van-tabbar route v-model="currentIndex" active-color="#ff9854" @change="currentClick">
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item
          @click="currentIndex = index"
          :class="{ active: currentIndex === index }"
          replace
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
import { ref,watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const currentIndex = ref();
watch(route,(newValue,oldValue)=>{
  currentIndex.value = tabBarData.findIndex(item=>item.path === newValue.path)
})
const currentClick = () =>{
  console.log(currentIndex.value);
}
</script>

<style lang="less" scoped>
.tab-bar {
  --van-tabbar-item-icon-size: 26px !important;

  img {
    height: 30px;
  }
}
</style>
