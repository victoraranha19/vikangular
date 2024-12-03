import { TestBed } from '@angular/core/testing';

import { VikService } from './vik.service';

describe('VikService', () => {
  let service: VikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
