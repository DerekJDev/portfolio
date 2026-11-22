import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';

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
  impactStats = ['years', 'clients', 'load', 'velocity', 'uptime'];

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

  @HostListener('document:keydown.escape')
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  /** Splits "Label: body" so the label can be bolded for skimming. */
  splitAchievement(text: string): { label: string; body: string } {
    const i = text.indexOf(': ');
    return i > 0 && i < 60 ? { label: text.slice(0, i), body: text.slice(i + 2) } : { label: '', body: text };
  }

  linkLabelKey(icon: string): string {
    return icon.includes('github') ? 'projects.links.source' : 'projects.links.live';
  }

  toggleAchievements(index: number): void {
    this.expandedAchievements[index] = !this.expandedAchievements[index];
  }

  isAchievementsExpanded(index: number): boolean {
    return this.expandedAchievements[index] || false;
  }
}
