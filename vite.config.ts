/*
 * @Author: yangshuai u9h_75bugk181@dingtalk.com
 * @Date: 2023-02-14 10:06:37
 * @LastEditors: yangshuai u9h_75bugk181@dingtalk.com
 * @LastEditTime: 2023-02-16 09:30:34
 * @FilePath: \VueForVite\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
// https://github.com/antfu/unplugin-vue-components#installation
// https://github.com/antfu/unplugin-auto-import#install

export default defineConfig({
  plugins: [vue(),
    AutoImport({ // 配置自动导入引用
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'], // 自动按需导入组件访问的相对路径
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    host: "localhost",
    https: false,//是否启用 http 2
    cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    open: false,//服务启动时自动在浏览器中打开应用
    port:9000,
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true,//是否强制依赖预构建
    hmr: false,//禁用或配置 HMR 连接
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css:{
    postcss:{
      plugins:[
        require("postcss-pxtorem")({
          rootValue: 192,//1rem = 192px
          propList: ['*'],
          exclude: 'node_modules'
        }),
      ]
    },
    preprocessorOptions:{
      scss: {
        additionalData: `@import 'src/assets/scss/variable.scss';`,
      },
    }
  },
})
