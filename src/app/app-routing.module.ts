import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./share/component/login/login.component";
import {RegisterComponent} from "./share/component/register/register.component";
import {LandingPageComponent} from "./component/landing-page/landing-page.component";
import {NotfoundComponent} from "./share/component/notfound/notfound.component";

const routes: Routes = [
  // {path: "", component: LandingPageComponent},
  // {path: "login", component: LoginComponent},
  // {path: "register", component: RegisterComponent},
  // {path: "404", component: NotfoundComponent},
  // {path: "admin", loadChildren: () => import("./pages-admin/pages-admin.module").then(m => m.PagesAdminModule)},
  // {path: "debtor", loadChildren: () => import("./pages-debtor/pages.module").then(m => m.PagesModule)},
  // {path: "**", redirectTo:"404", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
