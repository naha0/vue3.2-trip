<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="middle">
      <slot name="middle"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .middle {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
