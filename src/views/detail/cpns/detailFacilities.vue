<template>
  <div class="detailFacilities">
    <detailSection title="房屋设施" moreTitle="查看全部设施">
      <template #content>
        <div class="facilities">
          <template v-for="(item, index) in houseFacilities.houseFacilitys">
            <div
              class="item"
              v-if="houseFacilities.facilitySort.includes(index)"
            >
              <div class="header">
                <img :src="item.icon" alt="" />
                <div class="text">{{ item.groupName }}</div>
              </div>
              <div class="list">
                <template
                  v-for="(iten, indey) in item.facilitys.slice(0, 4)"
                  :key="indey"
                >
                  <div class="iten">
                    <van-icon name="passed" color="#5c89fa" />
                    <span>{{ iten.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/index.vue";
defineProps({
  houseFacilities: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.facilities {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    margin: 25px 0;

    .header {
      width: 90px;
      text-align: center;

      img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-top: 5px;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .iten {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;
        span {
            margin-left: 5px;
        }
        .text {
          color: #333;
        }
      }
    }
  }
}
</style>
