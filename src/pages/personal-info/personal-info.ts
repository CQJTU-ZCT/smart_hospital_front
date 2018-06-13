import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, LoadingController, ToastController} from 'ionic-angular';
import {EditMedicalCardPage} from "../edit-medical-card/edit-medical-card";
import {TokenProvider} from "../../providers/token/token";
import {ChangeProfilePage} from '../change-profile/change-profile';
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
              public token: TokenProvider,
              public pop: PopoverController,
              public load: LoadingController,
              public toast: ToastController) {
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
    this.getUserDetail();

  }

  edit() {
    this.navCtrl.push(EditMedicalCardPage)
  }

  changeProfile() {
    this.pop.create(ChangeProfilePage, {
      profilePath: this.userInfo['profile']
    }).present();
  }

  doRefresh(refresher) {
    refresher.cancel();
    this.getUserDetail();
  }

  getUserDetail() {
    let loader = this.load.create({
      content: '数据加载中，请稍后'
    });
    loader.present();
    let that = this;
    $.get('https://api.zjhfyq.cn/api-user/users/detail', {
        token: this.accessToken
      },
      function (data) {
        loader.dismiss();
        if (data['code'] === 200) {
          that.userInfo = data['map']['userDetail'];
          if (that.userInfo.nation === null ||
            that.userInfo.nation == undefined) {
            that.userInfo.nation = {
              nationId: 1,
              nationDesc: '汉族'
            }
          }
          if (that.userInfo['profile'] === null ||
            that.userInfo['profile'] === '' ||
            that.userInfo['profile'] === undefined) {
            that.userInfo['profile'] = './assets/imgs/person_info.jpg';
          } else {
            that.userInfo['profile'] = 'https://api.zjhfyq.cn/api-file' +
              that.userInfo['profile']['profilePath'] + '?token=' + that.token.getToken();
          }
          that.userInfo['usersDetail']['birthYMD'] =
            (that.userInfo['usersDetail']['birthYMD'] as string).substring(0, 10);
          that.token.storeUserDetail(JSON.stringify(that.userInfo));
        } else {

          that.toast.create({
            message: '获取用户信息失败',
            duration: 1000
          }).present();
        }
      });
  }

}
