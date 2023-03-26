import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfrClickOutsideDirective } from './ifr-click-outside.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IfrClickOutsideDirective],
  exports: [IfrClickOutsideDirective],
})
export class IfrClickOutsideModule {}
