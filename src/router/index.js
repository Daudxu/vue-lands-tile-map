import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/examples/index.vue');
const Loading = () => import('@/examples/loading.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
  ]
});
