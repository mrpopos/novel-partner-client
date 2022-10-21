/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-09-29 14:17:31
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 18:43:18
 * @FilePath: \web\novel-partner-client\src\store\modules\user.ts
 * @Description: 用户状态管理
 */
import { loginApi, getInfoApi, loginOutApi } from '@/api/user'
import { ActionContext } from 'vuex'

export interface userState {
  token: string,
  info: object
}
const state = (): userState => ({
  token: '', // 登录token
  info: {},  // 用户信息
})

// getters
const getters = {
  token(state: userState) {
    return state.token
  }
}

// mutations
const mutations = {
  tokenChange(state: userState, token: string) {
    state.token = token
  },
  infoChange(state: userState, info: object) {
    state.info = info
  }
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      loginApi(params)
      .then(res => {
        commit('tokenChange', res.token)
        dispatch('getInfo')
        .then(infoRes => {
          resolve(infoRes)
        })
      }).catch(err => {
        reject(err)
      })
    })
  },
  // get user info after user logined
  getInfo({ commit }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      getInfoApi()
      .then(res => {
        commit('infoChange', res.data)
        resolve(res)
      })
    })
  },
  // login out the system after user click the loginOut button
  loginOut({ commit }: ActionContext<userState, userState>) {
    loginOutApi()
    .then(res => {

    })
    .catch(error => {

    })
    .finally(() => {
      localStorage.removeItem('tabs')
      localStorage.removeItem('vuex')
      sessionStorage.removeItem('vuex')
      location.reload()
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
