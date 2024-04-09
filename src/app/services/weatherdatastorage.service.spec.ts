import { TestBed } from '@angular/core/testing';

import { WeatherdatastorageService } from './weatherdatastorage.service';

describe('WeatherdatastorageService', () => {
  let service: WeatherdatastorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdatastorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
