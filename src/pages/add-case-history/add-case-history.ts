import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-case-history',
  templateUrl: 'add-case-history.html',
})
export class AddCaseHistoryPage {
  showAlert: boolean;

  // @ViewChild('alert')
  // alert: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.showAlert = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCaseHistoryPage');

  }

  dismiss() {
    var alert = document.getElementById("alert");
    alert.style.animation = "dismissing 2s";
  }

  close() {
    this.navCtrl.pop();
  }
  submit() {

  }

}
