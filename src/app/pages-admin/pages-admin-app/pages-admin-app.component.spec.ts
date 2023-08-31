import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAdminAppComponent } from './pages-admin-app.component';
import {NavbarComponent} from "../../share/component/navbar/navbar.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('PagesAdminAppComponent', () => {
  let component: PagesAdminAppComponent;
  let fixture: ComponentFixture<PagesAdminAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PagesAdminAppComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(PagesAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
