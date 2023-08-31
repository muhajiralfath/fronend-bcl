import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {ActivatedRoute} from "@angular/router";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {UpdateDebtorRequest} from "../../share/model/request/update-debtor-request.model";
import Swal from "sweetalert2";
import {PhotoService} from "../../share/service/photo/photo.service";
import {HttpResponse} from "@angular/common/http";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {UserService} from "../../share/service/user/user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(
      private readonly debtorService: DebtorService,
      private readonly photoService: PhotoService,
      private readonly userService: UserService,
      private readonly route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private readonly sanitizer: DomSanitizer
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

  form: FormGroup;

  ngOnInit() {
    this.route.params.subscribe({
      next: (param) => {
        if (param["id"]) {
          this.loadProfil(param["id"]);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.userService.getUserByToken().subscribe({
      next: response => {
        if (response.data.profilePicture && response.data.profilePicture.id != null) {
          const imageId = response.data.profilePicture.id;
          this.displayImage(imageId);
        } else {
          this.displayDefaultImage();
        }
      },
      error: err => {
        console.log(err);
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

  photoForm: FormGroup = new FormGroup({
    image: new FormControl('', [Validators.required])
  });

  file: File | undefined;
  getFile(event: any): void{
    this.file = event.target.files[0] as File;
  }

  upload(): void{
    this.photoService.upload(this.file).subscribe({
      next: res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success!',
          showConfirmButton: false,
          timer: 1000
        });
      },
      error: err => {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Failed!',
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }

  profileImage: SafeUrl | undefined;
  displayDefaultImage() {
    const imageUrl = "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp";
    this.profileImage = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  displayImage(imageId: string): void {
    this.photoService.download(imageId).subscribe({
      next: res => {
        const imageUrl = URL.createObjectURL(res.body);
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      },
      error: err => {
        this.profileImage = "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp";
      }
    });
  }

  download(): void {
    this.photoService.download('53660ac2-a302-474e-a52c-dc75db4f0629').subscribe({
      next: response => {
        const blob = response.body;
        const filename = this.getFilenameFromResponseHeaders(response);
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename; // Set the appropriate filename
        link.click();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success!',
          showConfirmButton: false,
          timer: 1000
        });
      },
      error: err => {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Failed!',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
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
