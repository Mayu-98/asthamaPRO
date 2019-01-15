import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { RegisterPage } from "../pages/register/register";
import { RegisterWithEmailPage } from "../pages/register-with-email/register-with-email";
import { PermissionPage } from "../pages/permission/permission";
import { LoginPage } from "../pages/login/login";
import { MyaccountPage } from "../pages/myaccount/myaccount";
import { DetailsPage } from "../pages/details/details";
import { ProgressBarModule } from "angular-progress-bar";
import { ContactDetailsPage } from "../pages/details/contact-details/contact-details";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnboardingPage,
    RegisterPage,
    RegisterWithEmailPage,
    PermissionPage,
    LoginPage,
    MyaccountPage,
    DetailsPage,
    ContactDetailsPage
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OnboardingPage,
    RegisterPage,
    RegisterWithEmailPage,
    PermissionPage,
    LoginPage,
    MyaccountPage,
    DetailsPage,
    ContactDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
