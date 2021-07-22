import Home from '../views/Home.vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:postId',
    name: 'Post',
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


const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
});


export default router;