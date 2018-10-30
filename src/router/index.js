import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/auth/login'
import SignUp from '@/components/auth/sign-up'
import AuthForm from '@/components/auth/auth-form'
import Features from '@/components/features'
import AppView from '@/components/ComponentMain/app-view'
import Dashboard from '@/components/ComponentMain/dashboard'

import Schedule from '@/components/ComponentMain/job/schedule'
import Assignment from '@/components/ComponentMain/job/assignment'
import AssignmentId from '@/components/ComponentMain/job/assignmentid'
import Task from '@/components/ComponentMain/job/task'
import MakeContracts from '@/components/ComponentMain/job/make-contracts'
import Contracts from '@/components/ComponentMain/job/contracts'
import Team from '@/components/ComponentMain/team/your-team'
import TeamDetail from '@/components/ComponentMain/team/detail-team'
import TeamMake from '@/components/ComponentMain/team/make-team'
import BossReview from '@/components/ComponentMain/review/boss'
import CustomerReview from '@/components/ComponentMain/review/customer'
import Dept from '@/components/ComponentMain/finance/dept'
import Income from '@/components/ComponentMain/finance/income'
import Salary from '@/components/ComponentMain/finance/salary'
import Devices from '@/components/ComponentMain/device/devices'
import Hiring from '@/components/ComponentMain/device/hiring'
import UserProfile from '@/components/ComponentMain/user/profile'

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
              path: 'schedule',
              component: Schedule,
              name: 'Schedule'
            },
            {
              path: 'assignment',
              component: Assignment,
              name: 'Assignment'
            },
            {
              path: 'assignment/:id',
              component: AssignmentId,
              name: 'AssignmentId'
            },
            {
              path: 'task',
              component: Task,
              name: 'Task'
            },
            {
              path: 'team',
              component: Team,
              name: 'Team'
            },
            {
              path: 'team/new',
              component: TeamMake,
              name: 'TeamMake'
            },
            {
              path: 'team/:id/member',
              component: TeamDetail,
              name: 'TeamDetail'
            },
            {
              path: 'boss-review',
              component: BossReview,
              name: 'BossReview'
            },
            {
              path: 'customer-review',
              component: CustomerReview,
              name: 'CustomerReview'
            },
            {
              path: 'finance/income',
              component: Income,
              name: 'Income'
            },
            {
              path: 'finance/salary',
              component: Salary,
              name: 'Salary'
            },
            {
              path: 'finance/dept',
              component: Dept,
              name: 'Dept'
            },
            {
              path: 'devices',
              component: Devices,
              name: 'Devices'
            },
            {
              path: 'devices/hiring',
              component: Hiring,
              name: 'Hiring'
            },
            {
              path: 'contracts/new',
              component: MakeContracts,
              name: 'MakeContracts'
            },
            {
              path: 'contracts',
              component: Contracts,
              name: 'Contracts'
            },
            {
              path: 'user',
              component: UserProfile,
              name: 'UserProfile'
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth === false) {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      next({path: '/app'})
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      next()
    } else {
      next({path: '/auth/login'})
    }
  }
})

export default router
