import { NgModule } from '@angular/core';
import { IfrSpinnerModule } from './components/ifr-spinner/ifr-spinner.module';
import { IfrToastModule } from './components/ifr-toast/ifr-toast.module';
import { IfrClickOutsideModule } from './directives/ifr-click-outside/ifr-click-outside.module';
import { IfrJoinPipeModule } from './pipes/ifr-join-pipe/ifr-join-pipe.module';
import { IfrConstantsService } from './services/ifr-constants.service';

@NgModule({
  declarations: [],
  imports: [
    IfrJoinPipeModule,
    IfrSpinnerModule,
    IfrToastModule,
    IfrClickOutsideModule,
  ],
  exports: [
    IfrJoinPipeModule,
    IfrSpinnerModule,
    IfrToastModule,
    IfrClickOutsideModule,
  ],
  providers: [IfrConstantsService],
})
export class IfrLibraryModule {}
