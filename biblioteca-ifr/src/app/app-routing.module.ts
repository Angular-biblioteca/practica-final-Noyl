import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';

const routes: Routes = [
  { path: 'ifr-join', component: ShowcaseIfrJoinPipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
