import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

/**
 * Generated class for the CaseBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case-book',
  templateUrl: 'case-book.html',
})
export class CaseBookPage {

  books: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public load: LoadingController,
              public toast: ToastController,
              public token: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseBookPage');
  }

  add() {
    //添加电子病例数据

  }
  getEmrs() {

  }

  doRefresh(refresher) {

  }

}
