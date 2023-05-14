import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var window: any;

class AppSettings {
  enableDarkMode: boolean = false;
  language: 'en-us' | 'pt-br' = 'en-us';
}

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  machineDarkMode = signal(false);

  constructor(private translateService: TranslateService) { }

  getAppSettings(setting?: string) {
    const settings = localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings') as any) : null;
    if (settings) {
      if (!setting) {
        return settings;
      } else {
        return settings[setting] ? settings[setting] : null;
      }
    }
    return null;
  }

  setAppSettings(settingName: string, settingValue: any) {
    const settings = localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings') as any) : null;
    let newSettings: any = {};
    if (settings) {
      newSettings = settings;
    }
    newSettings[settingName] = settingValue;

    localStorage.setItem('settings', JSON.stringify(newSettings));
  }

  isDarkMode() {
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.machineDarkMode.update((val) => val = matched);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: any) => {
      this.machineDarkMode.update((val) => val = event.matches);
    });
  }

  setLanguage(language: 'en-US' | 'pt-BR') {
    this.setAppSettings('language', language);
    this.translateService.use(language);
  }
}
