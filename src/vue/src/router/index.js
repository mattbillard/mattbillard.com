import Vue from 'vue'
import Router from 'vue-router'

import AboutPage from '@/pages/AboutPage'
import ConnectPage from '@/pages/ConnectPage'
import HomePage from '@/pages/HomePage'
import SkillsPage from '@/pages/SkillsPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/about',   name: 'AboutPage',    component: AboutPage },
    { path: '/connect', name: 'ConnectPage',  component: ConnectPage },
    { path: '/home',    name: 'HomePage',     component: HomePage },
    { path: '/skills',  name: 'SkillsPage',   component: SkillsPage },
    { path: '*', redirect: '/home' }
  ]
})
