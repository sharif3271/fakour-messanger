import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { AngularmatrialModule } from './shared/angularmatrial/angularmatrial.module'
import { phoneVerification } from './components/phoneverification/phoneverification.component'
import { AppConfigService } from './service/config.service';
import { AuthInterceptor } from './service/auth-interceptor';
import { PasswordComponent } from './components/password/password.compnent';
import { ConversationComponent } from './components/landing/left-menue/conversation/conversation.component';
import { MassegeComponent } from './components/landing/message-area/massege/massege.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandinngComponent,
    RegisterComponent,
    LeftMenueComponent,
    MessageAreaComponent,
    ConversationComponent,
    UserselectionComponent,
    phoneVerification,
    MassegeComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularmatrialModule,
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
export class AppModule {}
