import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmkmDetailComponent } from './umkm-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UmkmService} from "../../share/service/umkm/umkm.service";

describe('UmkmDetailComponent', () => {
  let component: UmkmDetailComponent;
  let fixture: ComponentFixture<UmkmDetailComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmkmDetailComponent]
    });
    fixture = TestBed.createComponent(UmkmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
