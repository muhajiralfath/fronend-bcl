import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BillService} from "../../share/service/bill/bill.service";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {RupiahPipe} from "../../share/pipe/rupiah.pipe";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, RupiahPipe],
      imports: [HttpClientTestingModule],
      providers: [BillService, DebtorService]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpClientTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
