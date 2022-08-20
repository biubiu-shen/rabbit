import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from "vite-plugin-vue-setup-extend"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
        @import '@/styles/mixin.less';
        @import '@/styles/variables.less';
        `,
      },
    },
  },
})
