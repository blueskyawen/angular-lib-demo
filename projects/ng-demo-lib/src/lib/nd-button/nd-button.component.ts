import { Component, OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nd-button',
  templateUrl: './nd-button.component.html',
  styleUrls: ['./nd-button.component.css']
})
export class NdButtonComponent implements OnInit {
  @Input() type : string = 'normal';
  @Input() style : string = 'min';
  @Input() disabled : boolean = false;
  @Input() loading : boolean = false;
  @Input() dnymic : boolean = false;
  @Input() suffix : boolean = false;
  @Input() height : string = 'auto';
  @Input() width : string = 'auto';
  spinClasses : any = {};
  buttonStyles : any = {};

  constructor() {
  }

  ngOnInit() {
    this.spinClasses = {'button-normal': this.type === 'normal','button-add':this.type === 'add',
      'button-major':this.type === 'major','button-cancel':this.type === 'cancel',
      'font-big':this.style === 'max','font-small':this.style === 'min','disabled':this.disabled,
      'dynamic3':this.dnymic};
    if(this.style === 'max') {
      this.buttonStyles = {'width': this.width,'height': '54px'};
    }
    if(this.style === 'min') {
      this.buttonStyles = {'width': this.width,'height': '36px'};
    }
    if(this.style === 'custom')  {
      this.buttonStyles = {'width': this.width,'height': this.height};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.spinClasses = {'button-normal': this.type === 'normal','button-add':this.type === 'add',
      'button-major':this.type === 'major','button-cancel':this.type === 'cancel',
      'font-big':this.style === 'max','font-small':this.style === 'min','disabled':this.disabled,
      'dynamic3':this.dnymic};
  }
}
