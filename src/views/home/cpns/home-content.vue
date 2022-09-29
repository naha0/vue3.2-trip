<template>
  <div class="home-content">
    <h2 class="section">热门精选</h2>
    <div class="gridBox">
      <template v-for="(item, index) in houseList" :key="index">
        <template v-if="item.discoveryContentType === 9">
          <div class="type9Box">
            <img :src="item.data.image.url" />
            <div class="box-text">
              <div class="box-title">{{ item.data.summaryText }}</div>
              <div class="box-content">{{ item.data.houseName }}</div>
              <div class="box-score">
                <van-rate
                  :model-value="Number(item.data.commentScore)"
                  :size="15"
                  color="#ffd21e"
                  void-icon="star"
                  void-color="#eee"
                  readonly
                  allow-half
                />
                <div>￥{{ item.data.finalPrice }}</div>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="item.discoveryContentType === 3">
          <div class="type3Box">
            <img :src="item.data.image.url" />
            <div class="location">
              <img src="@/assets/img/home/location.png" />
              <span class="text">{{ item.data.location }}</span>
            </div>
            <div class="name">{{ item.data.houseName }}</div>
            <div class="summary">{{ item.data.summary }}</div>
            <div class="price">
              <span class="new">￥{{ item.data.finalPrice }}</span>
              <span class="old">￥{{ item.data.productPrice }}</span>
              <span class="tip" v-if="item.data.priceTipBadge"
                >￥{{ item.data.priceTipBadge.text }}</span
              >
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";
import handlerScrollToEnd from "@/hooks/useScroll";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);


handlerScrollToEnd(() => {
  homeStore.pageCount++;
  homeStore.getHouseList();
});
</script>

<style lang="less" scoped>
.home-content {
  margin: 0 20px 60px 10px;
  .gridBox {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 10px;
    row-gap: 15px;
    .type9Box {
      position: relative;
      img {
        width: 100%;
        border-radius: 6px;
      }
      .box-text {
        position: absolute;
        bottom: 0;
        width: 100%;
        opacity: 0.7;
        // 重点是这行
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #000000 100%
        );

        .box-title {
          color: #fff;
          padding: 0.1rem;
          font-size: 12px;
          text-align: center;
        }
        .box-content {
          color: #fff;
          font-weight: 500;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin: 5px 0 7px 0;
        }
        .box-score {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          color: #fff;
        }
      }
    }

    .type3Box {
      img {
        width: 100%;
        border-radius: 6px;
      }
      .location {
        display: flex;
        align-items: center;
        margin-top: 10px;
        img {
          width: 12px;
          height: 12px;
        }

        .text {
          margin-left: 2px;
          font-size: 12px;
          color: #666;
        }
      }

      .name {
        margin: 5px 0;
        font-size: 14px;
        color: #333;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        align-items: flex-start;

        margin: 8px 0;
        .new {
          color: #ff9645;
          font-size: 14px;
        }

        .old {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }

        .tip {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
