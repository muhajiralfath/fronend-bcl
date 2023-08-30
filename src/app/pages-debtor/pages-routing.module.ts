import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BillComponent} from "./bill/bill.component";
import {ProfilComponent} from "./profil/profil.component";
import {SubmissionComponent} from "./submission/submission.component";
import {SubmissionFormComponent} from "./submission-form/submission-form.component";
import {PagesDebtorAppComponent} from "./pages-debtor-app/pages-debtor-app.component";
import {UmkmDetailComponent} from "../pages-admin/umkm-detail/umkm-detail.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [
  {
    path: "", component: PagesDebtorAppComponent, children: [
      {path: "home", component: HomeComponent},
      {path: "bill", component: BillComponent},
      {path: "profile/:id", component: ProfilComponent},
      {path: "submission", component: SubmissionComponent},
      {path: "submission-form", component: SubmissionFormComponent},
      {path: "umkm-detail", component: UmkmDetailComponent},
      {path: "payment", component: PaymentComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
