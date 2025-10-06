import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient} from "@angular/common/http";
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { ThemeService } from './core/theme.service';
import { LanguageService } from './core/language.service';
import { inject } from '@vercel/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
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

// Inject Vercel Analytics
inject();
