import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import * as $ from 'jquery';
import {ApiProvider} from "../../providers/api/api";
import {TokenProvider} from '../../providers/token/token';

/**
 * Generated class for the ChangeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-profile',
  templateUrl: 'change-profile.html',
})
export class ChangeProfilePage {
  profilePath: string;

  file: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public load: LoadingController,
              public toast: ToastController,
              public api: ApiProvider,
              public token: TokenProvider) {
    this.profilePath = this.navParams.get('profilePath');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeProfilePage');
  }

  choseFile() {
    $('#fileOpener').click();
  }

  fileChange() {
    //预览用户选择的图片
    let that = this;
    let fileObj = window.document.getElementById('fileOpener');
    let file = (fileObj as any).files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', function () {
      that.profilePath = reader.result;
    });
  }

  submit() {
    let loader = this.load.create({
      content: '头像上传中，请稍后...'
    });
    let that = this;
    let fileObj = window.document.getElementById('fileOpener');
    let file = (fileObj as any).files[0];
    if (file === null || file === undefined) {
      this.toast.create({
        message: '请选择文件',
        duration: 1000
      }).present();
    } else {
      loader.present();
      let formData = new FormData();
      formData.append('profile', file);
      formData.append('token', this.token.getToken());
      $.ajax({
        url: this.api.postFile(),
        type: 'POST',
        data: formData,
        dataType: 'JSON',
        cache: false,
        processData: false,  //不处理发送的数据，因为data值是FormData对象，不需要对数据做处理
        contentType: false   //不设置Content-type请求头
      }).done(function (data) {
        loader.dismiss();
        that.toast.create({
          message: data['info'],
          duration: 1000
        }).present();
        if (data['code'] === 200) {
          that.navCtrl.pop();
        }
      });
    }
  }

}
