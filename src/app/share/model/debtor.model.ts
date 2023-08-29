import {Umkm} from "./umkm.model";

export interface Debtor{
  nik:string,
  npwp:string,
  name:string,
  handphone:string,
  birthPlace:string,
  birthDate:Date,
  gender:string,
  status:string,
  address:string,
  job:string,
  umkm:Umkm,
  userCredential:any
}
