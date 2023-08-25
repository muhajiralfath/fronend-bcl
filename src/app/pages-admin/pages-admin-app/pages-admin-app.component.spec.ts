import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAdminAppComponent } from './pages-admin-app.component';

describe('PagesAdminAppComponent', () => {
  let component: PagesAdminAppComponent;
  let fixture: ComponentFixture<PagesAdminAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesAdminAppComponent]
    });
    fixture = TestBed.createComponent(PagesAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
