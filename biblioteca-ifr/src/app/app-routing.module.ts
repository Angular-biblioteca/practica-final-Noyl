import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';
import { ShowcaseIfrSpinnerComponent } from './showcase/showcase-ifr-spinner/showcase-ifr-spinner.component';
import { ShowcaseIfrToastComponent } from './showcase/showcase-ifr-toast/showcase-ifr-toast.component';

const routes: Routes = [
  { path: 'ifr-join', component: ShowcaseIfrJoinPipeComponent },
  { path: 'ifr-spinner', component: ShowcaseIfrSpinnerComponent },
  { path: 'ifr-toast', component: ShowcaseIfrToastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
