import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDebtorComponent } from './navbar-debtor.component';
import {AuthService} from "../../service/auth/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavbarDebtorComponent', () => {
  let component: NavbarDebtorComponent;
  let fixture: ComponentFixture<NavbarDebtorComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [NavbarDebtorComponent],
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(NavbarDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
