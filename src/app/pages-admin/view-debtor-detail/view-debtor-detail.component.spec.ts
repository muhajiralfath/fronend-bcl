import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDebtorDetailComponent } from './view-debtor-detail.component';

describe('ViewDebtorDetailComponent', () => {
  let component: ViewDebtorDetailComponent;
  let fixture: ComponentFixture<ViewDebtorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDebtorDetailComponent]
    });
    fixture = TestBed.createComponent(ViewDebtorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
