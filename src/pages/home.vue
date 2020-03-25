<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'

export default {
    // 组件名称 必须 组件的标识
    name: 'nav-home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>