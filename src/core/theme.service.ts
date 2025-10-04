import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  // Signal for theme state
  private _isDarkMode = signal<boolean>(this.getInitialTheme());

  // Computed signal for theme class
  public themeClass = computed(() => this._isDarkMode() ? this.DARK_THEME : this.LIGHT_THEME);

  // Public getter for isDarkMode
  get isDarkMode(): boolean {
    return this._isDarkMode();
  }

  constructor() {
    this.initializeTheme();
  }

  private getInitialTheme(): boolean {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === this.DARK_THEME;
    }

    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private initializeTheme(): void {
    this.applyTheme(this._isDarkMode());
  }

  public toggleTheme(): void {
    const newTheme = !this._isDarkMode();
    this._isDarkMode.set(newTheme);
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
  }

  public setTheme(isDark: boolean): void {
    this._isDarkMode.set(isDark);
    this.applyTheme(isDark);
    this.saveTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add(this.DARK_THEME);
    } else {
      html.classList.remove(this.DARK_THEME);
    }
  }

  private saveTheme(isDark: boolean): void {
    const theme = isDark ? this.DARK_THEME : this.LIGHT_THEME;
    localStorage.setItem(this.THEME_KEY, theme);
  }
}
