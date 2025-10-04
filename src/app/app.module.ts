import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from '../components/language-switcher/language-switcher.component';

import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

export class dynamicTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient, private prefix: string = 'en') {}
  public getTranslation(lang: string): any {
    return this.http.get('/assets/locale/translations.' + lang + '.json');
  }
}

export function dynamicTransLoaderFactory(http: HttpClient) {
  return new dynamicTranslateLoader(http, 'en-US');
}

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [SharedModule,
        ThemeSwitcherComponent,
        LanguageSwitcherComponent,
        TranslateModule.forRoot({
            defaultLanguage: 'en-US',
            loader: {
                provide: TranslateLoader,
                useFactory: dynamicTransLoaderFactory,
                deps: [HttpClient],
            },
            compiler: {
                provide: TranslateCompiler,
                useClass: TranslateMessageFormatCompiler
            }
        }),
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
