import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseClickoutsideComponent } from './showcase/showcase-clickoutside/showcase-clickoutside.component';
import { ShowcaseIfrDropdownComponent } from './showcase/showcase-ifr-dropdown/showcase-ifr-dropdown.component';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';
import { ShowcaseIfrLoadIframeComponent } from './showcase/showcase-ifr-load-iframe/showcase-ifr-load-iframe.component';
import { ShowcaseIfrSpinnerComponent } from './showcase/showcase-ifr-spinner/showcase-ifr-spinner.component';
import { ShowcaseIfrToastComponent } from './showcase/showcase-ifr-toast/showcase-ifr-toast.component';

const routes: Routes = [
  { path: 'ifr-join', component: ShowcaseIfrJoinPipeComponent },
  { path: 'ifr-spinner', component: ShowcaseIfrSpinnerComponent },
  { path: 'ifr-toast', component: ShowcaseIfrToastComponent },
  { path: 'ifr-click-outside', component: ShowcaseClickoutsideComponent },
  { path: 'ifr-dropdown', component: ShowcaseIfrDropdownComponent },
  { path: 'ifr-load-iframe', component: ShowcaseIfrLoadIframeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
