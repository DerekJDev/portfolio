import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, LanguageOption } from '../../core/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center space-x-1">
      <div
        *ngFor="let language of languageService.languages"
        (click)="selectLanguage(language.code)"
        [ngClass]="getLanguageClasses(language.code)"
        class="shadow-sm w-7 h-7 cursor-pointer hover:opacity-80 border-2 rounded-full transition-all duration-200"
        [title]="language.name"
      >
        <img
          [src]="language.flag"
          [alt]="language.flagAlt"
          class="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  `,
  styles: []
})
export class LanguageSwitcherComponent {
  constructor(public languageService: LanguageService) {}

  selectLanguage(languageCode: string): void {
    this.languageService.setLanguage(languageCode as any);
  }

  getLanguageClasses(languageCode: string): string {
    const isActive = this.languageService.currentLanguage === languageCode;
    return isActive
      ? 'border-blue'
      : 'border-transparent';
  }
}
