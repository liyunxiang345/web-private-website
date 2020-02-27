import Vue from "vue";
import Router from 'vue-router';
Vue.use(Router);

import homeRouter from './modules/home';

export const constantRoutes = [{
    path: '/',
    redirect: '/home'
  },
  homeRouter
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