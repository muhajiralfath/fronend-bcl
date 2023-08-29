export interface SubmissionResponse {
  id: string
  debtorId: string,
  umkmId: string,
  umkmName: string,
  date: Date,
  loanAmount: number,
  tenor: number,
  debt: number,
  monthlyDebt: number,
  isApprove: boolean
}
