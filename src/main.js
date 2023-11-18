import { createApp } from 'vue'
import './style.css'
import store from './store/index.js';
import router from './router/index.js';

import App from './App.vue'
import Home from './views/home.vue'

const app = createApp(App);
const home = createApp(Home);

home.use(router);
home.use(store);
// app.mount('#app');
home.mount('#app');

