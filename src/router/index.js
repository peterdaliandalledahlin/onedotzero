import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/threesixty',
    name: 'threesixty',
    component: () => import('../views/ThreeSixty.vue')
  },
  {
    path: '/church',
    name: 'church',
    component: () => import('../views/Church.vue')
  },
  {
    path: '/dreampark',
    name: 'dreampark',
    component: () => import('../views/Dreampark.vue')
  },
  {
    path: '/servicepoolen',
    name: 'servicepoolen',
    component: () => import('../views/Servicepoolen.vue')
  },
  {
    path: '/westerlundska',
    name: 'westerlundska',
    component: () => import('../views/Westerlundska.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',

    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/servicepoolen-movie',
    name: 'servicepoolen-movie',
    component: () => import('../components/ServicepoolenMovie.vue')
  },
  {
    path: '/idetradgardarna-2020-movie',
    name: 'idetradgardarna-2020-movie',
    component: () => import('../components/Idetradgardarna2020.vue')
  },
  {
    path: '/idetradgardarna-2021-movie',
    name: 'idetradgardarna-2021-movie',
    component: () => import('../components/Idetradgardarna2021.vue')
  },
  {
    path: '/dreampark-movie',
    name: 'dreampark-movie',
    component: () => import('../components/DreamparkMovie.vue')
  },
  {
    path: '/bike-ride',
    name: 'bike-ride',
    component: () => import('../components/BikeRide.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../components/Brand.vue')
  },
  // {
  //   path: '/image-map',
  //   name: 'image-map',
  //   component: () => import('../views/ImageMap.vue')
  // },
  // {
  //   path: '/quiz',
  //   name: 'quiz',
  //   component: () => import('../views/Quiz.vue')
  // },
  // {
  //   path: '/codepencardhover',
  //   name: 'codepencardhover',
  //   component: () => import('../views/CodepenCardHover.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
