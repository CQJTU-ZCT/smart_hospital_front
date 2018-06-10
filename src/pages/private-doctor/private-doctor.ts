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

  ws: any;

  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ws = new WebSocket("ws://10.0.0.8:8090/ws");
    this.ws.subscribe();
    this.hasPrivateDoctor = true;
    this.userId = '140000198202211138';
    this.toUserId = '210000198410281948';
    this.msgList = [
      {
        "messageId":"1",
        "userId":"140000198202211138",
        "userName":"Luff",
        "userImgUrl":"./assets/imgs/slide1.png",
        "toUserId":"210000198410281948",
        "toUserName":"Hancock",
        "userAvatar":"./assets/imgs/slide1.png",
        "time":1488349800000,
        "message":"A good programmer is someone who always looks both ways before crossing a one-way street. ",
        "status":"success"

      },
      {
        "messageId":"2",
        "userId":"210000198410281948",
        "userName":"Hancock",
        "userImgUrl":"./assets/imgs/slide2.jpg",
        "toUserId":"140000198202211138",
        "toUserName":"Luff",
        "userAvatar":"./assets/imgs/slide1.jpg",
        "time":1491034800000,
        "message":"Don’t worry if it doesn't work right. If everything did, you’d be out of a job.",
        "status":"success"
      },
      {
        "messageId":"3",
        "userId":"140000198202211138",
        "userName":"Luff",
        "userImgUrl":"./assets/imgs/slide1.jpg",
        "toUserId":"210000198410281948",
        "toUserName":"Hancock",
        "userAvatar":"./assets/imgs/slide2.jpg",
        "time":1491034920000,
        "message":"Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
        "status":"success"
      },
      {
        "messageId":"4",
        "userId":"210000198410281948",
        "userName":"Hancock",
        "userImgUrl":"./assets/to-user.jpg",
        "toUserId":"140000198202211138",
        "toUserName":"Luff",
        "userAvatar":"./assets/user.jpg",
        "time":1491036720000,
        "message":"One man’s crappy software is another man’s full time job.",
        "status":"success"
      },
      {
        "messageId":"5",
        "userId":"210000198410281948",
        "userName":"Hancock",
        "userImgUrl":"./assets/to-user.jpg",
        "toUserId":"140000198202211138",
        "toUserName":"Luff",
        "userAvatar":"./assets/user.jpg",
        "time":1491108720000,
        "message":"Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
        "status":"success"
      },
      {
        "messageId":"6",
        "userId":"140000198202211138",
        "userName":"Luff",
        "userImgUrl":"./assets/user.jpg",
        "toUserId":"210000198410281948",
        "toUserName":"Hancock",
        "userAvatar":"./assets/to-user.jpg",
        "time":1491231120000,
        "message":"If at first you don’t succeed, call it version 1.0",
        "status":"success"
      },
      {
        "messageId":"7",
        "userId":"140000198202211138",
        "userName":"Luff",
        "userImgUrl":"./assets/user.jpg",
        "toUserId":"210000198410281948",
        "toUserName":"Hancock",
        "userAvatar":"./assets/to-user.jpg",
        "time":1491231150000,
        "message":"The <textarea> tag defines a multi-line text input control.\nA text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).\nThe size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.",
        "status":"success"
      }
    ];
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
