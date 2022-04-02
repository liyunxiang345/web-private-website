import Vue from "vue";
import Router from 'vue-router';
Vue.use(Router);

import homeRouter from './modules/home';
import chartRouter from "./modules/chart";
import SpriteRouter from "./modules/sprite";
export const constantRoutes = [{
    path: '/',
    redirect: '/home'
  },
  homeRouter,
  chartRouter,
  {path: '/sprite',component: () => import('@/views/sprite/sprite.vue')}
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

export default router;
