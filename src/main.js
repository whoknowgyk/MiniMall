import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // key和value一样时也可以简写为router;
  router:router,
  render: h => h(App),
}).$mount('#app')
