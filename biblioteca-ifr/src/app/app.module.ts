import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IfrLibraryModule } from 'projects/ifr-library/src/ifr-library.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseIfrJoinPipeComponent } from './showcase/showcase-ifr-join-pipe/showcase-ifr-join-pipe.component';
import { ShowcaseIfrSpinnerComponent } from './showcase/showcase-ifr-spinner/showcase-ifr-spinner.component';
import { ShowcaseIfrToastComponent } from './showcase/showcase-ifr-toast/showcase-ifr-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseIfrJoinPipeComponent,
    ShowcaseIfrSpinnerComponent,
    ShowcaseIfrToastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IfrLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
