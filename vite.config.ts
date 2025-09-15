import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import ssr from 'vite-ssr-vue/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
