<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'

export default {
    // 组件名称 必须 组件的标识
    name: 'order',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>