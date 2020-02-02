import Vue from 'vue'
import App from './App.vue'
import Bulma from 'bulma'
import Moment from 'moment';
import MomentTimezone from 'moment-timezone';
import { extendMoment } from 'moment-range';
import router from './router';

Vue.use(Bulma);
Vue.use(Moment);
MomentTimezone.tz.setDefault('UTC');
window.moment = extendMoment(Moment);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
