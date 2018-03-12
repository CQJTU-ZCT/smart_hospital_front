import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeTabPage } from "../home-tab/home-tab";
import { DoctorTabPage } from "../doctor-tab/doctor-tab";
import { AppoinmentTabPage } from "../appoinment-tab/appoinment-tab";
import {MessageTabPage} from "../message-tab/message-tab";

/**
 * Generated class for the MainTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-tab',
  templateUrl: 'main-tab.html'
})
export class MainTabPage {

  homeTabRoot = HomeTabPage;
  doctorTabRoot = DoctorTabPage;
  appoinmentTabRoot = AppoinmentTabPage;
  messageTabRoot = MessageTabPage;


  constructor(public navCtrl: NavController) {}

}
