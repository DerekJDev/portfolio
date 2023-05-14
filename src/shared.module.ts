import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const AngularModules = [CommonModule, BrowserModule];

import { SocialLinkComponent } from './components/social-link/social-link.component';

const MyStandaloneComponents = [SocialLinkComponent];

@NgModule({
  declarations: [],
  imports: [
    AngularModules,
    MyStandaloneComponents
  ],
  exports: [
    AngularModules,
    MyStandaloneComponents
  ]
})
export class SharedModule { }
