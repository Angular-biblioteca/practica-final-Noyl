import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ifrLoadIframe]',
})
export class IfrLoadIframeDirective {
  @Output() loadIframe: EventEmitter<boolean>;

  constructor(private el: ElementRef) {
    this.loadIframe = new EventEmitter<boolean>();
  }

  @HostListener('load')
  public onLoad() {
    if (
      !this.el.nativeElement.contentDocument ||
      this.el.nativeElement.contentDocument.body.children.length > 0
    ) {
      this.loadIframe.emit(true);
    }
  }
}
