export interface SubmissionResponse {
  id: string,
  debtorId: string,
  umkmId: string,
  umkmName: string,
  date: Date,
  loanAmount: number,
  tenor: number,
  debt: number,
  montlyDebt: number,
  isApprove: boolean
}


// private String id;
// private String debtorId;
// private String umkmId;
// private String umkmName;
// @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
// private LocalDateTime date;
// private Long loanAmount;
// private Integer tenor;
// private Long debt;
// private Long monthlyDebt;
// private Boolean isApprove;

