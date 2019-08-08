import Vue from 'vue'
import Router from 'vue-router'

import LoginMangMang from '@/components/LoginMangMang'
import MangMangIndex from '@/components/MangMangIndex'

import MangMangHome from '@/components/home/MangMangHome'

import PersonalInformation from '@/components/user/PersonalInformation'
import PersonalSetting from '@/components/user/PersonalSetting'

import ProjectMain from '@/components/project/ProjectMain'
import ProjectManagement from '@/components/project/ProjectManagement'
import ProjectTasks from '@/components/project/ProjectTasks'






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
        },
        {
          path: '/personalInformation',
          name: '个人信息',
          component: PersonalInformation
        },
        {
          path:'/personalSetting',
          name:"个人设置",
          component:PersonalSetting
        },
        {
          path: '/projectManagement',
          name: '',
          component: ProjectMain,
          children: [
            {
              path: '',
              name: "项目管理",
              component: ProjectManagement
            },
            {
              path: ':key',
              name: "项目任务",
              component: ProjectTasks
            }
          ]
        },

      ]

    },
  ]
});

export default router
