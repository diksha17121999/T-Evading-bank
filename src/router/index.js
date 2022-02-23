import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
  },
  {
    path: "/mybank",
    name: "mybank",
    component: () => import("../views/MybankView.vue"),
    children: [
      {
        path: "mybank/calculatetax",
        name: "calculatetax",
        component: () => import("../views/Mybank/CalculatetaxView.vue"),
      },
      {
        path: "mybank/checkpassbook",
        name: "checkpassbook",
        component: () => import("../views/Mybank/CheckpaasbookView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
