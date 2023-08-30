import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {ActivatedRoute} from "@angular/router";
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
  form: FormGroup;

  constructor(
    private readonly debtorService: DebtorService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      debtorId: [''],
      nik: ['', [Validators.required, Validators.pattern("^[0-9]{16}$")]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthPlace: ['', Validators.required],
      gender: ['', Validators.required],
      job: ['', Validators.required],
      npwp: ['', [Validators.required, Validators.pattern("^[0-9]{15,16}$")]],
      handphone: ['', [Validators.required, Validators.pattern("^(?:\\+62|0)[2-9][0-9]{7,11}$")]],
      birthDate: ['', Validators.required],
      status: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
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

  save(request: UpdateDebtorRequest) {
    let updateDebtorRequest: UpdateDebtorRequest = {
      debtorId: request.debtorId,
      nik: request.nik,
      npwp: request.npwp,
      name: request.name,
      handphone: request.handphone,
      birthPlace: request.birthPlace,
      birthDate: request.birthDate,
      gender: request.gender,
      status: request.status,
      address: request.address,
      job: request.job
    }

    this.debtorService.update(updateDebtorRequest).subscribe({
      next: (debtorResponse: CommonResponse<DebtorResponse>) => {
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
