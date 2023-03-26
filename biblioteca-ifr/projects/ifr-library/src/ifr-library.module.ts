import { NgModule } from '@angular/core';
import { IfrSpinnerModule } from './components/ifr-spinner/ifr-spinner.module';
import { IfrToastModule } from './components/ifr-toast/ifr-toast.module';
import { IfrJoinPipeModule } from './pipes/ifr-join-pipe/ifr-join-pipe.module';
import { IfrConstantsService } from './services/ifr-constants.service';

@NgModule({
  declarations: [],
  imports: [IfrJoinPipeModule, IfrSpinnerModule, IfrToastModule],
  exports: [IfrJoinPipeModule, IfrSpinnerModule, IfrToastModule],
  providers: [IfrConstantsService]
})
export class IfrLibraryModule {}
