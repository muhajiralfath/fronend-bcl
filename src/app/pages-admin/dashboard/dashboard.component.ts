import { Component } from '@angular/core';
import {CommonResponse} from "../../share/model/response/common-response.model";
import {SubmissionResponse} from "../../share/model/response/submission-response.model";
import {MatTableDataSource} from "@angular/material/table";
import {SubmissionService} from "../../share/service/submission/submission.service";
import {BillService} from "../../share/service/bill/bill.service";
import {BillResponse} from "../../share/model/response/bill.response.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  submissionDataSource!: MatTableDataSource<any>
  billDataSource!: MatTableDataSource<any>
  constructor(
    private readonly submissionService: SubmissionService,
    private readonly billService: BillService
  ) {
  }

  ngOnInit(): void {
    this.getAllSubmission()
    this.getAllBill()

  }

  getAllSubmission(): void {
    this.submissionService.getAll(undefined, undefined, "0", "1000000").subscribe({
      next: (res: CommonResponse<SubmissionResponse[]>): void => {
        this.submissionDataSource = new MatTableDataSource(res.data)
      },
      error: console.log
    })
  }

  getAllBill(): void {
    this.billService.getAll("0", "1000000").subscribe({
      next: (res: CommonResponse<BillResponse[]>): void => {
        this.billDataSource = new MatTableDataSource(res.data)
      },
      error: console.log
    })
  }

  getTotalSubmissions(): number {
    return this.submissionDataSource.data.length;
  }

  getPendingSubmissions(): number {
    return this.submissionDataSource.data.filter(row => row.isApprove === null).length;
  }

  getApprovedSubmissions(): number {
    return this.submissionDataSource.data.filter(row => row.isApprove).length;
  }

  getRejectedSubmissions(): number {
    return this.submissionDataSource.data.filter(row => !row.isApprove).length;
  }

  getTotalBills(): number {
    return this.billDataSource.data.length;
  }

  getPaidBills(): number {
    return this.billDataSource.data.filter(row => row.isPaid).length;
  }

  getUnpaidBills(): number {
    return this.billDataSource.data.filter(row => !row.isPaid).length;
  }
}
