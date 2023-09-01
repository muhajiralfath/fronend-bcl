import { Component } from '@angular/core';
import {AuthService} from "../../share/service/auth/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRequest} from "../../share/model/request/auth-request.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(
    private readonly service:AuthService,
    private readonly router:Router
  ) {}

  form:FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.router.navigateByUrl("/admin");
    }
  }

  save(data:AuthRequest){
    this.service.login(data).subscribe({
      next:(res) => {
        let token = res.data.token
        if(token){
          sessionStorage.setItem("token", token);
          this.router.navigateByUrl("/admin");
        }
      },
      error: (err) => {
        Swal.fire("Invalid Username or Password!");
      }
    });
  }

}
