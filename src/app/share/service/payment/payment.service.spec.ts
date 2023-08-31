import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('PaymentService', () => {
  let service: PaymentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentService]
    });
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
