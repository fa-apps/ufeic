import { createRouter, createWebHistory } from 'vue-router'
/*
import DashboardView from '../views/DashboardView.vue'
import DashboardLayout from '../views/DashboardLayout.vue'
import SettingsView from '../views/SettingsView.vue' */

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
