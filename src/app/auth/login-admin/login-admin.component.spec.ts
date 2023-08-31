import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminComponent } from './login-admin.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AuthService} from "../../share/service/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('LoginAdminComponent', () => {
  let component: LoginAdminComponent;
  let fixture: ComponentFixture<LoginAdminComponent>;
  let httpMock:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(LoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpClientTestingModule)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
