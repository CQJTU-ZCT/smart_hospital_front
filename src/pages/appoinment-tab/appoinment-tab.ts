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
  branch: any;

  branchId: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public app: App,
              public api: ApiProvider,
              public token: TokenProvider,
              public loader: LoadingController) {
    this.branch = [];
    this.doctors = [];
    let that = this;
    $.get(this.api.getBranches(),
      {token: this.token.getToken()},
      function (data) {
        // that.loadDialog.dismiss();
        console.log(data);
        if (data['code'] !== 200) {
          that.toastCtrl.create({
            message: '请求科室数据失败，请稍后再试',
            duration: 1000
          }).present();
          return;
        } else {
          that.branch = data['map']['pageInfo']['list'];
        }
      });
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
        console.log(data['code']);
        if (data['code'] !== 200) {
          that.toastCtrl.create({
            message: '请求医生数据失败，请稍后再试',
            duration: 1000
          }).present();
          return;
        } else {
          that.doctors = data['map']['pageInfo']['list'];
        }
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentTabPage');
    this.loadDialog = this.loader.create({
      content: '数据加载中, 请稍后',
    });
    // this.loadDialog.present();
    // let that = this;
    // $.get(this.api.getBranches(),
    //   {token: this.token.getToken()},
    // function (data) {
    //   // that.loadDialog.dismiss();
    //   console.log(data);
    // })
    // $.get(this.api.getDocters(),
    //   {token: this.token.getToken()},
    // function (data) {
    //   console.log(data);
    // })
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

  doRefresh(refresher) {
    let that = this;
    $.get(this.api.getBranches(),
      {token: this.token.getToken()},
      function (data) {
        // that.loadDialog.dismiss();
        console.log(data);
        refresher.cancel();
        if (data['code'] !== 200) {
          that.toastCtrl.create({
            message: '请求科室数据失败，请稍后再试',
            duration: 1000
          }).present();
          return;
        } else {
          that.branch = data['map']['pageInfo']['list'];
        }
      });
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
        refresher.cancel();
        console.log(data['code']);
        if (data['code'] !== 200) {
          that.toastCtrl.create({
            message: '请求医生数据失败，请稍后再试',
            duration: 1000
          }).present();
          return;
        } else {
          that.doctors = data['map']['pageInfo']['list'];
        }

      })
  }

}
