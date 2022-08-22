import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: layout,
      children: [
        {
          path: 'category/:id',
          component: () => import('@/views/category/index.vue'),
          props: true,
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/category/sub.vue'),
          props: true,
        },
        {
          path: '',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
  ],
})
export default router
