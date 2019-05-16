import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-lib-demo';
  lang: string = '';
  langTitle: string = '英文';
  constructor(private translate: TranslateService) {
    if(!localStorage.getItem('app_lang')) {
      this.lang = 'zh-cn';
      localStorage.setItem('app_lang', this.lang);
    } else {
      this.lang = localStorage.getItem('app_lang');
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }

  swithLang() {
    if(this.lang === 'zh-cn') {
      this.lang = 'en';
    } else {
      this.lang = 'zh-cn';
    }
    localStorage.setItem('app_lang', this.lang);
    location.reload();
  }
}
