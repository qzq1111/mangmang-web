import Vue from 'vue'
import Router from 'vue-router'

import LoginMangMang from '@/components/LoginMangMang'
import MangMangIndex from '@/components/MangMangIndex'
import PersonalCenter from '@/components/user/PersonalCenter'
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
          path: '/personalCenter',
          name: '个人中心',
          component: PersonalCenter
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
