import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

import '#/style/reset.css'
import '#/style/main.css'

import { get } from './utils/request'

Vue.prototype.$get = get

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
