import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { appConfig } from './app/app.config';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Browser-only analytics (main.server.ts does not import this file)
inject();
injectSpeedInsights();
