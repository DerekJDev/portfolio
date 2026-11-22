import { Injectable, signal, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLanguage = 'en-US' | 'pt-BR';

export interface LanguageOption {
  code: SupportedLanguage;
  nameKey: string;
  flag: string;
  flagAltKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'language';
  private readonly DEFAULT_LANGUAGE: SupportedLanguage = 'en-US';

  // Available languages
  public readonly languages: LanguageOption[] = [
    {
      code: 'en-US',
      nameKey: 'language.english',
      flag: './assets/images/icons/icons8-usa-48.png',
      flagAltKey: 'language.usaFlag'
    },
    {
      code: 'pt-BR',
      nameKey: 'language.portuguese',
      flag: './assets/images/icons/icons8-brazil-48.png',
      flagAltKey: 'language.brazilFlag'
    }
  ];

  // Signal for current language
  private _currentLanguage = signal<SupportedLanguage>(this.getInitialLanguage());

  // Computed signal for current language option
  public currentLanguageOption = computed(() =>
    this.languages.find(lang => lang.code === this._currentLanguage()) || this.languages[0]
  );

  // Public getter for current language
  get currentLanguage(): SupportedLanguage {
    return this._currentLanguage();
  }

  constructor(private translateService: TranslateService) {
    this.initializeLanguage();
  }

  private getInitialLanguage(): SupportedLanguage {
    if (typeof localStorage === 'undefined') {
      return this.DEFAULT_LANGUAGE;
    }

    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as SupportedLanguage;
    if (savedLanguage && this.languages.some(lang => lang.code === savedLanguage)) {
      return savedLanguage;
    }
    return this.DEFAULT_LANGUAGE;
  }

  private initializeLanguage(): void {
    this.setLanguage(this._currentLanguage());
  }

  public setLanguage(language: SupportedLanguage): void {
    this._currentLanguage.set(language);
    this.translateService.use(language);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en';
    }
    this.saveLanguage(language);
  }

  public toggleLanguage(): void {
    const currentIndex = this.languages.findIndex(lang => lang.code === this._currentLanguage());
    const nextIndex = (currentIndex + 1) % this.languages.length;
    this.setLanguage(this.languages[nextIndex].code);
  }

  private saveLanguage(language: SupportedLanguage): void {
    if (typeof localStorage === 'undefined') return;

    localStorage.setItem(this.LANGUAGE_KEY, language);
  }

  public getLanguageByCode(code: SupportedLanguage): LanguageOption | undefined {
    return this.languages.find(lang => lang.code === code);
  }
}
