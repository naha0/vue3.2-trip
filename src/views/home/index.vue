<template>
  <div class="home">
    <nav-bar>
      <template #middle> 呐。旅途 </template>
    </nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" />
    </div>
    <nav-bar>
      <template #left>广州</template>
      <template #right>
        <div class="position">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png"/>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav-bar/index.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .position{
        display: flex;
        align-items: center;

        img{
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
}
</style>
