import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() clickOutsideIgnore?: HTMLElement | HTMLElement[];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    console.log('onClick', target, this.elementRef.nativeElement);

    // Check if clicked inside the main element
    const clickedInside = this.elementRef.nativeElement.contains(target);

    // Check if clicked inside any ignored elements
    let clickedInsideIgnored = false;
    if (this.clickOutsideIgnore) {
      const ignoredElements = Array.isArray(this.clickOutsideIgnore)
        ? this.clickOutsideIgnore
        : [this.clickOutsideIgnore];

      clickedInsideIgnored = ignoredElements.some(element =>
        element && element.contains(target)
      );
    }

    if (!clickedInside && !clickedInsideIgnored) {
      this.clickOutside.emit();
    }
  }
}
