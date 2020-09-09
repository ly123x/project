import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import echarts from 'echarts'
import VCharts from 'v-charts'
import '../element-variables.scss'

import 'iview/dist/styles/iview.css'; // 使用 CSS
import XLSX from 'xlsx'

Vue.prototype.XLSX = XLSX
Vue.use(VCharts)
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios // 挂载在vue实例化对象上
Vue.use(Vant);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')