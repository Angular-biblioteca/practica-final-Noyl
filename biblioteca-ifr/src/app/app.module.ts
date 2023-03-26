import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IfrLibraryModule } from 'projects/ifr-library/src/ifr-library.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';
import { ShowcaseIfrSpinnerComponent } from './showcase/showcase-ifr-spinner/showcase-ifr-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseIfrJoinPipeComponent,
    ShowcaseIfrSpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IfrLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
