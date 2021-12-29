import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { UserselectionComponent } from './components/userselection/userselection.component';
import { IconmessageComponent } from './components/iconmessage/iconmessage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularmatrialModule} from './shared/angularmatrial/angularmatrial.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandinngComponent,
    RegisterComponent,
    UserselectionComponent,
    IconmessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularmatrialModule,
  ],
  providers: [LandingCanActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
