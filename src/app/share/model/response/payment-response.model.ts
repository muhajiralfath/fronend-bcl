import {Umkm} from "../umkm.model";
import {Bill} from "../bill.model";

export interface PaymentResponse{
  paymentId:string,
  umkm:Umkm,
  bill:Bill,
  amount:number,
  snapUrl:string
}
