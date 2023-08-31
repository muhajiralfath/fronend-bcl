import { TestBed } from '@angular/core/testing';

import { UmkmService } from './umkm.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UmkmService', () => {
  let service: UmkmService;
  let httpMock:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UmkmService);
    httpMock = TestBed.inject(HttpClientTestingModule)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
