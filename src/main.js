import Vue from 'vue';
import App from './App.vue';
import './assets/style.css'
import Vue2TouchEvents from 'vue2-touch-events'
import 'animate.css';

Vue.use(Vue2TouchEvents)

new Vue({
  render: (h) => h(App),
}).$mount('#app');