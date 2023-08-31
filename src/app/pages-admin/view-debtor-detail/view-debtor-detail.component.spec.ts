import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDebtorDetailComponent } from './view-debtor-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ViewDebtorDetailComponent', () => {
  let component: ViewDebtorDetailComponent;
  let fixture: ComponentFixture<ViewDebtorDetailComponent>;
  let httpMock:HttpClientTestingModule;
  // let activatedRoute:ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDebtorDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DebtorService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ViewDebtorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpClientTestingModule);
    // activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
