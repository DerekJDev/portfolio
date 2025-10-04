import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      (click)="toggleTheme()"
      class="relative w-14 h-8 rounded-3xl bg-slate-300 dark:bg-zinc-700 cursor-pointer transition-colors duration-200 hover:opacity-80"
    >
      <div
        [class]="toggleClasses()"
        class="absolute top-1 rounded-full w-6 h-6 bg-blue-500 transition-all duration-200"
      ></div>
    </div>
  `,
  styles: []
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeService) {}

  // Computed property for toggle position classes
  toggleClasses = computed(() =>
    this.themeService.isDarkMode ? 'left-1' : 'right-1'
  );

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
