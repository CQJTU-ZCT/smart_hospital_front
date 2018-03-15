import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-list',
  templateUrl: 'appointment-list.html',
})
export class AppointmentListPage {
  records: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        title: '内科',
        time: '2018-04-21',
        status: '等待预约'
      },
      {
        title: '外科',
        time: '2018-05-21',
        status: '完成预约'
      },
      {
        title: '神经科',
        time: '2018-04-21',
        status: '等待预约'
      },
      {
        title: '脑科',
        time: '2018-04-21',
        status: '等待预约'
      }];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentListPage');
  }

  itemSelected(item: any) {
    console.log(item);
  }

}
