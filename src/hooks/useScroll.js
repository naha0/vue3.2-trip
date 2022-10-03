import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

// 监听是否滚动到底部了
export default function useScroll(toEnd, elRef) {
  let el = window;
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);

  //   防抖节流
  const handlerScrollToEnd = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollHeight.value = document.documentElement.scrollHeight;
      scrollTop.value =
        document.documentElement.scrollTop || document.body.scrollTop;
    } else {
      clientHeight.value = el.clientHeight;
      scrollHeight.value = el.scrollHeight;
      scrollTop.value = el.scrollTop;
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("已经到底了~");
      if (toEnd) toEnd();
    }
    console.log("滚动距离" + scrollTop.value);
  }, 100);
  // 添加监听
  onMounted(() => {
    console.log('elRef',elRef);
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", handlerScrollToEnd);
  })
    // 移除监听
    onUnmounted(() => {
      el.removeEventListener("scroll", handlerScrollToEnd);
    });
  return { clientHeight, scrollHeight, scrollTop };
}
