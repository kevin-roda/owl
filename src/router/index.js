import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Nous from '../views/Nous.vue';
import Old from '../views/old.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/nous',
    name: 'Nous',
    component: Nous,
  },
  {
    path: '/old',
    name: 'old',
    component: Old,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
