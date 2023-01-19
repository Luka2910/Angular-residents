import { TestBed } from '@angular/core/testing';

import { StanariService } from './stanari.service';

describe('StanariService', () => {
  let service: StanariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StanariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
