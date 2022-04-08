import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/product-details/:id",
      name: "product-details",
      component: () => import("../views/ProductDetailsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/user-profile/:id",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      beforeEnter: (to, from) => {
        const userStore = useUserStore();

        // reject the navigation
        if (userStore.getUserToken == "") return false;
      },
    },
  ],
});

export default router;
