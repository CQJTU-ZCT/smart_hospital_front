import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, ToastCmp, ToastController} from 'ionic-angular';
import {DoctorPage} from "../doctor/doctor";

import * as $ from 'jquery';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

/**
 * Generated class for the DoctorTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-tab',
  templateUrl: 'doctor-tab.html',
})
export class DoctorTabPage {

  doctors: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public api: ApiProvider,
              public token: TokenProvider,
              public toast: ToastController) {
    this.doctors = [];
    let that = this;
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
        if (data['code'] !== 200) {
          that.toast.create({
            message: "请求医生数据错误",
            duration: 1000
          }).present();
        } else {
          that.doctors = data['map']['pageInfo']['list'];
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorTabPage');
    // let that = this;
    // $.get(this.api.getDocters(),
    //   {token: this.token.getToken()},
    //   function (data) {
    //   that.doctors = data['map']['pageInfo']['list'];
    // })
  }

  toDoctor($event) {
    console.log($event.target.offsetParent.getAttribute('data-doctor-id'));
    this.app.getRootNav().push(DoctorPage);
  }

  doRefresh(refresher) {
    let that = this;
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
      refresher.cancel();
        if (data['code'] !== 200) {
          that.toast.create({
            message: "请求医生数据错误",
            duration: 1000
          }).present();
        } else {
          that.doctors = data['map']['pageInfo']['list'];
        }
      })
  }
}


