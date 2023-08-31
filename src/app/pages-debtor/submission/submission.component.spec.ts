import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {SubmissionService} from "../../share/service/submission/submission.service";

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionComponent],
      imports: [HttpClientTestingModule],
      providers: [DebtorService, SubmissionService]
    });
    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
