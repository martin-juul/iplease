import './bootstrap';
import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { AppLayout } from '@/layout/app-layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({el, App, props}) {
    const app = (
      <AppLayout>
        <App {...props} />
      </AppLayout>
    );

    if (import.meta.env.DEV) {
      createRoot(el).render(app);
      return;
    }

    hydrateRoot(el, app);
  },
  progress: {
    color: '#dba04b',
  },
});