<template>
  <div class="intro">
    <detailSection>
      <template #content>
        <h2 class="title">{{ priceIntro.title }}</h2>
        <div class="content">
          {{ priceIntro.introduction }}
        </div>
      </template>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/index.vue";
defineProps({
  priceIntro: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
