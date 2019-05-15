import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDemoLibModule } from "ng-demo-lib";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { LoadingDemoComponent } from './loading-demo/loading-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    LoadingDemoComponent
  ],
  imports: [
    BrowserModule,
    NgDemoLibModule.forRoot({
      dataUrl: `https://www.blueskyawen.com:3200`
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
