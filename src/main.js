import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false
Vue.use(ElementUi)
// Vue.use(VueCompositionApi)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
