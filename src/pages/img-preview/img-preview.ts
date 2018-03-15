import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImgPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img-preview',
  templateUrl: 'img-preview.html',
})
export class ImgPreviewPage {

  source: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.source = this.navParams.get("src");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPreviewPage');
  }

}
