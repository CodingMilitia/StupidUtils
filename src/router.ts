import Vue from 'vue';
import Router from 'vue-router';

// lazy loading routes, considering they're loose utils, the whole app doesn't need to be loaded all the time
const Home = () => import('./views/Home.vue');
const Countdown = () => import('./views/Countdown.vue');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: Countdown,
    },
  ],
});
