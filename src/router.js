import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import frontend from "./views/frontend.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Frontend",
      name: "Frontend",
      component: frontend
    }
  ]
});
