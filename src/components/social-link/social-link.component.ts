import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="url"
      [target]="target"
      [rel]="rel"
      class="social-link"
      [title]="platform + ' profile'"
    >
      <i [class]="icon"></i>
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
