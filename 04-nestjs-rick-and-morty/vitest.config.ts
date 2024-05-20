/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: 'src/app/helpers/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      // files to include in metrics for coverage
      // add your folders, adjust based on yor structure
      include: [
        'src/app/components/**/*.{ts,tsx}',
        'src/app/helpers/**/*.{ts,tsx}',
      ],
      // if you want to exclude some files
      exclude: ['src/app/helpers/setupTests.ts'],
      reporter: ['html', 'text-summary'],
      thresholds: {
        functions: 50,
        lines: 50,
        branches: 50,
        statements: 50,
      },
    },
  },
  resolve: {
    alias: {
      // add this section if you are using an alias
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
