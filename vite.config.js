// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      // allows `import Foo from '@/components/Foo'` -> resolves to /src/components/Foo
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  server: {
    // dev server options you can tweak
    port: 5173,
    open: true
  },
  preview: {
    port: 5173
  }
})
