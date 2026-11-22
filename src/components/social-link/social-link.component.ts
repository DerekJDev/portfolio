import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <a
      [href]="url"
      [target]="target"
      [rel]="rel"
      class="social-link"
      [attr.title]="'social.profile' | translate:{ platform: platform }"
      [attr.aria-label]="'social.profile' | translate:{ platform: platform }"
    >
      <i [class]="icon" aria-hidden="true"></i>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input() platform!: string;
  @Input() url!: string;
  @Input() icon!: string;
  @Input() target: string = '_blank';
  @Input() rel: string = 'noopener noreferrer';
}
