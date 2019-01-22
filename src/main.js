import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import router from './router'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.use(VeeValidate)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
