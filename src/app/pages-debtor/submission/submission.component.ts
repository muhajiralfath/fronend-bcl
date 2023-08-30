import {Component} from '@angular/core';
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {SubmissionService} from "../../share/service/submission/submission.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SubmissionResponse} from "../../share/model/response/submission-response.model";


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  debtorId: string = ""
  submissionList: SubmissionResponse[] = []

  constructor(private readonly debtorService: DebtorService,
              private readonly submissionService: SubmissionService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.getDebtorId()
  }

  getSubmissionByDebtorId():void {
    this.submissionService.getSubmissionByDebtorId(this.debtorId).subscribe({
      next: (result) => {
        this.submissionList = result.data
      },
      error: (e) => {
        console.log(e.e())
      }
    })
  }

  getDebtorId(): void {
    this.debtorService.getByToken().subscribe({
      next: (debtorResponse: CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.debtorId = data.debtorId
        this.getSubmissionByDebtorId()
      },
      error: () => {
        Swal.fire("Don't have submission , add first")
        this.router.navigateByUrl("/debtor/submissions")
      }
    })
  }
}
