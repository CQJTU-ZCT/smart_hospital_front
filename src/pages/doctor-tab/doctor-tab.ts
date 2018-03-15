import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctorPage} from "../doctor/doctor";

/**
 * Generated class for the DoctorTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-tab',
  templateUrl: 'doctor-tab.html',
})
export class DoctorTabPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorTabPage');
  }

  toDoctor($event) {
    console.log($event.target.offsetParent.getAttribute('data-doctor-id'));
    this.app.getRootNav().push(DoctorPage);
  }
}


