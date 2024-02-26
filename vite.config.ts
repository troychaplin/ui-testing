import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'], insertTypesEntry: true })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    copyPublicDir: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'rds',
      formats: ['es', 'umd'],
      fileName: (format) => `rds.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies)],
    },
  },
})
