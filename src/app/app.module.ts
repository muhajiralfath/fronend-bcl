import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './share/component/landing-page/landing-page.component';
import { NotfoundComponent } from './share/component/notfound/notfound.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NavbarLandingComponent } from './share/component/navbar-landing/navbar-landing.component';
import { DeveloperComponent } from './share/component/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    NotfoundComponent,
    LoginAdminComponent,
    NavbarLandingComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  // standalone: true,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }