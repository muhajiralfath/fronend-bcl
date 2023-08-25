import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesAdminRoutingModule} from "./pages-admin-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SubmissionComponent} from "./submission/submission.component";
import { DebtorListComponent } from './debtor-list/debtor-list.component';
import { DebtorDetailComponent } from './debtor-detail/debtor-detail.component';
import { UmkmDetailComponent } from './umkm-detail/umkm-detail.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SubmissionComponent,
    DebtorListComponent,
    DebtorDetailComponent,
    UmkmDetailComponent
  ],
  imports: [
    CommonModule,
    PagesAdminRoutingModule
  ]
})
export class PagesAdminModule { }
