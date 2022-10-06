<template>
  <div class="home" ref="homeRef">
    <nav-bar>
      <template #middle> 呐。旅途 </template>
    </nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <div class="fixedBox" v-if="showStickySearch">
      <search-bar></search-bar>
    </div>
    <home-content></home-content>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<script setup>
import { ref, watch, onActivated } from "vue";
import NavBar from "@/components/nav-bar/index.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/index.vue";
import useScroll from "@/hooks/useScroll";

import useHomeStore from "@/store/modules/home";
const homeStore = useHomeStore();
homeStore.getHotSuggest();
homeStore.getCategories();
homeStore.getHouseList();

// 粘性定位搜索框的显隐
const homeRef = ref();
const showStickySearch = ref(false);
const { scrollTop } = useScroll(() => {}, homeRef);
watch(scrollTop, (newValue, oldValue) => {
  if (newValue > 360) {
    showStickySearch.value = true;
  } else {
    showStickySearch.value = false;
  }
});

// 跳转回home时，保留原来的位置
onActivated(() => {
  console.log("跳转回来了~", scrollTop);
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  // padding-bottom: 50px;
  height: calc(100vh - 50px);
  position: relative;
  overflow-y: auto;
  .banner {
    img {
      width: 100%;
    }
  }
  .fixedBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    padding: 8px;
    background-color: #fff;
    z-index: 99;
  }
}
</style>
