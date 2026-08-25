import { APP_INITIALIZER, ApplicationConfig, isDevMode, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { inject as injectAnalytics } from '@vercel/analytics';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideAppInitializer(() => injectAnalytics({ mode: isDevMode() ? 'development' : 'production' }))
  ]
};
