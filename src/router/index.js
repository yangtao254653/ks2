import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      { path: "", name: "one", component: () => import("../views/homes/text1.vue") },
      { path: "2-1", name: "two", component: () => import("../views/homes/home1.vue") },
      { path: "2-2", name: "two", component: () => import("../views/homes/home2.vue") },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
