import CashView from '@/views/CashView.vue';
import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CashView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
