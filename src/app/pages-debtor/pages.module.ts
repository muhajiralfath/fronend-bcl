import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import {ProfilComponent} from './profil/profil.component';
import {SubmissionFormComponent} from './submission-form/submission-form.component';
import {BillComponent} from './bill/bill.component';
import {HomeComponent} from './home/home.component';
import {SubmissionComponent} from './submission/submission.component';
import {PagesDebtorAppComponent} from './pages-debtor-app/pages-debtor-app.component';
import {NavbarDebtorComponent} from "../share/component/navbar-debtor/navbar-debtor.component";


@NgModule({
  declarations: [
    ProfilComponent,
    SubmissionFormComponent,
    BillComponent,
    HomeComponent,
    SubmissionComponent,
    PagesDebtorAppComponent,
    NavbarDebtorComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
