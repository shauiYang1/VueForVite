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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
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
