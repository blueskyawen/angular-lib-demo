import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nd-loading',
  templateUrl: './nd-loading.component.html',
  styleUrls: ['./nd-loading.component.css']
})
export class NdLoadingComponent implements OnInit {
  @Input() type : string = 'normal';
  @Input() loadSize : string = 'max';
  spinClasses : any = {};

  constructor() {
  }

  ngOnInit() {
    this.spinClasses = {'max-loading': this.loadSize === 'max','medium-loading': this.loadSize === 'medium',
      'min-loading': this.loadSize === 'min'};
  }
}
