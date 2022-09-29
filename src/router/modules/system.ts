/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-09-29 14:17:31
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-09-29 17:33:01
 * @FilePath: \www\novel-partner-client\src\router\modules\system.ts
 * @Description: 免鉴权系统路由
 */
import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/system',
    component: Layout,
    redirect: '/404',
    hideMenu: true,
    meta: { title: 'message.menu.system.name' },
    children: [
      {
        path: '/404',
        component: createNameComponent(() => import('@/views/system/404.vue')),
        meta: { title: 'message.menu.system.404', hideTabs: true }
      },
      {
        path: '/401',
        component: createNameComponent(() => import('@/views/system/401.vue')),
        meta: { title: 'message.menu.system.401', hideTabs: true }
      },
      {
        path: '/redirect/:path(.*)',
        component: createNameComponent(() => import('@/views/system/redirect.vue')),
        meta: { title: 'message.menu.system.redirect', hideTabs: true }
      }
    ]
  },
  {
    path: '/login',
    component: createNameComponent(() => import('@/views/system/login.vue')),
    hideMenu: true,
    meta: { title: 'message.system.login', hideTabs: true }
  },
  {
    path: '/:pathMatch(.*)',
    component: Layout,
    redirect: '/404',
    hideMenu: true,
    meta: { title: '404' },
    children: []
  },
]

export default route