import { createRouter, createWebHistory} from "vue-router";
import type { RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> =[
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component:  () => import('@/pages/home/Index.vue'),
  },
]

export default createRouter({
  history:createWebHistory(),
  routes
})
