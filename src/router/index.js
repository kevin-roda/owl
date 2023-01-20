import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Nous from '../views/Nous.vue';
import Cours from '../views/cours.vue';

let Home = "<div></div>"
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
    path: '/cours',
    name: 'cours',
    component: Cours,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
