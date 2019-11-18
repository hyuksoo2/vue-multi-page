import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from '../store';

Vue.config.prodictionTip = false;

store.subscribe((mutation, state) => {
  if(sessionStorage.getItem('store')) {
    if(mutation.type !== 'initialiseStore') {
      sessionStorage.setItem('store', JSON.stringify(state));
    }
  }
});

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  render: (h) => h(App)
}).$mount('#app');
