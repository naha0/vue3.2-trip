<template>
  <div class="tab-control">
    <van-tabbar v-model="active" :fixed="false" @change="changeActive">
      <template v-for="(item, index) in titles" :key="index">
        <van-tabbar-item :name="item">{{ item }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
defineProps({
  titles: {
    type: Array,
    default: () => [],
  },
});
const active = ref(0);
const emit = defineEmits(["getActive"]);
const changeActive = () => {
  emit("getActive", active.value);
};
</script>

<style lang="less" scoped>
</style>
