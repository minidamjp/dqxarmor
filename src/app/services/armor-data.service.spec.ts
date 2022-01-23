import { TestBed } from '@angular/core/testing';

import { ArmorDataService } from './armor-data.service';

describe('ArmorDataService', () => {
  let service: ArmorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
