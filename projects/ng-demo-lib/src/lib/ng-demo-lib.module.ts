import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule}      from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { NgDemoLibComponent } from './ng-demo-lib.component';
import { NdButtonComponent } from './nd-button/nd-button.component';

import { DataService, SfLibConfig, SfLibConfigService } from './data.service';
import { NdLoadingComponent } from './nd-loading/nd-loading.component';

@NgModule({
  declarations: [NgDemoLibComponent, NdButtonComponent, NdLoadingComponent],
  imports: [
    HttpClientModule, CommonModule
  ],
  exports: [NgDemoLibComponent, NdButtonComponent, NdLoadingComponent]
})
export class NgDemoLibModule {
  static forRoot(config ?: SfLibConfig): ModuleWithProviders {
    return {
      ngModule: NgDemoLibModule,
      providers: [
        {
          provide: SfLibConfigService,
          useValue: config
        }
      ]
    };
  }
}
//public
