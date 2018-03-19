import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Navbar} from "ionic-angular/umd/navigation/nav-interfaces";

/**
 * Generated class for the HospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  title: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = '新桥医院';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalPage');
    // this.navBar.setBackButtonText('');
  }

}
