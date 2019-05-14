import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDemoLibModule } from "ng-demo-lib";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDemoLibModule.forRoot({
      dataUrl: `https://jsonplaceholder.typicode.com/todos/1`
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
