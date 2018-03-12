import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}

