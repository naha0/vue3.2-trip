<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门"></van-index-anchor>
      <div class="list">
        <template
          v-for="(group, index) in currentGroup?.hotCities"
          :key="index"
        >
          <div class="city">{{ group.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useCityStore from "@/store/modules/city";
import { useRouter } from "vue-router";

const cityStore = useCityStore();
const router = useRouter();

const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => {},
  },
});
const indexList = computed(() => {
  if (props.currentGroup&&Object.keys(props.currentGroup).length > 0) {
    const list = props.currentGroup?.cities.map((item) => item.group);
    list.unshift("#");
    return list;
  }
});

const cityClick = (value) => {
  cityStore.selectCity = value;
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 10px;
    text-align: center;
  }
}
</style>
