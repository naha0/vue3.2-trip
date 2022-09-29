<template>
  <div class="favor">
    <div v-for="item in 100">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  console.log("滚动距离" + scrollTop);
};
</script>

<style lang="less" scoped>
.favor {
  height: 300px;
  background-color: yellow;
  overflow-y: auto;
}
</style>
