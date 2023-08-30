import { Component } from '@angular/core';
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UmkmResponse} from "../../share/model/response/umkm-response.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-umkm-detail',
  templateUrl: './view-umkm-detail.component.html',
  styleUrls: ['./view-umkm-detail.component.css']
})
export class ViewUmkmDetailComponent {
  newUmkmResponse:UmkmResponse = {
    umkmId:"",
    noSiup:"",
    umkmName:"",
    address:"",
    capital:0,
    umkmType:"",
    bankAccount:""
  }
  constructor(
    private readonly umkmService:UmkmService,
    private readonly route:ActivatedRoute,
    private readonly router:Router
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (param) => {
        if(param["id"]){
          this.loadUmkm(param["id"]);
        }
      }
    })
  }
  loadUmkm(debtorId:any){
    this.umkmService.getByDebtorId(debtorId).subscribe({
      next: (umkmResponse:CommonResponse<UmkmResponse>) => {
        let data:UmkmResponse = umkmResponse.data;
        this.newUmkmResponse = data;
      },
      error: (error: any) => {
        this.route.params.subscribe({
          next: (param) => {
            if(param["id"]){
              let debtorId:string = param["id"];
              this.router.navigateByUrl(`/debtor/profile/${debtorId}`);
            }
          }
        });
      }
    });
  }
}
