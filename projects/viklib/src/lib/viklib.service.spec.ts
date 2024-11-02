import { TestBed } from '@angular/core/testing';

import { ViklibService } from './viklib.service';

describe('ViklibService', () => {
  let service: ViklibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViklibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
