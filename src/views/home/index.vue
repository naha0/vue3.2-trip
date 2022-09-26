<template>
  <div class="home">
    <nav-bar>
      <template #middle> 呐。旅途 </template>
    </nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" />
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/nav-bar/index.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import useHomeStore from "../../store/modules/home";


</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
