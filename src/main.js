import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import { abilitiesPlugin } from '@casl/vue'
import { defineAbilityFor } from './config/ability'

const ability = defineAbilityFor()

if (process.env.NODE_ENV !== 'production') {
  // exposed for debugging
  window.ability = ability
}

Vue.prototype.$debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false
Vue.use(abilitiesPlugin, ability)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
