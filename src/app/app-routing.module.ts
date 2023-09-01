import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LandingPageComponent} from "./share/component/landing-page/landing-page.component";
import {NotfoundComponent} from "./share/component/notfound/notfound.component";
import {LoginAdminComponent} from "./auth/login-admin/login-admin.component";
import {authGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "login", component: LoginComponent},
  {path: "login-admin", component: LoginAdminComponent},
  {path: "register", component: RegisterComponent},
  {path: "404", component: NotfoundComponent},
  {
    path: "admin",
    loadChildren: () => import("./pages-admin/pages-admin.module").then(m => m.PagesAdminModule),
    canActivate: [authGuard],
    canActivateChild: [authGuard]
  },
  {
    path: "debtor",
    loadChildren: () => import("./pages-debtor/pages.module").then(m => m.PagesModule),
    canActivate: [authGuard],
    canActivateChild: [authGuard]
  },
  {path: "**", redirectTo:"404", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
