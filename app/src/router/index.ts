import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DayPage from "@/views/DayPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/:date", component: DayPage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
