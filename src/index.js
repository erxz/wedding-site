import Vue from 'vue'
import router from './router'
import App from './components/App.vue'

// lazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
