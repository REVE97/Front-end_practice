import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home 라우터
    {
      path: '/', //라우터가 연결할 주소 값을 지정
      name: 'home',
      component: HomeView, // 해당 주소에 연결할 컴포넌트 연결
    },

    // About 라우터
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue'),
    },

    // Parameter 동적 라우팅
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('../pages/DynamicPage.vue'),
      props: true,
    },

    // 주소 예외 처리
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../pages/NotFound.vue'),
    },

  ],
})

export default router
