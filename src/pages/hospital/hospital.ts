import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Navbar} from "ionic-angular/umd/navigation/nav-interfaces";
import {HospitalProvider} from "../../providers/hospital/hospital";

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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public hos: HospitalProvider) {
    this.title = this.hos['hospitalName'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalPage');
    // this.navBar.setBackButtonText('');
  }

}
