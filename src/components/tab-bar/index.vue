<template>
    <div class="tab-bar">
        <div class="tab-bar-item">
            TabBar
        </div>
        <div class="tab-bar-item">
            TabBar
        </div>
        <div class="tab-bar-item">
            TabBar
        </div>
    </div>
</template>

<script setup>
    import {} from 'vue'
    
</script>

<style lang="less" scoped>
    .tab-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        top: 0;
        right: 0;
        height: 50px;
        display: flex;
        .tab-bar-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
        }
    }
</style>