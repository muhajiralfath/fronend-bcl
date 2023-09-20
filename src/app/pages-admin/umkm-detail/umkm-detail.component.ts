import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UmkmResponse} from "../../share/model/response/umkm-response.model";
import {NewUmkmRequest} from "../../share/model/request/new-umkm-request.model";
import Swal from "sweetalert2";
import {UpdateUmkmRequest} from "../../share/model/request/update-umkm-request.model";
import { Location } from '@angular/common';
import {DocumentService} from "../../share/service/document/document.service";

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

  documentForm: FormGroup = new FormGroup({
    document: new FormControl('', [Validators.required])
  })
  document: File | undefined
  constructor(
    private readonly umkmService:UmkmService,
    private readonly route:ActivatedRoute,
    private readonly router:Router,
    private readonly location:Location,
    private readonly documentService: DocumentService
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (param) => {
        if(param["id"]){
          this.form.patchValue({
            debtorId: param["id"]
          })
          this.loadUmkm(param["id"]);
        }
      }
    })
  }
  getDocument(event: any): void{
    this.document = event.target.files[0] as File
  }

  uploadDocument(): void{
    this.documentService.uploadDocument(this.document).subscribe({
      next  : res => {
        console.log(res)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success Upload!',
          showConfirmButton: false,
          timer: 1200
        })
        window.location.reload()
      },
      error: err => {
        console.log(err)
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Failed Upload!',
          showConfirmButton: false,
          timer: 1200
        })
      }
    })
  }

  loadUmkm(debtorId:any){
    this.umkmService.getByDebtorId(debtorId).subscribe({
      next: (umkmResponse:CommonResponse<UmkmResponse>) => {
        let data:UmkmResponse = umkmResponse.data;
        console.log(data);
        this.inputData(data);
      },
      error: (error: any) => {
        // Swal.fire("Page Not Found", error);
        // errMsg = "Page Not Found"
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
  save(request:any){
    if(this.form.get("umkmId")?.value){
      //Update
      let updateUmkmRequest:UpdateUmkmRequest = {
        umkmId:request.umkmId,
        umkmName:request.umkmName,
        noSiup:request.noSiup,
        address:request.address,
        capital:request.capital,
        umkmType:request.umkmType,
        bankAccount:request.bankAccount
      }

      this.umkmService.update(updateUmkmRequest).subscribe({
        next: (response:CommonResponse<UmkmResponse>) => {
          let data:UmkmResponse = response.data;
          this.inputData(data);
          Swal.fire(
            "Update UMKM",
            "success",
            "success"
          );
        },error: (error) => {
          Swal.fire(
            'Update UMKM',
            error.toString(),
            'error'
          );
        }
      });
    }else{
      //Create
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
  }

  private inputData(data:UmkmResponse){
    this.form.patchValue({
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
