import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router/index.js'
import VueRouter from 'vue-router'
import * as wilddog from 'wilddog'
import axios from 'axios'

Vue.prototype.axios = axios   
Vue.use(VueRouter);
Vue.use(ElementUI);



const router = new VueRouter({
	routes,
})




Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
