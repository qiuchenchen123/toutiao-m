import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局样式
import './styles/index.less'
// 使用组件
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')