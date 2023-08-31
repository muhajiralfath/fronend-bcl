import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDebtorAppComponent } from './pages-debtor-app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NavbarDebtorComponent} from "../../share/component/navbar-debtor/navbar-debtor.component";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {HttpClientModule} from "@angular/common/http";

describe('PagesDebtorAppComponent', () => {
  let component: PagesDebtorAppComponent;
  let fixture: ComponentFixture<PagesDebtorAppComponent>;
  let debtorService: DebtorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [PagesDebtorAppComponent, NavbarDebtorComponent],
      providers: [DebtorService]

    });
    fixture = TestBed.createComponent(PagesDebtorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
