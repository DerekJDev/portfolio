import { Component, computed, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div
      (click)="toggleTheme()"
      class="relative w-16 h-8 rounded-3xl bg-slate-300 dark:bg-zinc-700 cursor-pointer transition-colors duration-200 flex items-center justify-between px-2"
      role="button"
      tabindex="0"
      [attr.title]="'theme.toggle' | translate"
      [attr.aria-label]="'theme.toggle' | translate"
      [attr.aria-pressed]="themeService.isDarkMode"
      (keydown.enter)="toggleTheme()"
      (keydown.space)="$event.preventDefault(); toggleTheme()"
    >
      <!-- Sun icon for light mode -->
      <i aria-hidden="true" class="lni lni-moon-half-right-5 text-sm transition-opacity duration-200 z-10 pointer-events-none"
         [class.opacity-100]="themeService.isDarkMode"
         [class.opacity-30]="!themeService.isDarkMode"></i>

      <!-- Moon icon for dark mode -->
      <i aria-hidden="true" class="lni lni-sun-1 text-sm transition-opacity duration-200 z-10 pointer-events-none"
         [class.opacity-100]="!themeService.isDarkMode"
         [class.opacity-30]="themeService.isDarkMode"></i>

      <!-- Background indicator -->
      <div
        aria-hidden="true"
        [class]="toggleClasses()"
        class="absolute top-1 rounded-full w-6 h-6 bg-white dark:bg-gray-800 transition-all duration-200 shadow-sm hover:scale-110 hover:shadow-md"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}

  // Computed property for toggle position classes
  toggleClasses = computed(() =>
    this.themeService.isDarkMode ? 'left-1' : 'right-1'
  );

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
