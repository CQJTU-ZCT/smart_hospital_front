import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register"
import { MainTabPage } from "../pages/main-tab/main-tab";
import { DoctorTabPage } from "../pages/doctor-tab/doctor-tab";
import { HomeTabPage } from "../pages/home-tab/home-tab";
import { AppoinmentTabPage } from "../pages/appoinment-tab/appoinment-tab";
import {WelcomPage} from "../pages/welcom/welcom";
import {MessageTabPage} from "../pages/message-tab/message-tab";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainTabPage,
    HomeTabPage,
    DoctorTabPage,
    AppoinmentTabPage,
    WelcomPage,
    MessageTabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainTabPage,
    HomeTabPage,
    DoctorTabPage,
    AppoinmentTabPage,
    WelcomPage,
    MessageTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
