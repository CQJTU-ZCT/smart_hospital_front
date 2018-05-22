import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, Refresher} from 'ionic-angular';
import * as $ from "jquery"
import {ApiProvider} from "../../providers/api/api";
import {HospitalProvider} from "../../providers/hospital/hospital";
import {MainTabPage} from "../main-tab/main-tab";

/**
 * Generated class for the SelecthospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecthospital',
  templateUrl: 'selecthospital.html',
})
export class SelecthospitalPage {

  hospitals: any;

  loader: any;
  page: number;
  maxPage: number;

  currentHospital: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public load: LoadingController,
              public alert: AlertController,
              public hos: HospitalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecthospitalPage');
    this.page = 1;
    this.loader = this.load.create({
      content: '数据加载中, 请稍后',
      spinner: 'Bubbles'
    });
    this.loader.present();
    //get data
    let that = this;
    $.get(this.api.getHospitalsApi(),
      {pageNum: this.page++},
      function (data) {
        that.loader.dismiss();
        if (data['code'] === 200) {
          that.hospitals = data['map']['pageInfo']['list'];
          that.maxPage = data['map']['pageInfo']['pages'];
          console.log(that.hospitals);
        }
      }
    );
  }

  select(hospial: any) {
    this.currentHospital = hospial;
  }

  doRefresh(refresher) {
    if (this.page > this.maxPage) {
      refresher.cancel();
      return;
    }
    let that = this;
    $.get(this.api.getHospitalsApi(),
      {pageNum: this.page++},
      function (data) {
        if (data['code'] === 200) {
          let hs = data['map']['pageInfo']['list'];
          for (var h in hs) {
            that.hospitals.unshift(hs[h]);
          }
          refresher.cancel();
        }
      }
    );
  }

  toMain() {
    if (this.currentHospital === null) {
      this.alert.create({
        title: '提示',
        subTitle: '请选择医院'
      }).present();
    } else {
      this.hos.storeHospital(JSON.stringify(this.currentHospital));
      this.navCtrl.push(MainTabPage);
    }
  }


}
