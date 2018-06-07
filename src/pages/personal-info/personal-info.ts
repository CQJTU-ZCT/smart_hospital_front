import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EditMedicalCardPage} from "../edit-medical-card/edit-medical-card";
import {TokenProvider} from "../../providers/token/token";
import * as $ from 'jquery';

/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  userInfo: any;

  user: any;

  accessToken: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public token: TokenProvider) {
    this.user = JSON.parse(this.token.getUser());
    this.accessToken = this.token.getToken();
    this.userInfo = {
      "users": {
        "idCard": "",
        "accountStatusId": 1,
        "roleId": 1,
        "realname": "",
        "phone": "",
        "password": "",
        "mail": ""
      },
      "accountStatus": {
        "accountStatusId": 1,
        "description": "正常"
      },
      "role": {
        "roleId": 1,
        "description": "普通用户"
      },
      "usersDetail": {
        "idCard": "",
        "nationId": 1,
        "photoId": null,
        "profileId": "",
        "sexId": 1,
        "address": "",
        "birthYMD": ""
      },
      "nation": {
        "nationId": 1,
        "nationDesc": "汉族"
      },
      "profile": {
        "profileId": "",
        "profilePath": ""
      },
      "photo": null
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
    let that = this;
    $.get('http://api.zjhfyq.cn/api-user/users/detail', {
        token: this.accessToken
      },
      function (data) {
        console.log(data);
        that.userInfo = data['map']['userDetail'];
        if (that.userInfo.nation === null ||
           that.userInfo.nation == undefined) {
           that.userInfo.nation = {
             nationId: 1,
             nationDesc: '汉族'
           }
        }
      });
  }

  edit() {
    this.navCtrl.push(EditMedicalCardPage)
  }

}
