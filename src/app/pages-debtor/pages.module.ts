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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {PagesAdminModule} from "../pages-admin/pages-admin.module";
import { PaymentComponent } from './payment/payment.component';
import {PaymentService} from "../share/service/payment/payment.service";


@NgModule({
  declarations: [
    ProfilComponent,
    SubmissionFormComponent,
    BillComponent,
    HomeComponent,
    SubmissionComponent,
    PagesDebtorAppComponent,
    NavbarDebtorComponent,
    PaymentComponent
  ],
  exports: [],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        PagesAdminModule
    ],
  providers: [
    PaymentService
  ]
})
export class PagesModule {
}
