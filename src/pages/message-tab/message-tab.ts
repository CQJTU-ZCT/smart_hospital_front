import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import * as $ from 'jquery';
import {TokenProvider} from "../../providers/token/token";
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the MessageTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-tab',
  templateUrl: 'message-tab.html',
})
export class MessageTabPage {

  records: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public token: TokenProvider,
              public api: ApiProvider,
              public alert: AlertController,
              public load: LoadingController,
              public toast: ToastController) {
    this.records = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageTabPage');
    this.getPreorder();
  }

  showMsg($event) {
    //获取点击dom对象的参数值
  }

  getPreorder() {
    let loader = this.load.create({
      content: "数据加载中,请稍后..."
    });
    let that = this;
    loader.present();
    $.get(this.api.getPreorders(),
      {token: this.token.getToken()},
      function (data) {
        loader.dismiss();
        if (data['code'] !== 200) {
          that.toast.create({
            message: '获取预约挂号数据失败...',
            duration: 1000
          }).present();
        } else {
          that.records = data['map']['preorders'];
        }
      })
  }

  doRefresh(refresher) {
    refresher.cancel();
    this.getPreorder();
  }

}
