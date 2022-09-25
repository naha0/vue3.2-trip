// 动态引入图片路径
const getImage = (image) => {
    // 参数一：相对路径
    // 参数二： 当前路径的url
    return new URL(`../assets/${image}`,import.meta.url).href
}

export default getImage