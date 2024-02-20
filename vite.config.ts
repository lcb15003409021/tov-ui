import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const baseURL = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^tov-ui/,
        replacement: path.resolve(baseURL, 'packages/tov-ui/src'),
      },
      {
        find: /^@tov-ui\/utils/,
        replacement: path.resolve(baseURL, 'packages/utils/src'),
      },
    ],
  },

})
