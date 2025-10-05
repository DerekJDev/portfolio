import { Component, computed, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, LanguageOption } from '../../core/language.service';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule, ClickOutsideDirective],
  template: `
    <div class="relative">
      <button
        #dropdownButton
        (click)="toggleDropdown()"
        class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        [title]="'language.switch' | translate"
      >
        <img
          [src]="currentLanguageOption().flag"
          [alt]="currentLanguageOption().flagAlt"
          class="w-5 h-5 rounded-sm"
        />
        <span class="text-sm font-medium">
          {{ currentLanguageOption().name }}
        </span>
        <i class="lni lni-chevron-down text-xs text-gray-500 dark:text-gray-400"></i>
      </button>

      <!-- Language Dropdown -->
      <div
        class="language-dropdown"
        [class.hidden]="!showDropdown"
        (clickOutside)="showDropdown = false"
        [clickOutsideIgnore]="dropdownButton"
      >
        @for (language of languageService.languages; track language.code) {
          <div
            (click)="selectLanguage(language.code)"
            class="language-option"
            [class.selected]="language.code === languageService.currentLanguage"
          >
            <img
              [src]="language.flag"
              [alt]="language.flagAlt"
              class="w-5 h-5 rounded-sm"
            />
            <span class="text-sm font-medium">
              {{ language.name }}
            </span>
            @if (language.code === languageService.currentLanguage) {
              <i class="lni lni-check text-blue-500 dark:text-blue-400 ml-auto"></i>
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  @ViewChild('dropdownButton') dropdownButton!: ElementRef<HTMLButtonElement>;
  showDropdown = false;

  constructor(public languageService: LanguageService) {}

  // Computed property for current language option
  currentLanguageOption = computed(() => this.languageService.currentLanguageOption());

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectLanguage(languageCode: LanguageOption['code']): void {
    this.languageService.setLanguage(languageCode);
    this.showDropdown = false;
  }
}
