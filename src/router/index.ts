import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TableView from "@/views/TableView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "table",
    component: TableView,
  },
  {
    path: "/team/:teamName/:teamLogo/:teamId",
    name: "team",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TeamView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
