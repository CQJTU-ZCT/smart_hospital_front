import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams, AlertController} from 'ionic-angular';



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
              public alertCtrl: AlertController) {

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
    console.log(this.name);
    console.log(this.id_card);
    alert.present();
  }

}
