import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/componentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/componentB.vue')
      },
      {
        path: 'dyrouter/:id',
        component: () => import('../views/dyrouter.vue')
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/componentC.vue'),
              right: () => import('../views/componentA.vue'), 
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/componentA.vue'),
              right: () => import('../views/componentC.vue'),
            },
          },
        ],
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
