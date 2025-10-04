import { Component, EffectRef, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReferenceService } from 'src/core/reference-service.service';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from '../components/language-switcher/language-switcher.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-portfolio';

  constructor(private refService: ReferenceService) {}

  ngOnInit(): void {
    // Language initialization is now handled by the LanguageService
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }
}
