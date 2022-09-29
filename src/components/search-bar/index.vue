<template>
  <div class="search-bar">
    <div class="search-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDate }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDate }}</div>
      </div>
    </div>
    <div class="search-content">
      <div class="content">关键字/位置/民宿</div>
    </div>
    <div class="search-icon">
      <van-icon name="search" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/store/modules/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore)
</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-time {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    background-color: #eee;
    border: 3px #eee solid;
    border-radius: 10px 0px 0px 10px;
    .item {
      display: flex;
      .name {
        color: #86878b;
      }
    }
  }
  .search-content {
    flex: 1;
    height: 30px;
    background-color: #eee;
    line-height: 30px;
    border: 3px #eee solid;
    padding-left: 10px;
    color: rgba(116, 109, 109, 0.541);
  }
  .search-icon {
    display: block;
    width: 30px;
    height: 100%;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    background-color: #eee;
    border: 3px #eee solid;
    border-radius: 0px 10px 10px 0px;
  }
}
</style>
