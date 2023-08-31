import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUmkmDetailComponent } from './view-umkm-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UmkmService} from "../../share/service/umkm/umkm.service";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {RupiahPipe} from "../../share/pipe/rupiah.pipe";

describe('ViewUmkmDetailComponent', () => {
  let component: ViewUmkmDetailComponent;
  let fixture: ComponentFixture<ViewUmkmDetailComponent>;
  let httpMock:HttpClientTestingModule;
  let activatedRoute:ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUmkmDetailComponent,RupiahPipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UmkmService]
    });
    fixture = TestBed.createComponent(ViewUmkmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpClientTestingModule);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
