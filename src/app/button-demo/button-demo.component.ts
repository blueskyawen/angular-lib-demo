import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.less']
})
export class ButtonDemoComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.setTitle('Angular 按钮组');
  }

  ngOnInit() {
  }

}
