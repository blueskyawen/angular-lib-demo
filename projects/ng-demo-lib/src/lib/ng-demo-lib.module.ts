import { NgModule } from '@angular/core';
import { NgDemoLibComponent } from './ng-demo-lib.component';
import { NdButtonComponent } from './nd-button/nd-button.component';

import { DataService, SfLibConfig, SfLibConfigService } from '../public_api';

@NgModule({
  declarations: [NgDemoLibComponent, NdButtonComponent],
  imports: [
  ],
  exports: [NgDemoLibComponent, NdButtonComponent]
})
export class NgDemoLibModule {
  static forRoot(config: SfLibConfig): ModuleWithProviders {
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
