import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export const routes = [
  {name: 'index',path: '/',component: () => import('@/pages/home')},
  {
    name: 'content',
    path: '/content',
    component: () => import('@/pages/contentPage'),
    children:[
      { name:'buying',path: '/content/buying', component: () => import('@/components/Buying')},
      { name:'selling',path: '/content/selling', component: () => import('@/components/Selling')},
      { name:'welcome',path: '/content/welcome', component: () => import('@/components/HelloWorld')}
    ]
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/pages/userCenter')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

export default router;
