import {Umkm} from "./umkm.model";

export interface Bill{
  debt:number,
  interest:number,
  dueDate:any,
  isPaid:boolean,
  isVerify:boolean,
  provision:any,
  umkm:Umkm,
  payment:any
}
