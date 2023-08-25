import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorListComponent } from './debtor-list.component';

describe('DebtorListComponent', () => {
  let component: DebtorListComponent;
  let fixture: ComponentFixture<DebtorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtorListComponent]
    });
    fixture = TestBed.createComponent(DebtorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
