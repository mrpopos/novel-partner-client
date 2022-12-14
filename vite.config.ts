/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-09-29 14:17:31
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 12:01:00
 * @FilePath: \www\novel-partner-client\vite.config.ts
 * @Description: vite配置文件
 */
import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src"),
  'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
}

/** 
 * @description-en vite document address
 * @description-cn vite官网
 * https://vitejs.cn/config/ */
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true;
  return {
    base: './',
    resolve: {
      alias
    },
    server: {
      port: 3001,
      host: '0.0.0.0',
      open: true,
      proxy: { // 代理配置
        // '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'
        '^/cy-api/.*': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/cy-api/, '/cy-api')
        }
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'echarts': ['echarts']
          }
        }
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        watchFiles: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule: {
                charset: (atRule) => {
                  if (atRule.name === 'charset') {
                    atRule.remove();
                  }
                }
              }
            }
        ],
      },
    }
  };
}
