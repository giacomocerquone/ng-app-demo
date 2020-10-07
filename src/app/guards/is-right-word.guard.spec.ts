import { TestBed } from '@angular/core/testing';

import { IsRightWordGuard } from './is-right-word.guard';

describe('IsRightWordGuard', () => {
  let guard: IsRightWordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsRightWordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
