import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { LazyMemoRoutingModule } from './lazy-memo-routing.module';
import { GoodbyeCambridgeComponent } from './goodbye-cambridge.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [GoodbyeCambridgeComponent],
  imports: [
    CommonModule, TranslateModule,
    LazyMemoRoutingModule
  ]
})
export class LazyMemoModule { }
