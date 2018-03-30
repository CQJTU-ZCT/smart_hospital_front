import { Component } from '@angular/core';
import {App, IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HospitalPage} from "../hospital/hospital";
import {PersonalInfoPage} from "../personal-info/personal-info";
import {PrivateDoctorPage} from "../private-doctor/private-doctor";
import {CaseHistoryPage} from "../case-history/case-history";

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

  hospitals: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public menu: MenuController) {
    this.menu.enable(true);
    this.name = '程飘';
    this.profile = '../../assets/imgs/person_info.jpg';
    this.describe = 'cheng.bug@gmail.com';
    this.hospitals = [{
        name: '新桥医院',
        img: '../../assets/imgs/person_info.jpg',
        add: '重庆市沙坪坝区',
        tel: '0231-321412'
      },
      {
        name: '西南医院',
        img: '../../assets/imgs/person_info.jpg',
        add: '重庆市沙坪坝区',
        tel: '0231-321412'
      },
      {
        name: '新桥医院',
        img: '../../assets/imgs/person_info.jpg',
        add: '重庆市沙坪坝区',
        tel: '0231-321412'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTabPage');
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
    }
  }

}

