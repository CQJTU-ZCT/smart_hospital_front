import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctorPage} from "../doctor/doctor";

import * as $ from 'jquery';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

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
              public app: App,
              public api: ApiProvider,
              public token: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorTabPage');
    $.get(this.api.getDocters(),
      {token: this.token.getToken()},
      function (data) {
      console.log(data);
    })
  }

  toDoctor($event) {
    console.log($event.target.offsetParent.getAttribute('data-doctor-id'));
    this.app.getRootNav().push(DoctorPage);
  }
}


