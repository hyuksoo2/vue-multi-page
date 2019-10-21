import Vue from 'vue';
import App from './app.vue';
import router from './router';


Vue.config.prodictionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
