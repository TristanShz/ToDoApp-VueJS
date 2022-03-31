import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import Routes from "./routes/index.js";
import VueRouter from "vue-router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faUserSecret);
library.add(faAnglesRight);
library.add(faAngleRight);
library.add(faAnglesLeft);
library.add(faAngleLeft);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: Routes,
});

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount("#app");
