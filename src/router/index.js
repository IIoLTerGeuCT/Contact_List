import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "@/components/Contacts.vue";
import Details from "@/components/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/contacts-details/:id",
    name: "Details",
    component: Details,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
