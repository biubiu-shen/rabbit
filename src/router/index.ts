import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'',
      component:layout
    }
  ],
})
export default router
