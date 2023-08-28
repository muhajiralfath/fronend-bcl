import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesAdminRoutingModule} from "./pages-admin-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { DebtorListComponent } from './debtor-list/debtor-list.component';
import { DebtorDetailComponent } from './debtor-detail/debtor-detail.component';
import { UmkmDetailComponent } from './umkm-detail/umkm-detail.component';
import { PagesAdminAppComponent } from './pages-admin-app/pages-admin-app.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import {NavbarComponent} from "../share/component/navbar/navbar.component";
import { BillsComponent } from './bills/bills.component';
import {MatTableModule} from "@angular/material/table";
import {AppModule} from "../app.module";
import {RupiahPipe} from "../share/pipe/rupiah.pipe";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
// import {ProfilComponent} from "../pages-debtor/profil/profil.component";


@NgModule({
  declarations: [
    DashboardComponent,
    DebtorListComponent,
    // DebtorDetailComponent,
    // ProfilComponent,
    UmkmDetailComponent,
    PagesAdminAppComponent,
    SubmissionListComponent,
    NavbarComponent,
    BillsComponent,

    RupiahPipe
  ],
  imports: [
    CommonModule,
    PagesAdminRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class PagesAdminModule { }
