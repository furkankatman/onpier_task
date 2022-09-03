import { TestBed } from '@angular/core/testing';

import { CarGuardGuard } from './car-guard.guard';

describe('CarGuardGuard', () => {
  let guard: CarGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
