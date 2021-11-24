import Vue from 'vue'
import App from './App.vue'
// import vuelidate from 'vuelidate'
import router from './router'
import {store} from './store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
    store: store,
}).$mount('#app')

// new Vue ({
//   el: "#app",
//   data:{
//     msg: "hii this is uma"
//   }
// })