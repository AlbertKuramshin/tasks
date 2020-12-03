import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    component: () => import('../components/Detail.vue')
  },
  {
    path: '/tree',
    component: () => import('../components/Tree.vue')
  }
];

const router = new VueRouter(
    {
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    }
)

export default router