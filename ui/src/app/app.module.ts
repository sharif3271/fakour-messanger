import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { UserselectionComponent } from './components/userselection/userselection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftMenueComponent } from './components/landing/left-menue/left-menue.component';
import { MessageAreaComponent } from './components/landing/message-area/message-area.component';
import { FriendComponent } from './components/landing/left-menue/friend/friend.component';
import {AngularmatrialModule} from './shared/angularmatrial/angularmatrial.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandinngComponent,
    RegisterComponent,
    LeftMenueComponent,
    MessageAreaComponent,
    FriendComponent,
    UserselectionComponent,
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
