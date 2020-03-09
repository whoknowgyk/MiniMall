import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
// import env from './env'

// mockjs的开关 控制是否启动mock
const mock = false;
if(mock){
  // 使用require而不是import 因为import是预编译加载 require是执行时加载
  // 使用import是无论mock是否打开都会加载
  require('./mock/api');
}

// 根据前端的跨域方式做调整
// 此处是代理方式
// axios.defaults.baseURL = '/api';
// 使用postman时只需要修改baseURL地址即可
axios.defaults.baseURL = 'https://508e58a1-5196-46fb-8cce-5196c9cdfc6f.mock.pstmn.io';
axios.defaults.timeout = 8000;

// 根据环境变量获取不同请求的地址
// axios.defaults.baseURL = env.baseURL;

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
