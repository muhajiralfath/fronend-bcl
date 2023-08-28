export interface BillResponseModel {
  id : string
  provisionId : string
  umkmName : string
  debtorName : string
  debt : number
  interest : number
  dueDate : Date
  isPaid : boolean
  isVerify : boolean
}
