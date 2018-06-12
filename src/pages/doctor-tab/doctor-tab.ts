import {Component} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams, ToastCmp, ToastController} from 'ionic-angular';
import {DoctorPage} from "../doctor/doctor";

import * as $ from 'jquery';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";
import {DoctorProvider} from "../../providers/doctor/doctor";

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
  showLoadMore: boolean;
  currentPage: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public api: ApiProvider,
              public token: TokenProvider,
              public toast: ToastController,
              public load: LoadingController,
              public doctorCtrl: DoctorProvider) {
    this.doctors = [];
    this.currentPage = 2;
    this.getDoctor(null);

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

  toDoctor(doctor) {
    this.doctorCtrl.setCurrentDoctor(doctor);
    this.app.getRootNav().push(DoctorPage);
  }

  getDoctor(refresher) {
    let that = this;
    this.showLoadMore = false;
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
        if (refresher !== null &&
          refresher !== undefined) {
          refresher.cancel();
        }
        if (data['code'] !== 200) {
          that.toast.create({
            message: "请求医生数据错误",
            duration: 1000
          }).present();
        } else {

          let datas = data['map']['pageInfo']['list'];
          for (let index in datas) {
            let nd = datas[index];
            if (nd['profile'] === null || nd['profile'] === '') {
              nd['profile'] = './assets/imgs/person_info.jpg';
            } else {
              let url = nd['profile']['profilePath'];
              console.log(url);
              nd['profile'] = 'https://api.zjhfyq.cn/api-file' + url + '?token=' + that.token.getToken();
            }
            that.doctors.push(nd);
          }
          if (data['map']['pageInfo']['isLastPage'] !== true) {
            that.showLoadMore = true;
          }
        }
      });
  }

  doRefresh(refresher) {
    this.getDoctor(refresher);
  }

  loadMore() {
    let loader = this.load.create({
      content: "数据加载中..."
    });
    loader.present();
    let that = this;
    $.get(this.api.getDocters(),
      {token: this.token.getToken(),
       pageNum: this.currentPage++},
      function (data) {
        loader.dismiss();
        if (data['code'] !== 200) {
          that.toast.create({
            message: "请求医生数据错误",
            duration: 1000
          }).present();
        } else {
          let datas = data['map']['pageInfo']['list'];
          for (let index in datas) {
            let nd = datas[index];
            if (nd['profile'] === null || nd['profile'] === '') {
              nd['profile'] = './assets/imgs/person_info.jpg';
            } else {
              nd['profile'] = 'https://api.zjhfyq.cn/api-file' + nd['profile'];
            }
            that.doctors.push(nd);
          }
          if (data['map']['pageInfo']['isLastPage'] === true) {
            that.showLoadMore = false;
          }
        }
      });
  }
}


