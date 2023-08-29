import {Component} from '@angular/core';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewSubmissionReq} from "../../share/model/request/new-submission-request.model";
import Swal from "sweetalert2";
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {UmkmResponse} from "../../share/model/response/umkm-response.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent {
  umkmId: string = ""
  debtorId: string = ""
  token: string = ""

  constructor(private readonly submissionService: SubmissionService,
              private readonly umkmService: UmkmService,
              private readonly debtorService: DebtorService,
              private readonly router: Router
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.token = sessionStorage.getItem("token")
    this.getDebtorId()
    console.log(this.debtorId)
  }

  form: FormGroup = new FormGroup({
    loanAmount: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
    tenor: new FormControl("", Validators.required),
    agreeToTerms: new FormControl(false, [Validators.requiredTrue])
  })

  savaSubmission(): void {
    let newSubmission: NewSubmissionReq = {
      loanAmount: this.form.get("loanAmount")?.value,
      tenor: this.form.get("tenor")?.value,
      umkmId: this.umkmId
    }
    this.submissionService.addSubmission(newSubmission).subscribe({
      next: (): void => {
        Swal.fire("Add Submission Successfull")
      },
      error: () => {
        this.form.reset()
        Swal.fire("Please Input correct submission or add Umkm First")
      }
    })
  }

  getDebtorId(): void {
    this.debtorService.getByToken().subscribe({
      next: (debtorResponse: CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.debtorId = data.debtorId
        this.getUmkm()
      }
    })
  }

  getUmkm(): void {
    this.umkmService.getByDebtorId(this.debtorId).subscribe({
      next: (umkmResponse: CommonResponse<UmkmResponse>) => {
        let data: UmkmResponse = umkmResponse.data
        this.umkmId = data.umkmId
      },
      error: (error) => {
          Swal.fire("Add Umkm First")
          this.router.navigateByUrl("/debtor/submission-form")
      }
    })
  }


}
