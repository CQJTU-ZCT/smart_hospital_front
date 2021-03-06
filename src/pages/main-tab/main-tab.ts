import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeTabPage } from "../home-tab/home-tab";
import { DoctorTabPage } from "../doctor-tab/doctor-tab";
import { AppointmentTabPage } from "../appoinment-tab/appoinment-tab";
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

  msgCount: number;

  homeTabRoot = HomeTabPage;
  doctorTabRoot = DoctorTabPage;
  appointmentTabPageRoot = AppointmentTabPage;
  messageTabRoot = MessageTabPage;


  constructor(public navCtrl: NavController) {
    this.msgCount = 0;


  }

}
