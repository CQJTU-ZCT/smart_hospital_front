import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";


import * as $ from "jquery";
import {ApiProvider} from "../../providers/api/api";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string;
  id_card: string;
  phone: string;
  email: string;
  paw: string;
  paw_confirm: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: HttpClient,
              public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let alert = this.alertCtrl.create({
      title: '提醒',
      subTitle: '您必须填写所有表项才能注册！',
      buttons: ['确认']
    });
    if ('' === this.name ||
      '' === this.id_card ||
      '' === this.phone ||
      '' === this.paw ||
      '' === this.email ||
      '' === this.paw_confirm ||
      this.paw_confirm !== this.paw) {
      alert.present();
      return;
    }


    // var resp: string;
    let body = {
      idCard: this.id_card,
      realname: this.name,
      phone: this.phone,
      mail: this.email,
      password: this.paw
    };
    $.post(
      this.api.getReigiterApi(), body, function (data) {
        console.log(data);
        if (data['code'] === 200) {
         alert.setSubTitle("注册成功，请前往登录");
         alert.present();
        } else {
          alert.setSubTitle(data['info']);
          alert.present();
        }
      }
    );
    // alert.present();
  }

  print(data: any) {
    console.log(data);
  }

  toLogin() {
    var that = this;
    return function () {
      that.navCtrl.pop();
    }
  }

}
