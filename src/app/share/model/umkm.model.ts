import {Debtor} from "./debtor.model";

export interface Umkm{
  name:string,
  noSiup:string,
  address:string,
  capital:number,
  umkmType:string,
  bankAccount:string,
  debtor:Debtor
}
