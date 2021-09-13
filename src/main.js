import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import components
import KaryawanIndex from './components/karyawan/Index'
import KaryawanCreate from './components/karyawan/Create'
import KaryawanEdit from './components/karyawan/Edit'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'karyawan',
      component: KaryawanIndex
    },
    {
      path: '/create',
      name: 'create',
      component: KaryawanCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: KaryawanEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')