import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IfrLibraryModule } from 'ifr-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IfrLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
