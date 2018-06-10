import { Component } from '@angular/core';
import {
  AlertController, App, IonicPage, LoadingController, MenuController, NavController,
  NavParams, ToastController
} from 'ionic-angular';
import {HospitalPage} from "../hospital/hospital";
import {PersonalInfoPage} from "../personal-info/personal-info";
import {PrivateDoctorPage} from "../private-doctor/private-doctor";
import {CaseHistoryPage} from "../case-history/case-history";
import {BodyMassPage} from "../body-mass/body-mass";
import {TokenProvider} from "../../providers/token/token";
import {HomePage} from "../home/home";
import {HospitalProvider} from "../../providers/hospital/hospital";
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the HomeTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html',
})
export class HomeTabPage {

  profile: string;
  name: string;
  describe: string;

  hospitalData: any;

  loader: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public menu: MenuController,
              public token: TokenProvider,
              public loading: LoadingController,
              public hospital: HospitalProvider,
              public alert: AlertController,
              public toast: ToastController,
              public api: ApiProvider) {

    //init loader
    this.loader = this.loading.create({
      content: '数据加载中，请稍后...',
      spinner: 'Bubbles'
    });
    this.loader.present();

    if (!this.token.checkToken()) {
      this.navCtrl.push(HomePage);
    } else {
      console.log(this.token.getToken());
      console.log(this.token.getUser());
    }
    this.menu.enable(true);
    this.name = '程飘';
    this.profile = './assets/imgs/person_info.jpg';
    this.describe = 'cheng.bug@gmail.com';
    this.hospitalData = this.hospital.getHospital();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTabPage');
    this.loader.dismiss();
  }

  toHospital() {
    this.app.getRootNav().push(HospitalPage);
  }

  showMenu() {
   this.menu.toggle();
   console.log('button toggle menu clicked')
  }

  onItemClicked(which: Number) {
    console.log(which);
    switch (which) {
      case 0: {
        this.navCtrl.push(PersonalInfoPage);
        break;
      }
      case 1: {
        this.navCtrl.push(PrivateDoctorPage);
        break;
      }
      case 2: {
        this.navCtrl.push(CaseHistoryPage);
        break;
      }
      case 3: {
        this.navCtrl.push(BodyMassPage);
        break;
      }
      case 5: {
        let that = this;
        this.alert.create({
          title: '提示',
          subTitle: '是否需要呼救急救服务',
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: '确认',
              handler: () => {
                if (navigator.geolocation) {
                  console.log("开始定位");
                  let loading = that.loading.create({
                    content: "定位中..."
                  });
                  loading.present();
                  navigator.geolocation.getCurrentPosition(
                    function (pos) {
                      loading.dismiss();
                      $.post(that.api.postFirstAid(), {
                        token: that.token.getToken(),
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                      }, function (data) {
                        if (data['code'] === 200) {
                          that.toast.create({
                            message: '请求成功',
                            duration: 1000
                          }).present();
                        }
                      });
                    },
                    function (err) {
                      loading.dismiss();
                      if(err.code == 1) {
                        that.toast.create({
                          message: '请求定位被拒绝',
                          duration: 1000
                        }).present();
                      }else if( err.code == 2) {
                        that.toast.create({
                          message: '定位失败',
                          duration: 1000
                        }).present();
                      }
                    }
                  );
                } else {
                  that.toast.create({
                    message: '不支持定位',
                    duration: 1000
                  }).present();
                }
              }
            }
          ]
        }).present();
      }
    }
  }

}

