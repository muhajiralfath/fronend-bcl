import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UmkmResponse} from "../../share/model/response/umkm-response.model";
import {NewUmkmRequest} from "../../share/model/request/new-umkm-request.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-umkm-detail',
  templateUrl: './umkm-detail.component.html',
  styleUrls: ['./umkm-detail.component.css']
})
export class UmkmDetailComponent {
  form:FormGroup = new FormGroup({
    debtorId: new FormControl("", Validators.required),
    umkmId: new FormControl(""),
    umkmName: new FormControl("", Validators.required),
    noSiup: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    capital: new FormControl("", Validators.required),
    umkmType: new FormControl("", Validators.required),
    bankAccount: new FormControl("", Validators.required),
  });
  constructor(
    private readonly umkmService:UmkmService,
    private readonly route:ActivatedRoute
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (param) => {
        if(param["id"]){
          this.form.patchValue({
            debtorId: param["id"]
          })
        }
      }
    })
    this.loadUmkm(this.form.get("umkmId")?.value);
  }
  loadUmkm(umkmId:any){
    this.umkmService.getById(umkmId).subscribe({
      next: (umkmResponse:CommonResponse<UmkmResponse>) => {
        let data:UmkmResponse = umkmResponse.data;
        this.inputData(data);
      }
    })
  }
  save(request:any){
    let newUmkmRequest:NewUmkmRequest = {
      debtorId:request.debtorId,
      umkmName:request.umkmName,
      noSiup:request.noSiup,
      address:request.address,
      capital:request.capital,
      umkmType:request.umkmType,
      bankAccount:request.bankAccount
    }
    this.umkmService.create(newUmkmRequest).subscribe({
      next: (response:CommonResponse<UmkmResponse>) => {
        let data:UmkmResponse = response.data;
        this.inputData(data);
        Swal.fire(
          "Create UMKM",
          "success",
          "success"
        );
      },error: (error) => {
        Swal.fire(
          'Create UMKM',
          error.toString(),
          'error'
        );
      }
    });
  }

  private inputData(data:UmkmResponse){
    this.form.setValue({
      umkmId: data.umkmId,
      umkmName: data.umkmName,
      noSiup: data.noSiup,
      address: data.address,
      capital: data.capital,
      umkmType: data.umkmType,
      bankAccount: data.bankAccount
    })
  }
}
