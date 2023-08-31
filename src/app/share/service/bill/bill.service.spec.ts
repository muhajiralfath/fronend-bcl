import { TestBed } from '@angular/core/testing';

import { BillService } from './bill.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('BillService', () => {
  let service: BillService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillService]
    });
    service = TestBed.inject(BillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
