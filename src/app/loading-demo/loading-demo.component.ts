import { Component, OnInit } from '@angular/core';

/**
 加载中--LoadingDemoComponent
 */
@Component({
  selector: 'app-loading-demo',
  templateUrl: './loading-demo.component.html',
  styleUrls: ['./loading-demo.component.less']
})
export class LoadingDemoComponent implements OnInit {
  /**
   * @ignore
   */
  constructor() { }

  ngOnInit() {
  }

  /**
   * @example
   * This is a good example
   * initDemo(normal)
   *
   * @param {string} type  The type to process see {@link http://www.google.com}
   * @returns The processed target void
   */
  initDemo(type: string) : void {

  }

}
