import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '', component: LandinngComponent, canActivate: [LandingCanActivate]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }