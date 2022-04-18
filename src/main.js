import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Element from "element-ui";
import store from "./store/index";
import Filter from "./filter";
import '@/style/index.less';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);
Vue.use(Filter);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')