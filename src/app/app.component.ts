import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainTabPage} from "../pages/main-tab/main-tab";
import {PersonalInfoPage} from "../pages/personal-info/personal-info";
import {PrivateDoctorPage} from "../pages/private-doctor/private-doctor";
import {CaseHistoryPage} from "../pages/case-history/case-history";
import {AddCaseHistoryPage} from "../pages/add-case-history/add-case-history";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AddCaseHistoryPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

