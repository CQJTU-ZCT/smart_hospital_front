import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ImgPreviewPage} from "../img-preview/img-preview";

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }

  showImg($event) {
    let imgDialog = this.popCtrl.create(ImgPreviewPage,
      {
        src: $event.target.getAttribute('src')
    });
    imgDialog.present();

  }

}
