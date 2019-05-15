import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdLoadingComponent } from './nd-loading.component';

describe('NdLoadingComponent', () => {
  let component: NdLoadingComponent;
  let fixture: ComponentFixture<NdLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
