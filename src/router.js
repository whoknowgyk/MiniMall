import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/aliPay'

// 加载插件
Vue.use(Router);

export default new Router({
    // 配置子路由
    routes:[
        {
            // 一级路由
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    // 二级路由
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    // 动态路由
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                },
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    // /order/confirm
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm,
                },
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList,
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay,
                },
                {
                    path:'alipay',
                    name:'ali-pay',
                    component:AliPay,
                },
            ]
        },
    ]
})