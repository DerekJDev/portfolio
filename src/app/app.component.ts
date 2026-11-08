import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../core/theme.service';
import { LanguageService } from '../core/language.service';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from '../components/language-switcher/language-switcher.component';
import { SocialLinkComponent } from '../components/social-link/social-link.component';
import * as utils from '../core/utils';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
    SocialLinkComponent
],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css'
})
export class App implements OnInit {
  isMobileMenuOpen = false;
  utils = utils;
  expandedAchievements: { [key: number]: boolean } = {};

  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.isDarkMode);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleAchievements(index: number): void {
    this.expandedAchievements[index] = !this.expandedAchievements[index];
  }

  isAchievementsExpanded(index: number): boolean {
    return this.expandedAchievements[index] || false;
  }
}
