import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../pages/todo/TodoPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/detail/:id',
      name: 'todo/detail',
      component: () => import('../pages/todo/TodoDetailPage.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/todo/write',
      name: 'todo/write',
      component: () => import('../pages/todo/TodoWritePage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/edit/:id',
      name: 'todo/edit',
      component: () => import('../pages/todo/TodoEditPage.vue'),
      meta: { requiresAuth: true },
      props: true,
    }
  ],
})


// 로그인이 성공 했을 때만 TODO 페이지로 이동 시키는 auth 권한 부여
router.beforeEach(function (to,from,next) {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth') === 'true') { // auth 가 true 일경우 로그인이 된 상태
      next(); // 로그인이 되었을 경우 원래 주소 요청대로 next를 사용해서 보내주기
    } else {
      alert('로그인이 필요합니다.');
      next({ name: 'login '});
    }
  } else {
    next();
  }
})

export default router
