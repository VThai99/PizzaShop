import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/open-iconic-bootstrap.min.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/owl.theme.default.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/aos.css'
import '../src/assets/css/ionicons.min.css'
import '../src/assets/css/flaticon.css'
import '../src/assets/css/icomoon.css'
import '../src/assets/css/style.css'
import '../src/assets/css/custom.css'
import '../src/assets/css/styleAdmin.css'
// import carousel from 'vue-owl-carousel'
import compiler from 'vue-template-compiler'
import JQuery from 'jquery'
window.$ = JQuery
import bootstrap from 'bootstrap'
import range from '../src/assets/js/range.js'
// import aos from '../src/assets/js/aos'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Hooper, Slide } from 'hooper';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
    router,
    axios,
    bootstrap,
    // carousel,
    compiler,
    range,
        // aos,
    Hooper,
    Slide,
    render: h => h(App)
}).$mount('#app')