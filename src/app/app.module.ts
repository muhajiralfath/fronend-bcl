import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { LoginComponent } from './share/component/login/login.component';
import { RegisterComponent } from './share/component/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './share/component/navbar/navbar.component';
import {SubmissionComponent} from "./pages/submission/submission.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatChipsModule
  ],
  // standalone: true,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
