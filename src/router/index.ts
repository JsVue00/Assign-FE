import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { appStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const store = appStore();
  if (store.Token !== '' && to.path === '/login') {
    next({ name: 'home' });
  } else if (store.Token === '' && to.path !== '/login') {
    next({ name: 'login' });
  } else {
    next();
  }

});

export default router
