import Vue from 'vue';
import Router from 'vue-router';
// const Index = () => import('@/examples/index.vue');
const LandsTileMap = () => import('@/examples/landsTileMap.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: LandsTileMap
    },
    // {
    //   path: '/landsTileMap',
    //   name: 'landsTileMap',
    //   component: LandsTileMap
    // },
  ]
});
