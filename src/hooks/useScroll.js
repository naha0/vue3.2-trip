import { onMounted, onUnmounted, ref } from "vue";
import {throttle} from "underscore";

// 监听是否滚动到底部了
export default function useScroll(toEnd) {
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);

//   防抖节流
  const handlerScrollToEnd = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollHeight.value = document.documentElement.scrollHeight;
    scrollTop.value =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("已经到底了~");
      if (toEnd) toEnd();
    }
    console.log("滚动距离" + scrollTop.value);
  },100)
  // 添加监听
  onMounted(() => {
    window.addEventListener("scroll", handlerScrollToEnd);
  }),
    // 移除监听
    onUnmounted(() => {
      window.removeEventListener("scroll", handlerScrollToEnd);
    });
  return { clientHeight, scrollHeight, scrollTop };
}
