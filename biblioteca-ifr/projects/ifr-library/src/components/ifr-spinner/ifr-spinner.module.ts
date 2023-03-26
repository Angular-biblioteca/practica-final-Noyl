import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfrSpinnerComponent } from './ifr-spinner.component';
import { IfrSpinnerService } from './services/ifr-spinner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [IfrSpinnerComponent],
  exports: [IfrSpinnerComponent],
  providers: [IfrSpinnerService],
})
export class IfrSpinnerModule {}
