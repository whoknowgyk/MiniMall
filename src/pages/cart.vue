<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'

export default {
    // 组件名称 必须 组件的标识
    name: 'cart',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>