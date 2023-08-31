import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListComponent } from './submission-list.component';
import {AuthService} from "../../share/service/auth/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {SubmissionService} from "../../share/service/submission/submission.service";

describe('SubmissionListComponent', () => {
  let component: SubmissionListComponent;
  let fixture: ComponentFixture<SubmissionListComponent>;
  let authService: AuthService;
  let submissionService: SubmissionService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatFormFieldModule, MatPaginatorModule, MatTableModule],
      declarations: [SubmissionListComponent],
      providers: [AuthService, SubmissionService]
    });
    fixture = TestBed.createComponent(SubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
