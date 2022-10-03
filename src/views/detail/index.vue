<template>
  <div class="detail" ref="detailRef">
    <tabControl
      class="tab-control"
      :titles="titles"
      v-show="!isShow"
      @getActive="getActive"
    ></tabControl>
    <van-nav-bar
      left-text="房屋详情"
      left-arrow
      @click-left="onClickLeft"
      v-show="isShow"
    />
    <div class="swipe" v-if="mainPart" v-memo="[mainPart]">
      <detailSwipe
        :swipeData="mainPart.topModule.housePicture.housePics"
      ></detailSwipe>
      <h3 class="title">{{ mainPart.topModule.houseName }}</h3>
      <detailInfo :ref="getRef" :tagsData="mainPart.topModule"></detailInfo>
      <detailFacilities
        :ref="getRef"
        :houseFacilities="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detailFacilities>
      <detailLandlord
        :ref="getRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detailLandlord>
      <detailComment
        :ref="getRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detailComment>
      <detailNotice
        :ref="getRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></detailNotice>
      <!-- <detailMap></detailMap> -->
      <detailIntro :price-intro="mainPart.introductionModule"></detailIntro>
    </div>
    <div class="footer">祝，路途愉快！</div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { getDetailInfoHouseId } from "@/api/modules/detail";
import detailSwipe from "./cpns/detailSwipe.vue";
import detailInfo from "./cpns/detailInfo.vue";
import detailFacilities from "./cpns/detailFacilities.vue";
import detailLandlord from "./cpns/detailLandlord.vue";
import detailComment from "./cpns/detailComment.vue";
import detailNotice from "./cpns/detailNotice.vue";
// import detailMap from './cpns/detailMap.vue';
import detailIntro from "./cpns/detailIntro.vue";

import tabControl from "@/components/tab-control/index.vue";
import useScroll from "@/hooks/useScroll";

const route = useRoute();

// 处理详情页的数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfoHouseId(route.params.id).then((res) => {
  detailInfos.value = res.data;
});

const onClickLeft = () => history.back();

// 处理滚动
const detailRef = ref();
const { scrollTop } = useScroll(() => {}, detailRef);
const isShow = ref(true);
watch(scrollTop, (newValue, oldValue) => {
  console.log(newValue);
  if (newValue < 100) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});

const titles = ["概览", "设施", "房东", "点评", "须知"];

// 点击tab-tabControl
const ref_list = [];
const getRef = (value) => {
  console.log(value.$el);
  ref_list.push(value.$el);
};
const getActive = (active) => {
  let index = titles.findIndex((item) => item === active);
  if (index == 0) {
    detailRef.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    detailRef.value.scrollTo({
      top: ref_list[index].offsetTop - 50,
      behavior: "smooth",
    });
  }
  console.log("当前的offset", ref_list[index].offsetTop);
};
</script>

<style lang="less" scoped>
.detail {
  overflow-y: auto;
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  .tab-control {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
  .title {
    margin-top: 10px;
    text-indent: 1em;
    margin-bottom: 8px;
  }
  .footer {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 20px;
  }
}
</style>
