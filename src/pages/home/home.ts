import {Component} from '@angular/core';
import {AlertController, NavController, Platform} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {MainTabPage} from "../main-tab/main-tab";

import * as $ from "jquery";
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";
import {SelecthospitalPage} from "../selecthospital/selecthospital";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;
  remember: boolean;

  constructor(public navCtrl: NavController,
              public api: ApiProvider,
              public alertCtrl: AlertController,
              public token: TokenProvider) {
    this.remember = true;
  }

  routeLogin() {
    if (this.username === '' ||
      this.password === '') {
      this.alertCtrl.create({
        title: '提示',
        subTitle: '用户名或密码不能为空',
        buttons: ['确认']
      }).present();
    } else {
      let body = {
        username: this.username,
        password: this.password
      };
      let that = this;
      $.post(this.api.getLoginApi(),
             body,
             function (data) {
                that.handleLogin(data);
             });
    }
  }

  routeRegister() {
    this.navCtrl.push(RegisterPage);
  }

  handleLogin(data) {
    if (data['code'] === 1) {
      //store data
      let token = data['map']['token'];
      let user = JSON.stringify(data['map']['user']);
      this.token.storeToken(token);
      this.token.storeUser(user);
      this.navCtrl.push(SelecthospitalPage);
    } else {
      this.alertCtrl.create({
        title: '提示',
        subTitle: data['info'],
        buttons: ['确认']
      }).present();
    }
  }
}
