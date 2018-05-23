import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './About.vue';
import Page from './page.vue';
import Home from './Home.vue';

//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);

import App from './App.vue';


//import featuredPuff from './components/mlPuff.vue';
import featuredPuff from './components/featuredPuff.vue';
import latestPuff from './components/latestPuff.vue';
import mostReadPuff from './components/mostReadPuff.vue';
import mostSharedPuff from './components/mostSharedPuff.vue';
import trendingPuff from './components/trendingPuff.vue';

//use of locale in order to display month name in swedish
import 'moment/locale/sv';
//moment.js for date
import moment from 'moment';



Vue.use(VueRouter);

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home },
  { path: '/page', component: Page }
];

const router = new VueRouter({
  routes,
  mode: 'history' //to remove the # from the url
});

//date
Vue.filter('sayDate', (date) => moment(date).format('MMMM DD, YYYY'));
/* Another way to do it
Vue.prototype.sayDate = (date) => moment(date).format('MMMM DD, YYYY');
*/

Vue.prototype.moment = moment;

Vue.config.productionTip = false;

//Vue.component('mlPuff', mlPuff);
Vue.component('featuredPuff', featuredPuff);
Vue.component('latestPuff', latestPuff);
Vue.component('mostReadPuff', mostReadPuff);
Vue.component('mostSharedPuff', mostSharedPuff);
Vue.component('trendingPuff', trendingPuff);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
