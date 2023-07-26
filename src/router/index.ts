import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DayPage from "@/views/DayPage.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: DayPage }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
