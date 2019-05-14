import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'nd-ng-demo-lib',
  template: `
    <p>
      ng-demo-lib works!
    </p>
  `,
  styles: []
})
export class NgDemoLibComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(console.log);
  }

}
