import { NgModule } from '@angular/core';
import { IfrSpinnerModule } from './components/ifr-spinner/ifr-spinner.module';
import { IfrJoinPipeModule } from './pipes/ifr-join-pipe/ifr-join-pipe.module';

@NgModule({
  declarations: [],
  imports: [IfrJoinPipeModule, IfrSpinnerModule],
  exports: [IfrJoinPipeModule, IfrSpinnerModule],
})
export class IfrLibraryModule {}
