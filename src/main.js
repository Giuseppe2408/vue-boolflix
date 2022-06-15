import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import LangFlag from 'vue-lang-code-flags';
 
Vue.component('lang-flag', LangFlag);
