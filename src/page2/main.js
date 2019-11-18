import Vue from 'vue'
import App from './app.vue'
import store from '../store';

store.subscribe((mutation, state) => {
  if(sessionStorage.getItem('store')) {
    if(mutation.type !== 'initialiseStore') {
      sessionStorage.setItem('store', JSON.stringify(state));
    }
  }
});

Vue.config.prodictionTip = false;

new Vue({
  store,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  render: (h) => h(App,)
}).$mount('#app');
