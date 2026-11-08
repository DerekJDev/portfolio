import { Injectable } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import enUS from '../assets/locale/translations.en-US.json';
import ptBR from '../assets/locale/translations.pt-BR.json';

const TRANSLATIONS: Record<string, TranslationObject> = {
  'en-US': enUS as TranslationObject,
  'pt-BR': ptBR as TranslationObject
};

@Injectable()
export class StaticTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['en-US']);
  }
}
