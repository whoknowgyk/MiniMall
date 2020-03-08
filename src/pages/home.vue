<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
export default {
    // 组件名称 必须 组件的标识
    name: 'nav-header',
}
</script>