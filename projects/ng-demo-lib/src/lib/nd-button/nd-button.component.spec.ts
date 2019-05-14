import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdButtonComponent } from './nd-button.component';

describe('NdButtonComponent', () => {
  let component: NdButtonComponent;
  let fixture: ComponentFixture<NdButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
