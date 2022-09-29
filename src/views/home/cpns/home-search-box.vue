<template>
  <div class="home-search-box HomeContent">
    <!-- 位置信息 -->
    <nav-bar>
      <template #left>
        <div @click="cityClick">{{ selectCity.cityName }}</div>
      </template>
      <template #right>
        <div class="position" @click="positionClick">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" />
        </div>
      </template>
    </nav-bar>

    <!-- 日期选择 -->
    <van-cell :value="date" @click="show = true">
      <div class="date-select">
        <div class="start">
          <div class="title">入住</div>
          <div class="date">{{ startDate }}</div>
        </div>
        <div class="total-time">共 {{ liveTime }} 晚</div>
        <div class="end">
          <div class="title">离店</div>
          <div class="date">{{ endDate }}</div>
        </div>
      </div>
    </van-cell>
    <van-calendar
      v-model:show="show"
      type="range"
      color="#ff9854"
      @confirm="onConfirm"
      :formatter="formatter"
      :show-confirm="false"
    />

    <!-- 关键字 -->
    <div class="keyword section">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggestAll" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import NavBar from "@/components/nav-bar/index.vue";
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import useHomeStore from "@/store/modules/home";
import useMainStore from "@/store/modules/main";

import { storeToRefs } from "pinia";
import { monthDayTime, getDiffDays } from "@/utils/format";
const router = useRouter();
const cityStore = useCityStore();
const homeStore = useHomeStore();
const mainStore = useMainStore();

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    {
      enableHightAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

const cityClick = () => {
  router.push({ path: "/city" });
};
const { selectCity } = storeToRefs(cityStore);

const nowDate = new Date();
const startDate = ref(monthDayTime(nowDate));
const endDate = ref(monthDayTime(nowDate.setDate(nowDate.getDate() + 1)));
// 计算入住的时间
const liveTime = ref(1);

// 选择入住、离店
const date = ref("");
const show = ref(false);
// 自定义文字
const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};
// 确认日期并且回显
const onConfirm = (values) => {
  const [start, end] = values;
  show.value = false;
  startDate.value = computed(() => monthDayTime(start));
  endDate.value = computed(() => monthDayTime(end));
  liveTime.value = computed(() => getDiffDays(start, end));
};

// 获取热门建议
const { hotSuggestAll } = storeToRefs(homeStore);

// 开始搜索
const searchClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      selectCity: selectCity.value.cityName,
    },
  });
};

// 得到日期并且存到mainStore中
mainStore.$patch({
  startDate: startDate.value,
  endDate: endDate.value,
});
</script>

<style lang="less" scoped>
.home-search-box {
  .position {
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
      width: 18px;
      height: 18px;
    }
  }
  .van-cell {
    padding-left: 0;
    padding-right: 0;

    .date-select {
      display: flex;
      justify-content: space-between;

      .start,
      .end {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 12px;
          font-weight: 700;
          color: #bebfc2;
          margin-bottom: 5px;
        }

        .date {
          color: #252829;
        }
      }

      .total-time {
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #77787a;
      }
    }
  }
  .keyword {
    color: #252829;
  }

  .hot-suggest {
    display: flex;
    flex-wrap: wrap;

    .item {
      padding: 5px 11px;
      border-radius: 10px;
      margin: 5px 3px;
      font-size: 12px;
      line-height: 1;
    }
  }
  .search-btn {
    .btn {
      width: 342px;
      height: 38px;
      max-height: 50px;
      line-height: 38px;
      border-radius: 20px;
      background-image: var(--theme-linear-gradient);
      text-align: center;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
