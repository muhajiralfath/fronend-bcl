import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDebtorComponent } from './navbar-debtor.component';

describe('NavbarDebtorComponent', () => {
  let component: NavbarDebtorComponent;
  let fixture: ComponentFixture<NavbarDebtorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDebtorComponent]
    });
    fixture = TestBed.createComponent(NavbarDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
