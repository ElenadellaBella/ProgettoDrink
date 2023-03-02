import { TestBed } from '@angular/core/testing';

import { TinApiService } from './tin-api.service';

describe('TinApiService', () => {
  let service: TinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
