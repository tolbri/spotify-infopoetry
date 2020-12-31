import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './index.css';
import Home from "@/components/Home";
import Dataset from "@/components/Dataset";
import store from "./store";
import SongAttributes from "@/components/SongAttributes";
import VuePapaParse from "vue-papa-parse";
import { VueCsvImport } from 'vue-csv-import';



Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VuePapaParse);


const routes = [
  {path: '/songattributes', component: SongAttributes},
  {path: '/dataset', component: Dataset},
  {path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  components: {
    VueCsvImport
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
