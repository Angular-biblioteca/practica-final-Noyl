import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfrLoadIframeDirective } from './ifr-load-iframe.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IfrLoadIframeDirective],
  exports: [IfrLoadIframeDirective],
})
export class IfrLoadIframeModule {}
