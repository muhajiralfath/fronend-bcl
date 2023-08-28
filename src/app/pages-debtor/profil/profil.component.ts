import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UpdateDebtorRequest} from "../../share/model/request/update-debtor-request.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  form:FormGroup = new FormGroup({
    debtorId: new FormControl("", Validators.required),
    nik: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    // ga ada
    email: new FormControl("", Validators.required),

    birthPlace: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    job: new FormControl("", Validators.required),
    npwp: new FormControl("", Validators.required),
    handphone: new FormControl("", Validators.required),
    birthDate: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)
  });
  constructor(
    private readonly debtorService:DebtorService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ) {}
  ngOnInit(){
    this.route.params.subscribe({
      next: (param) => {
        if(param["id"]){
          this.loadProfil(param["id"]);
        }
      }
    });


  }
  loadProfil(id:string){
    this.debtorService.getById(id).subscribe({
      next: (debtorResponse:CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.inputData(data);
      }
    });
  }

  private inputData(data: DebtorResponse) {
    this.form.setValue({
      debtorId: data.debtorId,
      nik: data.nik,
      name: data.name,
      email: data.email,
      birthPlace: data.birthPlace,
      gender: data.gender,
      job: data.job,
      npwp: data.npwp,
      handphone: data.handphone,
      birthDate: data.birthDate,
      status: data.status,
      address: data.address
    });
  }

  save(request:UpdateDebtorRequest){
    let updateDebtorRequest:UpdateDebtorRequest = {
      debtorId:request.debtorId,
      nik:request.nik,
      npwp:request.npwp,
      name:request.name,
      handphone:request.handphone,
      birthPlace:request.birthPlace,
      birthDate:request.birthDate,
      gender:request.gender,
      status:request.status,
      address:request.address,
      job:request.job
    }

    this.debtorService.update(updateDebtorRequest).subscribe({
      next: (debtorResponse:CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.inputData(data);
        Swal.fire(
          'Update Profil',
          "Update profile success",
          'success'
        );
      },
      error: (error) => {
        Swal.fire(
          'Update Profil',
          error.toString(),
          'error'
        );
      }
    });
  }
}
