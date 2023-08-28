import { Component } from '@angular/core';
import {DebtorService} from "../../service/Debtor/debtor.service";
import {CommonResponse} from "../../model/response/common-response.model";
import {DebtorResponse} from "../../model/response/debtor-response.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-debtor',
  templateUrl: './navbar-debtor.component.html',
  styleUrls: ['./navbar-debtor.component.css']
})
export class NavbarDebtorComponent {
  email:string = "user@email.com";
  constructor(
    private readonly debtorService:DebtorService
  ) {}
  ngOnInit(){
    this.loadProfil();
  }
  loadProfil(){
    this.debtorService.getByToken().subscribe({
      next: (debtorResponse:CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.email = data.email;
      }
    });
  }

  onLogoutClick(): void {
    sessionStorage.removeItem("token")
  }
}
