import { Component } from '@angular/core';
import {App, DateTime, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import DateTimeFormat = Intl.DateTimeFormat;
import {AppointmentListPage} from "../appointment-list/appointment-list";

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
  minDate: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public app: App) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentTabPage');

  }

  submit() {
    const toast = this.toastCtrl.create({
      message: '您的预约申请提交成功',
      showCloseButton: true,
      closeButtonText: '确认'
    });
    toast.present();
  }

  toList() {
    this.app.getRootNav().push(AppointmentListPage);
  }

}
