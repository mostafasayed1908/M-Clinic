import Vue from 'vue';
import Router from 'vue-router';
import Services from './views/Services.vue';
import Ourdoctors from './views/Ourdoctors.vue';
import Contactus from './views/Contactus.vue';
import Pricing from './views/Pricing.vue';
import Blog from './views/Blog.vue';



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Services',
      component: Services
    },
    {
    path: '/services',
    name: 'Services',
    component: Services
    },
    {
      path: '/contactus',
      name: 'Contactus',
      component: Contactus
    },
    {
        path: '/ourdoctors',
        name: 'Ourdoctors',
        component: Ourdoctors
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
