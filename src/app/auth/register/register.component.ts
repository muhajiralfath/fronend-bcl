import { Component } from '@angular/core';
import { AuthService } from '../../share/service/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthRequest } from '../../share/model/request/auth-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private readonly service: AuthService,
    private readonly router: Router
  ) {}
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  saveRegis(request: any) {
    if (request.password !== request.repeatPassword) {
      this.form.reset();
      Swal.fire('Login', 'Passwords are not the same', 'error');
    } else {
      let authRequest: AuthRequest = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      };
      this.service.registerDebtor(authRequest).subscribe({
        next: (result) => {
          sessionStorage.setItem('registeredEmail', authRequest.email);

          this.form.reset();
          Swal.fire('Registration successful!', 'You can login!', 'success');
          this.router.navigateByUrl('/login');
        },
        error: (e) => {
          this.form.reset();
          Swal.fire(
            'Register Failed',
            'Email already exist, Please use another one!',
            'error'
          );
        },
      });
    }
  }
}
