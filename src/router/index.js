import Vue from 'vue'
import Router from 'vue-router'

import LoginMangMang from '@/components/LoginMangMang'
import MangMangIndex from '@/components/MangMangIndex'
import PersonalInformation from '@/components/user/PersonalInformation'
import BusinessCard from '@/components/user/BusinessCard'
import ProjectManagement from '@/components/project/ProjectManagement'
import MangMangHome from '@/components/home/MangMangHome'




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
      name: 'MangMangIndex',
      component: MangMangIndex,
      children: [
        {
          path:'',
          name:"主页",
          component: MangMangHome,
        },
        {
          path: '/personalInformation',
          name: '个人信息',
          component: PersonalInformation
        },
        {
          path: '/businessCard',
          name: '个人名片',
          component: BusinessCard
        },
        {
          path: '/projectManagement',
          name: '项目管理',
          component: ProjectManagement
        },

      ]

    },

  ]
});

export default router
