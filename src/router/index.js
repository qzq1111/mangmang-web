import Vue from 'vue'
import Router from 'vue-router'

import LoginMangMang from '@/components/LoginMangMang'
import MangMangIndex from '@/components/MangMangIndex'
import MangMnag404 from '@/components/MangMnag404'

import MangMangHome from '@/components/home/MangMangHome'

import PersonalInformation from '@/components/user/PersonalInformation'
import PersonalSetting from '@/components/user/PersonalSetting'

import ProjectManagement from '@/components/project/ProjectManagement'
import ProjectIndex from '@/components/project/ProjectIndex'






Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LoginMangMang',
      component: LoginMangMang
    },
    {
      path: '/home',
      name: '',
      component: MangMangIndex,
      children: [
        {
          path: '',
          name: "主页",
          component: MangMangHome,
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/personalInformation',
          name: '个人信息',
          component: PersonalInformation,
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/personalSetting',
          name: "个人设置",
          component: PersonalSetting,
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/projectManagement',
          name: '项目管理',
          component: ProjectManagement,
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/projectManagement/:key',
          name: "项目任务",
          component: ProjectIndex,
          meta: {
            requireAuth: true
          },
        }

      ]

    },
    {
      path: '*',
      component: MangMnag404
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('userName') != "null" && sessionStorage.getItem('userName')) {
      // 判断是否登录
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
});

export default router
