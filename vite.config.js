import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

function copyHtaccess() {
  return {
    name: 'copy-htaccess',
    closeBundle() {
      const src = resolve('public/.htaccess')
      const dest = resolve('dist/.htaccess')
      if (existsSync(src)) {
        copyFileSync(src, dest)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyHtaccess()],
})
