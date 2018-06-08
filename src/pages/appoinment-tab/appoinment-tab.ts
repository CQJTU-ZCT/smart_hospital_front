import { Component } from '@angular/core';
import {App, DateTime, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import DateTimeFormat = Intl.DateTimeFormat;
import {AppointmentListPage} from "../appointment-list/appointment-list";
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

import * as $ from 'jquery';

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
  preorderTime: string;

  doctorId: string;

  loadDialog: any;

  doctors: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public app: App,
              public api: ApiProvider,
              public token: TokenProvider,
              public loader: LoadingController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentTabPage');
    this.loadDialog = this.loader.create({
      content: '数据加载中, 请稍后',
    });
    // this.loadDialog.present();
    let that = this;
    $.get(this.api.getBranches(),
      {token: this.token.getToken()},
    function (data) {
      // that.loadDialog.dismiss();
      console.log(data);
    })
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
    function (data) {
      console.log(data);
    })
  }

  submit() {
    let body = {
      preorderTime: this.preorderTime,
      doctorId: this.doctorId,
      token: this.token
    };
    let url = this.api.postPreorder() + "?token=" + this.token.getToken();
    $.post(url, body,
    function (data) {
      console.log(data);
    })
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
