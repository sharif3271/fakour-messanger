import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LandingCanActivate } from './gaurds/landing.gaurd';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LandinngComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { UserselectionComponent } from './components/userselection/userselection.component';
import { IconmessageComponent } from './components/iconmessage/iconmessage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftMenueComponent } from './components/landing/left-menue/left-menue.component';
import { MessageAreaComponent } from './components/landing/message-area/message-area.component';
import { FriendComponent } from './components/landing/left-menue/friend/friend.component';
import { AngularmatrialModule } from './shared/angularmatrial/angularmatrial.module'
import { phoneVerification } from './components/phoneverification/phoneverification.component'
import { AppConfigService } from './service/config.service';
import { AuthInterceptor } from './service/auth-interceptor';

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
    IconmessageComponent,
    phoneVerification,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularmatrialModule,
    MatInputModule,
  ],
  providers: [
    HttpClient,
    LandingCanActivate,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfigService) => config.loadAppConfig(),
      multi: true,
      deps: [AppConfigService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
