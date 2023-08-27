import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {AuthRequest} from "../../share/model/request/auth-request.model";
import {AuthService} from "../../share/service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private readonly service:AuthService,
    private readonly router:Router
  ) {}

  form:FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  save(data:AuthRequest){
    this.service.login(data).subscribe({
      next:(res) => {
        let token = res.data.token
        if(token){
          sessionStorage.setItem("token", token);
          this.router.navigateByUrl("/debtor");
        }
      },
      error: (err) => {
        Swal.fire("Invalid Username or Password!");
      }
    });
  }
}