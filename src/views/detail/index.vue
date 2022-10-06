<template>
  <div class="detail" ref="detailRef">
    <tabControl
      class="tab-control"
      :titles="titles"
      v-show="!isShow"
      @getActive="getActive"
      ref="tabControlRef"
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
    <div class="footer">呐，旅途愉快！</div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
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
const router = useRouter();

// 处理详情页的数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfoHouseId(route.params.id).then((res) => {
  detailInfos.value = res.data;
});

const onClickLeft = () => router.push({ path: "/home" });

const titles = ["概览", "设施", "房东", "点评", "须知"];

// 处理滚动
const detailRef = ref();
const { scrollTop } = useScroll(() => {}, detailRef);
const isShow = ref(true);

// 点击tab-tabControl
const ref_list = [];
const offsetTop_list = [];

const getRef = (value) => {
  nextTick(() => {
    if (!value) return;
    ref_list.push(value.$el);
    if (ref_list.length == titles.length) {
      titles.forEach((item, index) => {
        offsetTop_list.push(ref_list[index].offsetTop + 214);
      });
    }
  });
};

let activeIndex = offsetTop_list.length - 1;
const tabControlRef = ref(null);
watch(scrollTop, (newValue, oldValue) => {
  if (newValue < 316) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
  for (let i = 0; i < offsetTop_list.length; i++) {
    if (offsetTop_list[i] > newValue) {
      activeIndex = i - 1;
      break;
    }
  }
  tabControlRef.value?.changeActiveIndex(titles[activeIndex]);
});

const getActive = (active) => {
  let index = titles.findIndex((item) => item === active);
  detailRef.value.scrollTo({
    top: ref_list[index].offsetTop - 50,
  });
};
</script>

<style lang="less" scoped>
.detail {
  overflow-y: auto;
  position: relative;
  z-index: 99;
  height: 100vh;
  background-color: #fff;
  .tab-control {
    position: sticky;
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
