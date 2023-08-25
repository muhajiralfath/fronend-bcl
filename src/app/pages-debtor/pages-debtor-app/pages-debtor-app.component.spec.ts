import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDebtorAppComponent } from './pages-debtor-app.component';

describe('PagesDebtorAppComponent', () => {
  let component: PagesDebtorAppComponent;
  let fixture: ComponentFixture<PagesDebtorAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesDebtorAppComponent]
    });
    fixture = TestBed.createComponent(PagesDebtorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
