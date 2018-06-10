import { Component } from '@angular/core';
import {
  IonicPage, LoadingController, NavController, NavParams, PopoverController,
  ToastController
} from 'ionic-angular';
import {ImgPreviewPage} from "../img-preview/img-preview";
import {DoctorProvider} from "../../providers/doctor/doctor";
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

import * as $ from 'jquery';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  doctorName: string;
  doctor: any;
  branches: any;
  time: string;
  branchId: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popCtrl: PopoverController,
              public doctorCtrl: DoctorProvider,
              public load: LoadingController,
              public api: ApiProvider,
              public token: TokenProvider,
              public toast: ToastController) {
    this.doctor = this.doctorCtrl.getCurrentDoctor();
    console.log(this.doctor);
    this.doctorName = this.doctor['name'];
    console.log(this.doctorName);
    this.branches = [];
    this.getBranches(null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }

  showImg($event) {
    let imgDialog = this.popCtrl.create(ImgPreviewPage,
      {
        src: $event.target.getAttribute('src')
    });
    imgDialog.present();

  }
  getBranches(refresher) {
    let that = this;
    $.get(this.api.getDoctorBranches(),
      {token: this.token.getToken(),
       idCard: this.doctor['idCard']},
    function (data) {
      if (refresher !== null &&
          refresher !== undefined) {
        refresher.cancel();
      }
      if (data['code'] !== 200) {
        that.toast.create({
          message: '获取科室数据失败',
          duration: 1000
        }).present();
      } else {
        that.branches = data['map']['pageInfo']['list'];
      }
    })
  }

  doRefresh(refresher) {
    this.getBranches(refresher);
  }

  submit() {
    let that = this;
    let preorderTime = this.time.replace('T', ' ').replace('Z', '');
    $.post(this.api.postPreorder(), {
      doctorId: this.doctor['idCard'],
      preorderTime: preorderTime,
      branchId: this.branchId,
      token: this.token.getToken()
    },
    function (data) {
      that.toast.create({
        message: data['info'],
        duration: 1000
      }).present();
    })
  }

}
