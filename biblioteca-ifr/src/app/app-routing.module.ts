import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseClickoutsideComponent } from './showcase/showcase-clickoutside/showcase-clickoutside.component';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';
import { ShowcaseIfrSpinnerComponent } from './showcase/showcase-ifr-spinner/showcase-ifr-spinner.component';
import { ShowcaseIfrToastComponent } from './showcase/showcase-ifr-toast/showcase-ifr-toast.component';

const routes: Routes = [
  { path: 'ifr-join', component: ShowcaseIfrJoinPipeComponent },
  { path: 'ifr-spinner', component: ShowcaseIfrSpinnerComponent },
  { path: 'ifr-toast', component: ShowcaseIfrToastComponent },
  { path: 'ifr-click-outside', component: ShowcaseClickoutsideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
