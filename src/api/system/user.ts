/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-09-29 14:17:31
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-12 10:37:18
 * @FilePath: \web\novel-partner-client\src\api\system\user.ts
 * @Description: 系统管理 users请求
 */
import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/system/user/list',
    method: 'post',
    baseURL: '/cy-api',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/system/user/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/system/user/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 状态变更
export function updateStatus(data: object) {
  return request({
    url: '/system/user/updateStatus',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 删除
export function del(data: object) {
  return request({
    url: '/system/user/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}