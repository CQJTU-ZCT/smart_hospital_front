import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  msg: any;

  appointments: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public token: TokenProvider,
              public api: ApiProvider) {
    this.msg = {
      title: '内科预约',
      describe: '预约成功',
      status: 0,
      time: '2018-04-21'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageTabPage');
    let that = this;
    $.get(this.api.getPreorders(),
      {token: this.token.getToken()},
      function (data) {
        console.log(data);
        that.appointments = data['map'];
      });
  }

  showMsg($event) {
    //获取点击dom对象的参数值
    console.log($event.target.offsetParent.getAttribute("data-msg"));
  }

}
