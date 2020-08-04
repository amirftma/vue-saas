import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from "./store"
import VueScrollTo from 'vue-scrollto'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueScrollTo)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
