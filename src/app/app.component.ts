import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-lib-demo';
  lang: string = '';
  langTitle: string = '英文';
  lazyDemoName: string = '';
  constructor(private translate: TranslateService) {
    if(!localStorage.getItem('app_lang')) {
      this.lang = 'zh-cn';
      localStorage.setItem('app_lang', this.lang);
    } else {
      this.lang = localStorage.getItem('app_lang');
    }
    this.langTitle = this.lang === 'zh-cn' ? '英文' : '中文';
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.lazyDemoName = this.translate.instant('lazyDemo');
    },50);
  }

  swithLang() {
    if(this.lang === 'zh-cn') {
      this.lang = 'en';
    } else {
      this.lang = 'zh-cn';
    }
    this.langTitle = this.lang === 'zh-cn' ? '英文' : '中文';
    localStorage.setItem('app_lang', this.lang);
    location.reload();
  }
}
