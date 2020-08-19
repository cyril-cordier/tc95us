import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MyAccount from '../views/MyAccount.vue'
import Map from '../views/Map.vue'
import Events from '../views/Events.vue'
import Calendarevents from '../views/Calendarevents.vue'
import Tarifs from '../views/Tarifs.vue'
import Championnats from '../views/Rencontres.vue'
import Challenge from '../views/Challenge.vue'
import Admin from '../views/Admin.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresVisitor: true},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), 
    meta:{requiresVisitor: true},
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    meta:{requiresVisitor: true},
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta:{requiresVisitor: true},
  },
  {
    path:'/carte',
    name:'Map',
    component: Map,
    meta:{requiresVisitor: true},
  },
  {
    path:'/evennements',
    name:'Animevents',
    component: Events,
    meta:{requiresVisitor: true},
  },
  {
    path:'/calendrier_events',
    name:'Calendarevents',
    component: Calendarevents,
    meta:{requiresVisitor: true},
  },
  {
    path:'/tarifs',
    name:'Tarifs',
    component: Tarifs,
    meta:{requiresVisitor: true},
  },
  {
    path:'/championnats',
    name:'championnats',
    component: Championnats,
    meta:{requiresVisitor: true},
  },
  {
    path: '/monCompte',
    name: 'MyAccount',
    component: MyAccount,
    meta:{requiresVisitor: false},
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{requiresVisitor: false},
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: Challenge,
    meta:{requiresVisitor: false},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
