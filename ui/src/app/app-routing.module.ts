import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { phoneVerification } from './components/phoneverification/phoneverification.component';
import { PasswordComponent } from './components/password/password.compnent';

const routes: Routes = [
  {
    path: '',
    component: LandinngComponent,
    canActivate: [LandingCanActivate],
  },
  {
    path: 'login',component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path:'password', component: PasswordComponent,
  },
  {
    path: 'phone-verification', component: phoneVerification,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
