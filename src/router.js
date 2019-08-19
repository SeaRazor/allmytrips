import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Auth/Login'
import Registration from './components/Auth/Registration'
import Timeline from './components/Trips/Timeline'
import Trip from './components/Trips/Trip'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: Timeline
    },
    {
      path: '/trip',
      name: 'New Trip',
      component: Trip
    }
  ]

})
