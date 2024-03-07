/// <reference types="vitest" />
import { defineConfig } from 'vite'
import umdFormatResolver from 'vite-plugin-resolve-umd-format'

export default defineConfig({
  plugins: [umdFormatResolver()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'myLib',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'index'
    }
    // rollupOptions: {
    //   external: [],
    //   output: { globals: { } }
    // }
  },
  test: {
    globals: true,
    include: ['test/*.test.ts']
  }
})
