import Layout from '@/layout';

const spriteRouter = {
  path: '/',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Sprite',
  children: [{
    path: '/sprite',
    component: () => import('@/views/sprite/sprite.vue')
  }]
}

export default spriteRouter;