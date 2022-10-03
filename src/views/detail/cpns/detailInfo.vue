<template>
  <div class="detailInfo">
    <div class="info" @click="showClick">
      <template v-for="(item, index) in tagsData.houseTags">
        <span
          class="info-item"
          :style="{
            background: item.tagText?.background?.color,
            color: item.tagText?.color,
          }"
          >{{ item.tagText?.text }}</span
        >
      </template>
    </div>
    <van-action-sheet v-model:show="show" title="标签说明">
      <div class="content">
        <template v-for="(item, index) in tagsData.houseTags">
          <div
            class="content-one"
            :style="{
              background: item.tagText?.background?.color,
              color: item.tagText?.color,
            }"
          >
            {{ item.tagText?.text }}
          </div>
          <div class="content-two">
            {{ item?.tagDesc }}
          </div>
        </template>
      </div>
    </van-action-sheet>
    <div class="comment">
      <div class="left">
        <span class="overall">{{ tagsData.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ tagsData.commentBrief.scoreTitle }}</span>
        <span class="commentBrief"
          >"{{ tagsData.commentBrief.commentBrief }}"</span
        >
      </div>
      <div class="right">
        {{ tagsData.commentBrief.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position">
      <div class="left">
        <div class="text">{{ tagsData.nearByPosition.address }}</div>
      </div>
      <div class="right">地图周边<van-icon name="arrow" /></div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tagsData: {
    type: Object,
    default: () => {},
  },
});

const show = ref(false);
const showClick = () => {
  show.value = !show.value;
};
</script>

<style lang="less" scoped>
.detailInfo {
  .info {
    .info-item {
      padding: 2px 3px;
      margin-right: 4px;
      border-radius: 5px;
    }
    .info-item:first-child {
      margin-left: 10px;
    }
  }
  .content {
    margin: 0px 16px 16px 16px;
    background-color: #fff;
    border-radius: 10px;
    .content-one {
      flex: 1;
      padding: 3px 3px;
      border-radius: 5px;
      display: inline-block;
      margin: 5px;
      font-size: 13px;
      line-height: 10px;
    }
    .content-two {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin: 5px;
    }
    .content-two:last-child {
      padding-bottom: 10px;
    }
  }
  .comment,
  .position {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    background-color: #f6f7fb;
    border-radius: 5px;
    padding: 3px;
    .overall {
      font-size: 16px;
    }
    .scoreTitle {
      font-size: 13px;
      margin: 0 10px 0 3px;
    }
    .commentBrief {
      color: #acadad;
    }
    .right {
      font-size: 12px;
      color: #ff9854;
    }
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
