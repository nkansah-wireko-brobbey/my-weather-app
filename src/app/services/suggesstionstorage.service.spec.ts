import { TestBed } from '@angular/core/testing';

import { SuggesstionstorageService } from './suggesstionstorage.service';

describe('SuggesstionstorageService', () => {
  let service: SuggesstionstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggesstionstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
