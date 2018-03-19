import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivateDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-doctor',
  templateUrl: 'private-doctor.html',
})
export class PrivateDoctorPage {

  hasPrivateDoctor: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var i = Math.random();
    console.log(i);
    if (i % 2 === 0) {
      this.hasPrivateDoctor = true;
    } else {
      this.hasPrivateDoctor = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateDoctorPage');
  }

}
