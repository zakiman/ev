import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

const Chat = r => require.ensure([], () => r(require('@/views/chat/index')), 'group-chat')
const AddressBook = r => require.ensure([], () => r(require('@/views/addressBook/index')), 'group-addressBook')
const Workbench = r => require.ensure([], () => r(require('@/views/workbench/index')), 'group-workbench')

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index') },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    redirect: '/chat/index'
  },

  {
    path: '/chat',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Chat',
        component: Chat,
        meta: { title: '会话' }
      }
    ]
  },

  {
    path: '/addressBook',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'AddressBook',
        component: AddressBook,
        meta: { title: '通讯录' }
      }
    ]
  },

  {
    path: '/workbench',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Workbench',
        component: Workbench,
        meta: { title: '工作台' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

