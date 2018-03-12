import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { MainTabPage } from "../main-tab/main-tab";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  routeLogin() {
    this.navCtrl.push(MainTabPage);
  }

  routeRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
