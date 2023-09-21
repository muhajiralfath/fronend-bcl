import { Component } from '@angular/core';
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UmkmResponse} from "../../share/model/response/umkm-response.model";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {HttpResponse} from "@angular/common/http";

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
    bankAccount:"",
    documentId:""
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
        console.log(data)
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
  downloadSIUP(): void {
    if(this.newUmkmResponse.documentId != null){
      this.umkmService.downloadSIUP(this.newUmkmResponse.documentId).subscribe({
        next: response => {
          const blob = response.body;
          const filename = this.getFilenameFromResponseHeaders(response);
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = filename; // Set the appropriate filename
          link.click();
        },
        error: err => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Failed Download!!',
            showConfirmButton: false,
            timer: 1000
          });
        }
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'The SIUP document has not been uploaded by the Debtor'
      });
    }
  }
  getFilenameFromResponseHeaders(response: HttpResponse<Blob>): string {
    const contentDispositionHeader = response.headers.get('content-disposition');
    if (contentDispositionHeader) {
      const filenameRegex = /filename[^;=\n]*=([^;\n]*)/;
      const matches = filenameRegex.exec(contentDispositionHeader);
      if (matches && matches.length > 1) {
        let filename = matches[1].replace(/['"]/g, ''); // Remove quotes
        filename = filename.replace(/^_/, ''); // Remove leading underscore
        filename = filename.replace(/_$/, ''); // Remove trailing underscore
        return filename;
      }
    }
    return 'unknown'; // Default filename if header is not present or doesn't contain filename info
  }
}
