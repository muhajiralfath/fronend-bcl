import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PaymentService} from "../../share/service/payment/payment.service";
import {RouterTestingModule} from "@angular/router/testing";
import {RupiahPipe} from "../../share/pipe/rupiah.pipe";

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PaymentComponent, RupiahPipe],
      providers: [PaymentService]
    });
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
