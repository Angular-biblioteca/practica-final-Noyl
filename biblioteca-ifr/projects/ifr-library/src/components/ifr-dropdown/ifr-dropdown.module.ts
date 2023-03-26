import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IfrClickOutsideModule } from '../../directives/ifr-click-outside/ifr-click-outside.module';
import { IfrDropdownComponent } from './ifr-dropdown.component';

@NgModule({
  imports: [CommonModule, FormsModule, IfrClickOutsideModule],
  declarations: [IfrDropdownComponent],
  exports: [IfrDropdownComponent],
})
export class IfrDropdownModule {}
