import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface SfLibConfig {
  dataUrl: string;
}

export const SfLibConfigService = new InjectionToken<SfLibConfig>(
    "TestLibConfig"
);


@Injectable({
  providedIn: 'root'
})
export class DataService {
  _config : SfLibConfig;

  constructor(@Inject(SfLibConfigService) config : SfLibConfig,
              private http: HttpClient) {
      this._config = config;
  }

  getData() {
    return this.http.get(this._config.dataUrl);
  }
}
