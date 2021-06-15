import { createRouter, createWebHistory,  } from "vue-router";
import Accueil from '@/views/Accueil.vue';


const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/*webpackChunkName: "signup"*/ '@/views/Signup.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/*webpackChunkName: "login"*/ '@/views/Login.vue')
  },
  {
    path: "/deconnect",
    name: "Deconnect",
    component: () => import(/*webpackChunkName: "deconnect"*/ '@/views/Deconnect.vue')
  },
  {
    path: "/confidential",
    name: "Confidential",
    component: () => import(/*webpackChunkName: "confidential"*/ '@/views/Confidential.vue')
  },
  {
    path: "/reglement",
    name: "Reglement",
    component: () => import(/*webpackChunkName: "reglement"*/ '@/views/Reglement.vue')
  },
  {
    path: "/unsubscribe",
    name: "Unsubscribe",
    component: () => import(/*webpackChunkName: "unsubscribe"*/ '@/views/Unsubscribe.vue')
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import(/*webpackChunkName: "forum"*/ '@/views/Forum.vue')
  },
  {
    path: "/forum-texte",
    name: "ForumTexte",
    component: () => import(/*webpackChunkName: "forumTexte"*/ '@/views/ForumTexte.vue')
  },
  {
    path: "/forum-multimedia",
    name: "ForumMultimedia",
    component: () => import(/*webpackChunkName: "forumMultimedia"*/ '@/views/ForumMultimedia.vue')
  },
  {
    path: "/commentaire",
    name: "Commentaire",
    component: () => import(/*webpackChunkName: "commentaire"*/ '@/views/Commentaire.vue')
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;