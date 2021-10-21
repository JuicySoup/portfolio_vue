import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminPanel from '../views/AdminPanel.vue'
import Create from '../views/Create.vue'
import {auth} from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user){
    next({name: 'Home'})
  } else {
    next()
  }

}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/AdminPanel',
    name: 'AdminPanel',
    component: AdminPanel,
    beforeEnter: requireAuth
  },
  {
    path: '/AdminPanel/Create',
    name: 'Create',
    component: Create,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
