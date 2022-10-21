/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-21 18:58:27
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 18:58:40
 * @FilePath: \web\novel-partner-client\axios.d.ts
 * @Description: axios.d.ts
 */
import * as axios from 'axios'
 
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
