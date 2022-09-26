<template>
  <div class="city">
    <div class="city-top">
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
      <van-tabs v-model:active="activeTab" color="#ff9854" line-height="2">
        <template v-for="(item, key) in cityAll" :key="key">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="city-content">
      <city-group :current-group="currentGroup"></city-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import cityGroup from "./cpns/city-group.vue";

const cityStore = useCityStore();
const router = useRouter();


// 获取全部城市的数据
cityStore.getCity();
const { cityAll } = storeToRefs(cityStore);

// 获取选中tab后的热门城市数据
// 1. 获取到正确的key，将tabs中绑定的tabActive正确绑定
// 2. 根据key从allCities获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
const activeTab = ref(0);
const currentGroup = computed(()=>{
  return cityAll.value[activeTab.value]
})

const searchValue = ref("");
const onSearch = (val) => Toast(val);
const onCancel = () => {
  Toast("取消");
  router.back();
};

</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
  .city-top{
    position: relative;
    z-index: 999;
  }
  .city-content{
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
