import {Component} from '@angular/core';
import {BillResponse} from "../../share/model/response/bill.response.model";
import {BillService} from "../../share/service/bill/bill.service";
import {MatTableDataSource} from "@angular/material/table";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {DebtorService} from "../../share/service/debtor/debtor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  billList: BillResponse[] = []
  totalDebt: number = 0
  debtorName: string = ""
  mothDebth: number = 0

  constructor(private readonly billService: BillService,
              private readonly debtorService: DebtorService) {
  }

  ngOnInit(): void {
    this.debtorService.getByToken().subscribe({
      next: (debtorResponse:CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.debtorName = data.name
        this.getByDebtorId(data.debtorId);
      }
    });
  }
  getByDebtorId(debtorId:string):void {
    this.billService.getByDebtorId(debtorId).subscribe({
      next: res => {
        this.billList =res.data
        for (let billRespons of this.billList) {
          if (!billRespons.isPaid){
            this.totalDebt += billRespons.debt
            this.mothDebth++
          }
        }
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
