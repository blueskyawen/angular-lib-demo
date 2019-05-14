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

  constructor(@Inject(SfLibConfigService) config : SfLibConfig,
              private http: HttpClient) { }

  getData() {
    return this.http.get(this.config.dataUrl);
  }
}
