import { Component } from '@angular/core';
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-debtor-detail',
  templateUrl: './view-debtor-detail.component.html',
  styleUrls: ['./view-debtor-detail.component.css']
})
export class ViewDebtorDetailComponent {
  newDebtorResponse:DebtorResponse = {
    debtorId:"",
    nik:"",
    npwp:"",
    name:"",
    handphone:"",
    birthPlace:"",
    birthDate:new Date(),
    gender:"",
    status:"",
    address:"",
    job:"",
    email:""
  }
  constructor(
    private readonly debtorService:DebtorService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (param) => {
        if (param["id"]) {
          this.loadProfil(param["id"]);
        }
      }
    });
  }
  loadProfil(id: string) {
    this.debtorService.getById(id).subscribe({
      next: (debtorResponse: CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.newDebtorResponse = debtorResponse.data;
      }
    });
  }
}
