import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AddCaseHistoryPage} from "../add-case-history/add-case-history";
import {TokenProvider} from "../../providers/token/token";
import {ApiProvider} from "../../providers/api/api";
import {CasebookProvider} from "../../providers/casebook/casebook";

import * as $ from 'jquery';
import {HospitalProvider} from "../../providers/hospital/hospital";

/**
 * Generated class for the CaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case-history',
  templateUrl: 'case-history.html',
})
export class CaseHistoryPage {

  emrs: any;
  hospital: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public token: TokenProvider,
              public api: ApiProvider,
              public toast: ToastController,
              public load: LoadingController,
              public casebook: CasebookProvider,
              public hos: HospitalProvider) {
    this.emrs = [];
    this.hospital = this.hos.getHospital()['hospitalName'];
    this.getRecords();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseHistoryPage');

  }
  add() {
    this.navCtrl.push(AddCaseHistoryPage);
  }

  getRecords() {
    let loader = this.load.create({
      content: '数据加载中,请稍后...'
    });
    loader.present();
    let emr = this.casebook.getBook();
    let that = this;
    $.get(this.api.getEmrRecord(),
      {token: this.token.getToken(),
      emrId: emr['emrId']},
      function (data) {
       loader.dismiss();
        if (data['code'] === 200) {
          that.emrs = data['map']['emrRecords'];
        }
      })
  }

  doRefresh(refresher) {
    refresher.cancel();
    this.getRecords();
  }

}
