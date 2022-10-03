<template>
  <div class="detailSwipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item
        class="swipe-item"
        v-for="(image, index) in handlerImgData"
        :key="index"
      >
        <img :src="image" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value,key,indey) in handlerCategoriesData" :key="key">
            <span class="item" :class="swipeData[active]?.enumPictureCategory==key?'activeColor':''">
              <span v-if="swipeData[active]?.enumPictureCategory==key">{{handlerCategoriesData[key][0].title}}{{getActive(swipeData[active],key)}}/{{value.length -1}}</span>
              <span v-else> {{title_list[indey]}}</span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});

const handlerImgData = props.swipeData.map((item) => item.url);

const handlerCategoriesData = {};
for (const item of props.swipeData) {
  let valueArray = handlerCategoriesData[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    valueArray.push({title:item.title})
    handlerCategoriesData[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
const title_list = []

// 处理标题
const getTitle = ()=>{
  for(const item in handlerCategoriesData){
    console.log(handlerCategoriesData[item]);
    let newTitle = handlerCategoriesData[item][0].title.replace('【','').replace('】：','')
    title_list.push(newTitle)
  }
  return title_list
}
getTitle()

// 处理当前活跃的index
const getActive = (activeItem,key) =>{
  let index= handlerCategoriesData[key].findIndex(item1 => item1 === activeItem)
  return index
}


// console.log(handlerCategoriesData);

// ---------------------------------------------------------------------------------
// const CategoriesData = props.swipeData.reduce((pre, cur) => {
//   let { title } = cur;
//   if (!pre[title]) {
//     pre[title] = {
//       title,
//       img_list: [],
//     };
//   }
// pre[title].img_list.push({
//   img:cur.url,
//   orderIndex:cur.orderIndex
// });
//   return pre;
// }, []);
// const handlerCategoriesData = Object.values(CategoriesData);

// const CategoriesData = {};
// props.swipeData.forEach((item) => {
//   let { title } = item;
//   if (!CategoriesData[title]) {
//     CategoriesData[title] = {
//       title,
//       img_index: []
//     };
//   }
//   CategoriesData[title].img_index.push({
//     img:item.url,
//     orderIndex:item.orderIndex
//   });
// });
// const handlerCategoriesData = Object.values(CategoriesData);
</script>

<style lang="less" scoped>
.detailSwipe {
  .swipe-item {
    img {
      width: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #000;
    background: rgba(0, 0, 0, 0.1);
    .activeColor {
      width: 20px;
      background-color: #000;
    }
    .item {
      color: #fff;
      margin: 0 5px;
    }
  }
}
</style>
