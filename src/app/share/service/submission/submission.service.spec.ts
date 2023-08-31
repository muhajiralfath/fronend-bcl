import { TestBed } from '@angular/core/testing';

import { SubmissionService } from './submission.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SubmissionService', () => {
  let service: SubmissionService;
  let httpMock:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SubmissionService);
    httpMock = TestBed.inject(HttpClientTestingModule)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
