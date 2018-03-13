import { Component } from '@angular/core';
import {DateTime, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import DateTimeFormat = Intl.DateTimeFormat;

/**
 * Generated class for the AppointmentTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appoinment-tab',
  templateUrl: 'appoinment-tab.html',
})
export class AppointmentTabPage {
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = new Date();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentTabPage');

  }

}
