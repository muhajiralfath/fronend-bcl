import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionFormComponent } from './submission-form.component';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";

describe('SubmissionFormComponent', () => {
  let component: SubmissionFormComponent;
  let fixture: ComponentFixture<SubmissionFormComponent>;
  let submissionService: SubmissionService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [SubmissionFormComponent],
      providers: [SubmissionService]
    });
    fixture = TestBed.createComponent(SubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
