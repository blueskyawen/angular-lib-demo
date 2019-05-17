import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { AppService } from '../app.service';

@Component({
  selector: 'app-goodbye-cambridge',
  templateUrl: './goodbye-cambridge.component.html',
  styleUrls: ['./goodbye-cambridge.component.less']
})
export class GoodbyeCambridgeComponent implements OnInit {
  poetryTexts: any[] = [];
  lineNum: number = 28;
  constructor(private translate: TranslateService,
              private appService: AppService) {
    this.appService.setTitle(this.translate.instant('cambridge.title'));
  }

  ngOnInit() {
    let textItems: string[] = [];
    for(let index=0;index < this.lineNum;index++) {
      textItems.push(this.translate.instant("cambridge.text" + (index + 1)));
      if((index + 1) %4 === 0) {
        this.poetryTexts.push({text: textItems});
        textItems = [];
      }
    }
  }

}
