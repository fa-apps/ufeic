const routes = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue'),
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/maps',
        name: 'abomapsut',
        component: () => import('../views/MapsView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
]

export default routes
