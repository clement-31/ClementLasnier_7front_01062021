import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Posts',
    component: () => import (`../views/Post.vue`)
  },
  {
    path :'/signup',
    name : 'Signup',
    component: () => import(`../views/Signup.vue`)
  },
  {
    path :'/login',
    name : 'Login',
    component : () => import(`../views/Login.vue`)
  },
  {
    path : '/profil',
    name : 'Profil',
    component: () => import(`../views/Profil.vue`)
  }
]


const router = new VueRouter({
  mode: 'history',

  routes
})

export default router;