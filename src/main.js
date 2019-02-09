import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'babel-polyfill/dist/polyfill.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import vEndlessList from 'v-endless-list'

Vue.use(BootstrapVue)
Vue.use(vEndlessList)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
