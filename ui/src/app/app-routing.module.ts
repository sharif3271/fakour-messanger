import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { UserselectionComponent } from './components/userselection/userselection.component';
import { IconmessageComponent } from './components/iconmessage/iconmessage.component';
const routes: Routes = [
  {
    path: '',
    component: LandinngComponent,
    canActivate: [LandingCanActivate],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'iconmessage', component: IconmessageComponent,
  },
  {
    path: 'userselection', component: UserselectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
