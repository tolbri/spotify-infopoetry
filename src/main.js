import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './index.css';
import Home from "@/components/Home";
import Dataset from "@/components/Dataset";
import store from "./store";
import SongAttributes from "@/components/SongAttributes";
import VueApexCharts from 'vue-apexcharts';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPlayCircle, faPause, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { faCircle } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import KProgress from 'k-progress';
import Popularity from "@/components/Popularity";
import Danceability from "@/components/Danceability";
import Duration from "@/components/Duration";


library.add(faPlayCircle, faPause, faCircle, faPlay, faPlayCircle, faTimes)

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('k-progress', KProgress);


const routes = [
  {path: '/duration', component: Duration},
  {path: '/danceability', component: Danceability},
  {path: '/songpopularity', component: Popularity},
  {path: '/songattributes', component: SongAttributes},
  {path: '/dataset', component: Dataset},
  {path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

