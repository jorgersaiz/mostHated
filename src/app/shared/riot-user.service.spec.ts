import { TestBed } from '@angular/core/testing';

import { RiotUserService } from './riot-user.service';

describe('RiotUserService', () => {
  let service: RiotUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiotUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
