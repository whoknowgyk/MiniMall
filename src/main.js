import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

// 根据前端的跨域方式做调整
// 此处是代理方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  // 状态码0代表成功
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 10 未登录
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
});

// 将axios挂载到vue实例上
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  // 引入路由
  // key和value一样时也可以简写为router;
  router:router,
  render: h => h(App),
}).$mount('#app')
