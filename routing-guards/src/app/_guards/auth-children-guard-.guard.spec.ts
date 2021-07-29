import { TestBed } from '@angular/core/testing';

import { AuthChildrenGuardGuard } from './auth-children-guard-.guard';

describe('AuthChildrenGuardGuard', () => {
  let guard: AuthChildrenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthChildrenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
