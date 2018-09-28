import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import "./assets/FB_app.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
