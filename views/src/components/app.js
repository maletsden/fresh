import Vue from "vue";
import VueRouter from 'vue-router';
import Main from './Main.vue';

Vue.use(VueRouter);

// Components
import Golovna from './divisions/golovna.vue';
import Services from './divisions/services.vue';
import Catalog from './divisions/catalog.vue';
import Payments from './divisions/payments.vue';
import About from './divisions/about.vue';

const routes = [
  {
    path: '/',
    component: Golovna
  }, {
    path: '/services',
    component: Services
  }, {
    path: '/catalog',
    component: Catalog
  }, {
    path: '/payments',
    component: Payments
  }, {
    path: '/about',
    component: About
  }
];

const router = new VueRouter({routes});


//import fontawesome from '@fortawesome/fontawesome';
//import brands from '@fortawesome/fontawesome-free-brands';
//import { faSpinner } from '@fortawesome/fontawesome-free-solid';

//fontawesome.library.add(brands, faSpinner);

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
