import { Component, EffectRef, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReferenceService } from 'src/core/reference-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-portfolio';
  enableDarkMode = false;
  currentLanguage = 'en-US';
  autoTheme = new FormControl(false);
  darkModeEffect: any;

  constructor(private refService: ReferenceService) {}

  ngOnInit(): void {
    this.checkTheme();
    this.checkLanguage();
  }

  ngOnDestroy(): void {
    this.darkModeEffect?.destroy();
  }

  checkTheme() {
    const cachedSetting = this.refService.getAppSettings('enableDarkMode');
    const cachedAutoThemeSetting = this.refService.getAppSettings('autoTheme');
    this.autoTheme.setValue(cachedAutoThemeSetting ? cachedAutoThemeSetting : false)

    if (this.autoTheme.value) {
      // Set up theme detection
      this.refService.isDarkMode();
      this.darkModeEffect = effect(() => {
        this.enableDarkMode = this.refService.machineDarkMode();
      });
    } else {
      // Go off of last saved theme selection
      this.enableDarkMode = cachedSetting ? cachedSetting : false;
    }

  }

  checkLanguage() {
    const cachedSetting = this.refService.getAppSettings('language');
    if (cachedSetting) {
      this.refService.setLanguage(cachedSetting);
      this.currentLanguage = cachedSetting;
    }
  }

  toggleTheme() {
    this.enableDarkMode = !this.enableDarkMode;
    this.refService.setAppSettings('enableDarkMode', this.enableDarkMode);
  }

  changeLanguage(language: 'en-US' | 'pt-BR') {
    this.refService.setLanguage(language);
    this.currentLanguage = language;
  }


}
