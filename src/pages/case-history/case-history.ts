import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddCaseHistoryPage} from "../add-case-history/add-case-history";

/**
 * Generated class for the CaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case-history',
  templateUrl: 'case-history.html',
})
export class CaseHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseHistoryPage');
  }
  add() {
    this.navCtrl.push(AddCaseHistoryPage);
  }

}
