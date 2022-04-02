import Layout from '@/layout';

const chartRouter = {
  path: '/',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Chart',
  children: [{
    path: '/chart',
    component: () => import('@/views/chart/chart.vue')
  }]
}

export default chartRouter;