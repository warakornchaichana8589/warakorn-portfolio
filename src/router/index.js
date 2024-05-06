import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import AllProjectsView from '../views/AllProjectsView.vue'
import AddUser from '../views/AddUser.vue'
import LoginPage from '@/views/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
    ,
    {
      path: '/all-projects',
      name: 'all-projects',
      component: AllProjectsView
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
   
  ]
})

export default router
