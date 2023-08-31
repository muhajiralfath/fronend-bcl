import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SubmissionService} from "../../share/service/submission/submission.service";
import {BillService} from "../../share/service/bill/bill.service";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {UmkmService} from "../../share/service/umkm/umkm.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports:[HttpClientTestingModule],
      providers: [SubmissionService, BillService, DebtorService, UmkmService]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpClientTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
