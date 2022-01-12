require('./bootstrap');
// admin lte 

// vue import
window.Vue = require('vue').default;
// vue uter import
import router from './router/router.js';

// vue form import
import { Form, HasError, AlertError }
from 'vform'
window.Form = Form;
// sweetalert
import Swal from 'sweetalert2'
window.Swal = Swal;


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;
import toastr from 'toastr';
window.toastr = toastr;
import Vuex from 'vuex'
// vuex 
Vue.use(Vuex)
import storeData from './store/store'
const store = new Vuex.Store(
    storeData
);
import { moment } from "./filter/filter";
import './helpers/mixins'
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home', require('./components/frontend/home.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store
});