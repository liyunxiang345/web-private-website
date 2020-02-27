import Layout from '@/layout';

const homeRouter = {
  path: '/',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Home',
  children: [{
    path: '/home',
    component: () => import('@/views/home/home.vue'),
  }]
}

export default homeRouter;