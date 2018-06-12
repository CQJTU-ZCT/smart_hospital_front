import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import * as $ from 'jquery';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from "../../providers/token/token";
import {HttpClient, HttpClientModule, HttpHandler, HttpHeaders, HttpParams} from "@angular/common/http";

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
  records: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public token: TokenProvider,
              public load: LoadingController,
              public toast: ToastController,
              public alert: AlertController,
              public http: HttpClient) {
    this.records = [];
    this.getPreorder();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentListPage');
  }

  itemSelected(item: any) {
    let that = this;
    console.log(item);
    let content = "是否取消与" + item['doctor']['name'] + "医生的预约\n" + "电话：" + item['doctor']['phone'];
    var buttons = [
      {
        text: '不取消',
        role: 'cancel'
      },
      {
        text: '确认取消',
        handler: function () {
          let header = new HttpHeaders().set('token', that.token.getToken());
          let params = new HttpParams().set('orderId', item['preOrders']['orderId']);
          that.http.delete(that.api.deletePreorder(),
            {
              headers: header,
              params: params
            }).subscribe(value => {
              if (value['code'] === 200) {
                that.getPreorder();
              }
            },
            error => {
              console.log(error)
            });
        }
      }
    ];
    if (item['preorderStatus']['description'] !== '正常') {
      buttons = [
        {
          text: '确认',
          role: 'cancel'
        }
      ];
    }
    this.alert.create({
      title: '提示',
      subTitle: content,
      buttons: buttons
    }).present();
  }

  getPreorder() {
    let loader = this.load.create({
      content: "数据加载中,请稍后..."
    });
    let that = this;
    loader.present();
    $.get(this.api.getPreorders(),
      {token: this.token.getToken()},
      function (data) {
        loader.dismiss();
        if (data['code'] !== 200) {
          that.toast.create({
            message: '获取预约挂号数据失败...',
            duration: 1000
          }).present();
        } else {
          that.records = data['map']['preorders'];
        }
      })
  }

  doRefresh(refresher) {
    refresher.cancel();
    this.getPreorder();
  }

}
