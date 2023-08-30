import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUmkmDetailComponent } from './view-umkm-detail.component';

describe('ViewUmkmDetailComponent', () => {
  let component: ViewUmkmDetailComponent;
  let fixture: ComponentFixture<ViewUmkmDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUmkmDetailComponent]
    });
    fixture = TestBed.createComponent(ViewUmkmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
