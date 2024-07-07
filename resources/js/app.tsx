import './bootstrap';
import '@fontsource/poppins';
import '@mantine/core/styles.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

const appName = import.meta.env.VITE_APP_NAME || 'IPLease';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({el, App, props}) {
    const app = (
      <MantineProvider theme={theme}>
        <App {...props} />
      </MantineProvider>
    );

    if (import.meta.env.DEV) {
      createRoot(el).render(app);
      return;
    }

    hydrateRoot(el, app);
  },
  progress: {
    color: '#dba04b',
    showSpinner: true,
  },
});