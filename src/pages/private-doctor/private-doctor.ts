import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, List, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PrivateDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-doctor',
  templateUrl: 'private-doctor.html',
})
export class PrivateDoctorPage {

  @ViewChild(Content) content: Content;

  msgList: any;

  userId: string;
  toUserId: string;

  hasPrivateDoctor: boolean;
  msg: string;


  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hasPrivateDoctor = true;
    this.userId = '140000198202211138';
    this.toUserId = '210000198410281948';
    this.msgList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateDoctorPage');
    this.scrollToBottom();
  }

  sendMsg() {
    var newmsg1 = {
      "messageId":"7",
      "userId":"140000198202211138",
      "userName":"Luff",
      "userImgUrl":"./assets/user.jpg",
      "toUserId":"210000198410281948",
      "toUserName":"Hancock",
      "userAvatar":"./assets/to-user.jpg",
      "time":1491231150000,
      "message":this.msg,
      "status":"success"
    };
    var newmsg2 = {
      "messageId":"5",
      "userId":"210000198410281948",
      "userName":"Hancock",
      "userImgUrl":"./assets/to-user.jpg",
      "toUserId":"140000198202211138",
      "toUserName":"Luff",
      "userAvatar":"./assets/user.jpg",
      "time":1491108720000,
      "message":this.msg,
      "status":"success"
    };
    this.msgList.push(newmsg1);
    this.msgList.push(newmsg2);
    this.msg = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400);
  }

  convertTime(date: string) {
    return new Date(date).toDateString();
  }

}
