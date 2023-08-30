export interface BillResponse {
  id : string
  provisionId : string
  umkmId: string
  umkmName : string
  debtorName : string
  debt : number
  interest : number
  dueDate : Date
  isPaid : boolean
  isVerify : boolean
}
