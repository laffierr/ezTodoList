import { createApp } from 'vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store.js';
import router from './router.js';
import Home from './views/home.vue'
const app = createApp(Home);

app.use(router);
app.use(store);
// console.log(store.state.todos);

app.mount('#app');