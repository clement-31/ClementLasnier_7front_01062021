import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'


const app = createApp(App).use(store);
app.use(router, VueRouter);
app.mount('#app');

