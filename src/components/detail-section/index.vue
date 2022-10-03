<template>
  <div class="detail-section">
    <div class="title" v-if="title">
      {{ title }}
      <van-divider />
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="moreTitle" v-if="moreTitle">
      {{ moreTitle }}
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  moreTitle: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less" scoped>
.detail-section {
  padding: 0 15px;
  margin-top: 12px;
  background-color: #fff;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
  }
  .van-divider {
    margin-top: 0;
  }
  .moreTitle {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    color: #ff9645;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
