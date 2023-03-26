import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ifrClickOutside]',
})
export class IfrClickOutsideDirective {
  @Input() clickOutsideEnabled: boolean = true;
  @Input() clickOutsideDelay: number = 0;

  @Output() clickOutside: EventEmitter<MouseEvent>;

  constructor(private elementRef: ElementRef) {
    this.clickOutside = new EventEmitter();
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {
    if (this.clickOutsideEnabled) {
      const target = event.target as HTMLElement;

      if (target && !this.elementRef.nativeElement.contains(target)) {
        if (this.clickOutsideDelay) {
          setTimeout(() => {
            this.clickOutside.emit(event);
          }, this.clickOutsideDelay);
        }
        this.clickOutside.emit(event);
      }
    }
  }
}
