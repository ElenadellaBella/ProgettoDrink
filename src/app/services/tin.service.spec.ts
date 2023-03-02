import { TestBed } from '@angular/core/testing';

import { TinServiceService } from './tin.service';

describe('TinServiceService', () => {
  let service: TinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
