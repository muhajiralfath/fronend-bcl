import { Component } from '@angular/core';
import {AuthService} from "../../share/service/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {AuthRequest} from "../../share/model/request/auth-request.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private readonly service:AuthService,
  ) {}
  form:FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    repeatPassword: new FormControl("", Validators.required)
  });

  saveRegis(request:any){
    if(request.password !== request.repeatPassword){
      this.form.reset();
      Swal.fire(
        "Login", "Passwords are not the same","error"
      );
    }else{
      let authRequest:AuthRequest = {
        email: this.form.get('email')?.value,
        password: this.form.get("password")?.value
      };
      this.service.registerDebtor(authRequest).subscribe({
        next: (result) => {
          this.form.reset();
          Swal.fire("Login", "Registration successful", "success");
        }, error:(e) => {
          this.form.reset();
          Swal.fire("Login", e["message"], "error");
        }
      });
    }
  }
}
