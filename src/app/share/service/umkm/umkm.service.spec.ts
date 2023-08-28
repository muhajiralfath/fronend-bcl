import { TestBed } from '@angular/core/testing';

import { UmkmService } from './umkm.service';

describe('UmkmService', () => {
  let service: UmkmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmkmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
