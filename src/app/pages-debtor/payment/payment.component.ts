import { Component } from '@angular/core';
import {PaymentService} from "../../share/service/payment/payment.service";
import {PaymentRequest} from "../../share/model/request/payment-request.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private readonly service: PaymentService) {}

  billId: string = '123-abc-bill';
  dueDate: Date = new Date('2023-08-17');
  amount: string = 'Rp 5.000.000';
  umkmId: string = '123-abc-umkm';

  request: PaymentRequest = {
    billId: this.billId,
    umkmId: this.umkmId
  }

  createPayment() {
    this.service.create(this.request).subscribe({
        next: value => {
        }
    })
  }
}
