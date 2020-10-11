import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

var axios=require('axios')
axios.default.baseUrl='http://localhost:8443/api'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

