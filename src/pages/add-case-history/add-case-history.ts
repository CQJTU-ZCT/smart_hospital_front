import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";
import {HospitalProvider} from "../../providers/hospital/hospital";

import * as $ from 'jquery';
import {CasebookProvider} from "../../providers/casebook/casebook";

/**
 * Generated class for the AddCaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-case-history',
  templateUrl: 'add-case-history.html',
})
export class AddCaseHistoryPage {
  showAlert: boolean;
  hospital: any;
  user: any;
  time: string;
  title: string;
  desc: string;
  treatment: string;
  doctor: string;
  branch: string;
  hospitalName: string;

  branches: any;
  doctors: any;
  emr: any;

  // @ViewChild('alert')
  // alert: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public token: TokenProvider,
              public load: LoadingController,
              public toast: ToastController,
              public hos: HospitalProvider,
              public caseBook: CasebookProvider) {
    this.showAlert = true;
    this.hospital = this.hos.getHospital();
    this.user = this.token.getUser();
    this.hospitalName = this.hospital['hospitalName'];
    this.emr = this.caseBook.getBook();

    this.branches = [];
    this.getBranch();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCaseHistoryPage');

  }

  getBranch() {
    let that = this;
    let loader = this.load.create({
      content: "数据加载中..."
    });
    loader.present();
    $.get(this.api.getBranches(),
      {token: this.token.getToken()},
      function (data) {
        loader.dismiss();
        if (data['code'] === 200) {
          that.branches = data['map']['pageInfo']['list'];
        } else {
          that.toast.create({
            message: "获取科室数据出错...",
            duration: 1000
          }).present();
        }
      });
  }

  branchIdChanged() {
    let loader = this.load.create({
      content: "加载医生数据..."
    });
    loader.present();
    let that = this;
    $.get(this.api.getBranchDoctor(), {
      token: this.token.getToken(),
      branchId: this.branch
    },
      function (data) {
        loader.dismiss();
        if (data['code'] === 200) {
          that.doctors = data['map']['pageInfo']['list'];
        } else {
          that.toast.create({
            message: '请求医生数据失败，请稍后再试',
            duration: 1000
          }).present();
        }
      })
  }

  close() {
    this.navCtrl.pop();
  }
  submit() {
    let that = this;
    let hospitalId = this.hospital['hospitalId'];
    let branchId = this.branch;
    let doctorId = this.doctor;
    if (hospitalId === undefined) {
      this.toast.create({
        message: "请选择医院",
        duration: 1000
      }).present();
    }
    if (branchId === undefined) {
      this.toast.create({
        message: "请选择科室",
        duration: 1000
      }).present();
    }
    if (this.time === undefined) {
      this.toast.create({
        message: "请选择时间",
        duration: 1000
      }).present();
    }
    if (this.title === undefined) {
      this.toast.create({
        message: "请输入标题",
        duration: 1000
      }).present();
    }
    if (this.desc === undefined) {
      this.toast.create({
        message: "请输入描述",
        duration: 1000
      }).present();
    }
    if (this.treatment === undefined) {
      this.toast.create({
        message: "请输入治疗记录",
        duration: 1000
      }).present();
    }
    console.log(this.emr);
    let body = {
      emrId: this.emr['emrId'],
      title: this.title,
      description: this.desc,
      createTime: this.time,
      treament: this.treatment,
      hospitalId: hospitalId,
      branchId: branchId,
      doctorId: doctorId,
      token: this.token.getToken()
    };
    $.post(this.api.postEmrRecord(),
      body,
      function (data) {
        console.log(data);
        if (data['code'] === 200) {
          that.toast.create({
            message: "添加电子病历记录成功",
            duration: 1000
          }).present();
        }
      })
  }

}
