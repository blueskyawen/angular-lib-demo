import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDemoLibComponent } from './ng-demo-lib.component';

describe('NgDemoLibComponent', () => {
  let component: NgDemoLibComponent;
  let fixture: ComponentFixture<NgDemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
