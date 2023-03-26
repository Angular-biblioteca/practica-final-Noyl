import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfrToastComponent } from './ifr-toast.component';
import { IfrToastService } from './services/ifr-toast.service';

@NgModule({
  imports: [CommonModule],
  declarations: [IfrToastComponent],
  exports: [IfrToastComponent],
  providers: [IfrToastService]
})
export class IfrToastModule {}
