import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient, withXhr} from "@angular/common/http";
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { routes } from './app/app.routes';
import { ThemeService } from './core/theme.service';
import { LanguageService } from './core/language.service';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withXhr()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/locale/translations.',
        suffix: '.json'
      }),
      fallbackLang: 'en-US',
      lang: 'en-US'
    }),
    ThemeService,
    LanguageService
  ],
};

bootstrapApplication(App, appConfig);

// Inject Vercel Packages
inject();
injectSpeedInsights();
