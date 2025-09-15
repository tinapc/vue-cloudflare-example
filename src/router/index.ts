import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const isServer = typeof window === "undefined";

const createRouter = () =>
  createVueRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
    ],
  });

export default createRouter;
