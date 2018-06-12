import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

import * as $ from 'jquery';
import {CasebookProvider} from "../../providers/casebook/casebook";
import {CaseHistoryPage} from "../case-history/case-history";

/**
 * Generated class for the CaseBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case-book',
  templateUrl: 'case-book.html',
})
export class CaseBookPage {

  books: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public load: LoadingController,
              public toast: ToastController,
              public token: TokenProvider,
              public casebook: CasebookProvider) {
    this.getEmrs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseBookPage');
  }

  add() {
    //添加电子病例数据
    let loader = this.load.create({
      content: '请稍后...'
    });
    loader.present();
    let that = this;
    $.post(this.api.postEmr(),
      {token: this.token.getToken()},
      function (data) {
        loader.dismiss();
        if (data['code'] === 200) {
          that.toast.create({
            message: '创建电子病历成功成功',
            duration: 1000
          }).present();
          that.getEmrs();
        }
      })
  }
  getEmrs() {
    let loader = this.load.create({
      content: '数据加载中，请稍后...'
    });
    loader.present();
    let that = this;
    $.get(this.api.getEmrs(),
      {token: this.token.getToken()},
      function (data) {
        loader.dismiss();
        if (data['code'] === 200) {
          that.books = data['map']['emrs'];
        } else {
          that.toast.create({
            message: '获取电子病历簿数据失败',
            duration: 1000
          }).present();
        }
      })
  }

  doRefresh(refresher) {
    refresher.cancel();
    this.getEmrs();
  }

  checkBook(book) {
    this.casebook.storeBook(book);
    this.navCtrl.push(CaseHistoryPage);
  }

}
