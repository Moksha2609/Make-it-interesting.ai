import { createRouter, createWebHistory } from 'vue-router';
import Tasks from './pages/Tasks.vue';
import Learn from './pages/Learn.vue';
import Podcast from './pages/Podcast.vue';

const routes = [
  { path: '/', component: Tasks },
  { path: '/learn', component: Learn },
  { path: '/podcast', component: Podcast }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
