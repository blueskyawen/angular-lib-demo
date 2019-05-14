import { TestBed } from '@angular/core/testing';

import { NgDemoLibService } from './ng-demo-lib.service';

describe('NgDemoLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDemoLibService = TestBed.get(NgDemoLibService);
    expect(service).toBeTruthy();
  });
});
