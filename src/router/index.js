import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/auth/login'
import SignUp from '@/components/auth/sign-up'
import AuthForm from '@/components/auth/auth-form'
import Features from '@/components/features'
import AppView from '@/components/ComponentMain/app-view'
import Dashboard from '@/components/ComponentMain/dashboard'

import Articles from '@/components/ComponentMain/article/list'
import Post from '@/components/ComponentMain/article/post'
import Albums from '@/components/ComponentMain/album/list'
import AlbumNew from '@/components/ComponentMain/album/new'
import Videos from '@/components/ComponentMain/video/list'
import VideoNew from '@/components/ComponentMain/video/new'
// import MakeContracts from '@/components/ComponentMain/job/make-contracts'
// import Contracts from '@/components/ComponentMain/job/contracts'
// import Team from '@/components/ComponentMain/team/your-team'
Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Features,
      name: 'Features',
      children: [
        {
          path: 'auth',
          components: {auth: AuthForm},
          name: 'AuthForm',
          children: [
            {
              path: 'login',
              component: Login,
              name: 'Login',
              meta: { requiresAuth: false }
            },
            {
              path: 'signup',
              component: SignUp,
              name: 'SignUp',
              meta: { requiresAuth: false }
            }
          ]
        },
        {
          path: 'app',
          components: {dash: AppView},
          name: 'AppView',
          children: [
            {
              path: '',
              component: Dashboard,
              name: 'Dashboard'
            },
            {
              path: 'articles/list',
              component: Articles,
              name: 'List'
            },
            {
              path: 'articles/new',
              component: Post,
              name: 'Article'
            },
            {
              path: 'albums/list',
              component: Albums,
              name: 'Albums'
            },
            {
              path: 'albums/new',
              component: AlbumNew,
              name: 'Album'
            },
            {
              path: 'videos/list',
              component: Videos,
              name: 'Videos'
            },
            {
              path: 'videos/new',
              component: VideoNew,
              name: 'Video'
            }
            // {
            //   path: 'devices',
            //   component: Devices,
            //   name: 'Devices'
            // },
            // {
            //   path: 'devices/hiring',
            //   component: Hiring,
            //   name: 'Hiring'
            // },
            // {
            //   path: 'contracts/new',
            //   component: MakeContracts,
            //   name: 'MakeContracts'
            // },
            // {
            //   path: 'contracts',
            //   component: Contracts,
            //   name: 'Contracts'
            // },
            // {
            //   path: 'user',
            //   component: UserProfile,
            //   name: 'UserProfile'
            // }
          ]
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth === false) {
//     if (localStorage.getItem('ACCESS_TOKEN')) {
//       next({path: '/app'})
//     } else {
//       next()
//     }
//   } else {
//     if (localStorage.getItem('ACCESS_TOKEN')) {
//       next()
//     } else {
//       next({path: '/auth/login'})
//     }
//   }
// })

export default router
