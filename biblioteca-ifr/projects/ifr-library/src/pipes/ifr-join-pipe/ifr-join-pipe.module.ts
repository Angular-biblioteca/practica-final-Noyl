import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfrJoinPipe } from './ifr-join.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [IfrJoinPipe],
  exports: [IfrJoinPipe],
})
export class IfrJoinPipeModule {}
