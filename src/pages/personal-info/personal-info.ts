import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditMedicalCardPage} from "../edit-medical-card/edit-medical-card";
import {TokenProvider} from "../../providers/token/token";

/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  medicalCard: any;

  user: any;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public token: TokenProvider) {
    this.medicalCard = {
      birth_date: '2018年03月19日',
      state: '慢性胃炎',
      note: '未列明',
      hypersensitivity: '未列明',
      medicine: '未列明',
      blood_type: 'O',
      weight: '65',
      height: '170'
    }
    this.user = JSON.parse(this.token.getUser());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

  edit() {
    this.navCtrl.push(EditMedicalCardPage)
  }

}
