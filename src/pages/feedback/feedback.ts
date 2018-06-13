import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";

import * as $ from 'jquery';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  title: string;
  desc: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public token: TokenProvider,
              public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submit() {
    if (this.title === '' || this.title == undefined) {
      this.toast.create({
        message: '标题不能为空',
        duration: 1000
      }).present();
      return;
    }
    if (this.desc === '' || this.desc === undefined) {
      this.toast.create({
        message: '标题不能为空',
        duration: 1000
      }).present();
      return;
    }
    let that = this;
    $.post(this.api.postFeedback(), {
      token: this.token.getToken(),
      title: this.title,
      description: this.desc
    }, function (data) {
      that.toast.create({
        message: data['info'],
        duration: 1000
      }).present();
    })
  }



}
