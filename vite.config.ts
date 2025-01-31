import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import manifestSRI from 'vite-plugin-manifest-sri';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
    manifestSRI(),
  ],
  resolve: {
    alias: {
      'ziggy-js': resolve('vendor/tightenco/ziggy'),
    },
  },
});