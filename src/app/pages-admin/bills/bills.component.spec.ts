import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsComponent } from './bills.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BillService} from "../../share/service/bill/bill.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

describe('BillsComponent', () => {
  let component: BillsComponent;
  let fixture: ComponentFixture<BillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillsComponent],
      imports: [HttpClientTestingModule],
      providers: [BillService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(BillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
