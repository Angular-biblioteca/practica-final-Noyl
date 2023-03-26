import { NgModule } from '@angular/core';
import { IfrDropdownModule } from './components/ifr-dropdown/ifr-dropdown.module';
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
    IfrDropdownModule,
  ],
  exports: [
    IfrJoinPipeModule,
    IfrSpinnerModule,
    IfrToastModule,
    IfrClickOutsideModule,
    IfrDropdownModule,
  ],
  providers: [IfrConstantsService],
})
export class IfrLibraryModule {}
