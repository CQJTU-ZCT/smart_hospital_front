import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RegisterPage} from "../pages/register/register"
import {MainTabPage} from "../pages/main-tab/main-tab";
import {DoctorTabPage} from "../pages/doctor-tab/doctor-tab";
import {HomeTabPage} from "../pages/home-tab/home-tab";
import {AppointmentTabPage} from "../pages/appoinment-tab/appoinment-tab";
import {WelcomPage} from "../pages/welcom/welcom";
import {MessageTabPage} from "../pages/message-tab/message-tab";
import {HospitalPage} from "../pages/hospital/hospital";
import {DoctorPage} from "../pages/doctor/doctor";
import {ImgPreviewPage} from "../pages/img-preview/img-preview";
import {AppointmentListPage} from "../pages/appointment-list/appointment-list";
import {PersonalInfoPage} from "../pages/personal-info/personal-info";
import {EditMedicalCardPage} from "../pages/edit-medical-card/edit-medical-card";
import {PrivateDoctorPage} from "../pages/private-doctor/private-doctor";
import {EmojiProvider} from "../providers/emoji";
import {CaseHistoryPage} from "../pages/case-history/case-history";
import {AddCaseHistoryPage} from "../pages/add-case-history/add-case-history";
import {BodyMassPage} from "../pages/body-mass/body-mass";
import {HttpProvider} from '../providers/http/http';
import { ApiProvider } from '../providers/api/api';
import { TokenProvider } from '../providers/token/token';
import {SelecthospitalPage} from "../pages/selecthospital/selecthospital";
import { HospitalProvider } from '../providers/hospital/hospital';
import { DoctorProvider } from '../providers/doctor/doctor';
import { WsProvider } from '../providers/ws/ws';
import {CaseBookPage} from "../pages/case-book/case-book";
import { CasebookProvider } from '../providers/casebook/casebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainTabPage,
    HomeTabPage,
    DoctorTabPage,
    AppointmentTabPage,
    WelcomPage,
    MessageTabPage,
    HospitalPage,
    DoctorPage,
    ImgPreviewPage,
    AppointmentListPage,
    PersonalInfoPage,
    EditMedicalCardPage,
    PrivateDoctorPage,
    CaseHistoryPage,
    AddCaseHistoryPage,
    BodyMassPage,
    SelecthospitalPage,
    CaseBookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // add global configuration here
      tabsHideOnSubPages: 'true',  //hide tabs bar on subpage
      backButtonText: ''
    }),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainTabPage,
    HomeTabPage,
    DoctorTabPage,
    AppointmentTabPage,
    WelcomPage,
    MessageTabPage,
    HospitalPage,
    DoctorPage,
    ImgPreviewPage,
    AppointmentListPage,
    PersonalInfoPage,
    EditMedicalCardPage,
    PrivateDoctorPage,
    CaseHistoryPage,
    AddCaseHistoryPage,
    BodyMassPage,
    SelecthospitalPage,
    CaseBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    HttpProvider,
    ApiProvider,
    TokenProvider,
    HospitalProvider,
    DoctorProvider,
    WsProvider,
    CasebookProvider
  ]
})
export class AppModule {
}
