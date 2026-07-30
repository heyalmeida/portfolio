import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third argument '' loads all variables, regardless of VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '')
  const port = env.PORT ? parseInt(env.PORT, 10) : 5173

  return {
    plugins: [
      tailwindcss(),
      vue(),
      vueJsx(),
      mode === 'development' && vueDevTools(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    preview: {
      port: port,
      allowedHosts: ['studio.arctisdev.com'],
    },
    server: {
      port: port,
      allowedHosts: ['studio.arctisdev.com'],
    }
  }
})
