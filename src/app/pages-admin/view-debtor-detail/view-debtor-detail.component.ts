import { Component } from '@angular/core';
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {PhotoService} from "../../share/service/photo/photo.service";

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
    email:"",
    imageId:""
  }
  constructor(
    private readonly debtorService:DebtorService,
    private readonly route: ActivatedRoute,
    private readonly photoService: PhotoService,
    private readonly sanitizer: DomSanitizer
  ) {}

  profileImage: SafeUrl | undefined = "../../assets/share/default.svg";

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

        if(this.newDebtorResponse.imageId != null){
          this.displayImage(this.newDebtorResponse.imageId);
        }
      }
    });
  }

  displayImage(imageId: string): void {
    this.photoService.download(imageId).subscribe({
      next: res => {
        const imageUrl = URL.createObjectURL(res.body);
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      }
    });
  }
}
