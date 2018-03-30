webpackJsonp([22],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_list_appointment_list__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AppointmentTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentTabPage = (function () {
    function AppointmentTabPage(navCtrl, navParams, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.app = app;
    }
    AppointmentTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentTabPage');
    };
    AppointmentTabPage.prototype.submit = function () {
        var toast = this.toastCtrl.create({
            message: '您的预约申请提交成功',
            showCloseButton: true,
            closeButtonText: '确认'
        });
        toast.present();
    };
    AppointmentTabPage.prototype.toList = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__appointment_list_appointment_list__["a" /* AppointmentListPage */]);
    };
    AppointmentTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appoinment-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/appoinment-tab/appoinment-tab.html"*/'<!--\n  Generated template for the AppointmentTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>预约挂号</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toList()">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label><span style="color: red">*</span>选择医院</ion-label>\n      <ion-select [(ngModel)]="hospital" submitText="确认" cancelText="取消">\n        <ion-option value="dos">DOS</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac7">Mac OS 7</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n        <ion-option value="win3.1">Windows 3.1</ion-option>\n        <ion-option value="win95">Windows 95</ion-option>\n        <ion-option value="win98">Windows 98</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><span style="color: red">*</span>选择科室</ion-label>\n      <ion-select [(ngModel)]="branch" submitText="确认" cancelText="取消">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>选择医生</ion-label>\n      <ion-select multiple [(ngModel)]="doctor" submitText="确认" cancelText="取消">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>预约时间</ion-label>\n      <ion-datetime displayFormat="YYYY年MM月DD日 HH时后"\n                    pickerFormat="YYYY 年 MM 月 DD 年 HH 时"\n                    [(ngModel)]="time"\n                    min="2018-03-14"\n                    cancelText="取消"\n                    doneText="确认"\n                    placeholder="点击选择预约时间"\n                    color="primary"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="primary" style="margin-top: 80px" (click)="submit()">预约</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/appoinment-tab/appoinment-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AppointmentTabPage);
    return AppointmentTabPage;
}());

//# sourceMappingURL=appoinment-tab.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppointmentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentListPage = (function () {
    function AppointmentListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            }
        ];
    }
    AppointmentListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentListPage');
    };
    AppointmentListPage.prototype.itemSelected = function (item) {
        console.log(item);
    };
    AppointmentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment-list',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/appointment-list/appointment-list.html"*/'<!--\n  Generated template for the AppointmentListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>预约记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <ion-list>\n   <button ion-item *ngFor="let record of records" (click)="itemSelected(record)">\n     <h2>{{record.title}}</h2>\n     <p>{{record.status}}</p>\n     <ion-note item-end>{{record.time}}</ion-note>\n   </button>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/appointment-list/appointment-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AppointmentListPage);
    return AppointmentListPage;
}());

//# sourceMappingURL=appointment-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_doctor__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoctorTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorTabPage = (function () {
    function DoctorTabPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    DoctorTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorTabPage');
    };
    DoctorTabPage.prototype.toDoctor = function ($event) {
        console.log($event.target.offsetParent.getAttribute('data-doctor-id'));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__doctor_doctor__["a" /* DoctorPage */]);
    };
    DoctorTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/doctor-tab/doctor-tab.html"*/'<!--\n  Generated template for the DoctorTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>在线医生</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="color-content">\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/slide1.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>西南医院</p>\n    </ion-item>\n    <ion-card-content>\n      <p>科室：耳鼻喉科</p>\n      <p>状态：值班</p>\n    </ion-card-content>\n    <div class="divider"></div>\n    <button data-doctor-id="2" ion-button clear full (click)="toDoctor($event)">预约</button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/doctor-tab/doctor-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], DoctorTabPage);
    return DoctorTabPage;
}());

//# sourceMappingURL=doctor-tab.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_preview_img_preview__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorPage = (function () {
    function DoctorPage(navCtrl, navParams, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popCtrl = popCtrl;
    }
    DoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorPage');
    };
    DoctorPage.prototype.showImg = function ($event) {
        var imgDialog = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_2__img_preview_img_preview__["a" /* ImgPreviewPage */], {
            src: $event.target.getAttribute('src')
        });
        imgDialog.present();
    };
    DoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/doctor/doctor.html"*/'<!--\n  Generated template for the DoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar text-center color="primary">\n    <ion-title>医生介绍</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div class="car-img-bg img-bg">\n      <img (click)="showImg($event)" src="http://www.xqhospital.com.cn/image/expertimages/21300601.jpg"/>\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n        郑宏庭\n      </ion-card-title>\n      <p>\n        <ion-chip>\n          <ion-icon name="flash" color="primary"></ion-icon>\n          <ion-label>职称:</ion-label>\n        </ion-chip>\n        科室主任，博士研究生导师，美国亚利桑那大学博士后\n      </p>\n      <div class="divider"></div>\n      <p>\n        <ion-chip>\n          <ion-icon name="analytics" color="primary"></ion-icon>\n          <ion-label>主要擅长：</ion-label>\n        </ion-chip>\n        糖尿病自体骨髓干细胞移植治疗，糖尿病及并发症诊治, 自身免疫性甲状腺疾病的诊治。\n      </p>\n      <div class="divider"></div>\n      <p>\n        <ion-chip>\n          <ion-icon name="clock" color="primary"></ion-icon>\n          <ion-label>门诊时间：</ion-label>\n        </ion-chip>\n        周二、周四上午\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-label><span style="color: red">*</span>选择科室</ion-label>\n      <ion-select [(ngModel)]="branch" submitText="确认" cancelText="取消">\n        <ion-option value="enable" [selected]="true">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>预约时间</ion-label>\n      <ion-datetime displayFormat="YYYY年MM月DD日 HH时后"\n                    pickerFormat="YYYY 年 MM 月 DD 年 HH 时"\n                    [(ngModel)]="time"\n                    min="2018-03-14"\n                    cancelText="取消"\n                    doneText="确认"\n                    placeholder="点击选择预约时间"\n                    color="primary"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="primary" style="margin-top: 50px" (click)="submit()">预约</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/doctor/doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
    ], DoctorPage);
    return DoctorPage;
}());

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImgPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImgPreviewPage = (function () {
    function ImgPreviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.source = this.navParams.get("src");
    }
    ImgPreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImgPreviewPage');
    };
    ImgPreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-img-preview',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/img-preview/img-preview.html"*/'<!--\n  Generated template for the ImgPreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img src="{{source}}">\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/img-preview/img-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ImgPreviewPage);
    return ImgPreviewPage;
}());

//# sourceMappingURL=img-preview.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMedicalCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditMedicalCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditMedicalCardPage = (function () {
    function EditMedicalCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicalCard = {
            state: '慢性胃炎',
            note: '未列明',
            hypersensitivity: '未列明',
            medicine: '未列明',
            blood_type: 'O',
            weight: '65',
            height: '170'
        };
        this.weight = [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0, 18.5, 19.0, 19.5, 20.0, 20.5, 21.0, 21.5, 22.0, 22.5, 23.0, 23.5, 24.0, 24.5, 25.0, 25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 28.5, 29.0, 29.5, 30.0, 30.5, 31.0, 31.5, 32.0, 32.5, 33.0, 33.5, 34.0, 34.5, 35.0, 35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5, 40.0, 40.5, 41.0, 41.5, 42.0, 42.5, 43.0, 43.5, 44.0, 44.5, 45.0, 45.5, 46.0, 46.5, 47.0, 47.5, 48.0, 48.5, 49.0, 49.5, 50.0, 50.5, 51.0, 51.5, 52.0, 52.5, 53.0, 53.5, 54.0, 54.5, 55.0, 55.5, 56.0, 56.5, 57.0, 57.5, 58.0, 58.5, 59.0, 59.5, 60.0, 60.5, 61.0, 61.5, 62.0, 62.5, 63.0, 63.5, 64.0, 64.5, 65.0, 65.5, 66.0, 66.5, 67.0, 67.5, 68.0, 68.5, 69.0, 69.5, 70.0, 70.5, 71.0, 71.5, 72.0, 72.5, 73.0, 73.5, 74.0, 74.5, 75.0, 75.5, 76.0, 76.5, 77.0, 77.5, 78.0, 78.5, 79.0, 79.5, 80.0, 80.5, 81.0, 81.5, 82.0, 82.5, 83.0, 83.5, 84.0, 84.5, 85.0, 85.5, 86.0, 86.5, 87.0, 87.5, 88.0, 88.5, 89.0, 89.5, 90.0, 90.5, 91.0, 91.5, 92.0, 92.5, 93.0, 93.5, 94.0, 94.5, 95.0, 95.5, 96.0, 96.5, 97.0, 97.5, 98.0, 98.5, 99.0, 99.5, 100.0, 100.5, 101.0, 101.5, 102.0, 102.5, 103.0, 103.5, 104.0, 104.5, 105.0, 105.5, 106.0, 106.5, 107.0, 107.5, 108.0, 108.5, 109.0, 109.5, 110.0, 110.5, 111.0, 111.5, 112.0, 112.5, 113.0, 113.5, 114.0, 114.5, 115.0, 115.5, 116.0, 116.5, 117.0, 117.5, 118.0, 118.5, 119.0, 119.5, 120.0, 120.5, 121.0, 121.5, 122.0, 122.5, 123.0, 123.5, 124.0, 124.5, 125.0, 125.5, 126.0, 126.5, 127.0, 127.5, 128.0, 128.5, 129.0, 129.5, 130.0, 130.5, 131.0, 131.5, 132.0, 132.5, 133.0, 133.5, 134.0, 134.5, 135.0, 135.5, 136.0, 136.5, 137.0, 137.5, 138.0, 138.5, 139.0, 139.5, 140.0, 140.5, 141.0, 141.5, 142.0, 142.5, 143.0, 143.5, 144.0, 144.5, 145.0, 145.5, 146.0, 146.5, 147.0, 147.5, 148.0, 148.5, 149.0, 149.5, 150.0, 150.5, 151.0, 151.5, 152.0, 152.5, 153.0, 153.5, 154.0, 154.5, 155.0, 155.5, 156.0, 156.5, 157.0, 157.5, 158.0, 158.5, 159.0, 159.5, 160.0, 160.5, 161.0, 161.5, 162.0, 162.5, 163.0, 163.5, 164.0, 164.5, 165.0, 165.5, 166.0, 166.5, 167.0, 167.5, 168.0, 168.5, 169.0, 169.5, 170.0, 170.5, 171.0, 171.5, 172.0, 172.5, 173.0, 173.5, 174.0, 174.5, 175.0, 175.5, 176.0, 176.5, 177.0, 177.5, 178.0, 178.5, 179.0, 179.5, 180.0, 180.5, 181.0, 181.5, 182.0, 182.5, 183.0, 183.5, 184.0, 184.5, 185.0, 185.5, 186.0, 186.5, 187.0, 187.5, 188.0, 188.5, 189.0, 189.5, 190.0, 190.5, 191.0, 191.5, 192.0, 192.5, 193.0, 193.5, 194.0, 194.5, 195.0, 195.5, 196.0, 196.5, 197.0, 197.5, 198.0, 198.5, 199.0, 199.5, 200.0];
        this.height = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250];
    }
    EditMedicalCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditMedicalCardPage');
    };
    EditMedicalCardPage.prototype.submit = function () {
        console.log(this.medicalCard);
    };
    EditMedicalCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-medical-card',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/edit-medical-card/edit-medical-card.html"*/'<!--\n  Generated template for the EditMedicalCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>修改医疗急救卡</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked="">医疗状况</ion-label>\n      <ion-input type="text" [(ngModel)]="medicalCard.state"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">医疗笔记</ion-label>\n      <ion-input type="text" [(ngModel)]="medicalCard.note"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">过敏反应</ion-label>\n      <ion-input type="text" [(ngModel)]="medicalCard.hypersensitivity"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">药物使用</ion-label>\n      <ion-input type="text" [(ngModel)]="medicalCard.medicine"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">血型</ion-label>\n      <ion-select [(ngModel)]="medicalCard.blood_type" cancelText="取消" okText="确认">\n        <ion-option value="A">A型</ion-option>\n        <ion-option value="B">B型</ion-option>\n        <ion-option value="AB">AB型</ion-option>\n        <ion-option value="O">O型</ion-option>\n        <ion-option value="Rh">Rh阴性型</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked="">体重</ion-label>\n      <ion-select [(ngModel)]="medicalCard.weight" cancelText="取消" okText="确认!">\n        <ion-option *ngFor="let i of weight" value="{{i}}">{{i}} kg</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked="">身高</ion-label>\n      <ion-select [(ngModel)]="medicalCard.height" cancelText="取消" okText="确认!">\n        <ion-option *ngFor="let i of height" value="{{i}}">{{i}} cm</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/edit-medical-card/edit-medical-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditMedicalCardPage);
    return EditMedicalCardPage;
}());

//# sourceMappingURL=edit-medical-card.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospital_hospital__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_info_personal_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__private_doctor_private_doctor__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__case_history_case_history__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomeTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeTabPage = (function () {
    function HomeTabPage(navCtrl, navParams, app, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.menu = menu;
        this.menu.enable(true);
        this.name = '程飘';
        this.profile = '../../assets/imgs/person_info.jpg';
        this.describe = 'cheng.bug@gmail.com';
        this.hospitals = [{
                name: '新桥医院',
                img: '../../assets/imgs/person_info.jpg',
                add: '重庆市沙坪坝区',
                tel: '0231-321412'
            },
            {
                name: '西南医院',
                img: '../../assets/imgs/person_info.jpg',
                add: '重庆市沙坪坝区',
                tel: '0231-321412'
            },
            {
                name: '新桥医院',
                img: '../../assets/imgs/person_info.jpg',
                add: '重庆市沙坪坝区',
                tel: '0231-321412'
            }
        ];
    }
    HomeTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeTabPage');
    };
    HomeTabPage.prototype.toHospital = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__hospital_hospital__["a" /* HospitalPage */]);
    };
    HomeTabPage.prototype.showMenu = function () {
        this.menu.toggle();
        console.log('button toggle menu clicked');
    };
    HomeTabPage.prototype.onItemClicked = function (which) {
        console.log(which);
        switch (which) {
            case 0: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personal_info_personal_info__["a" /* PersonalInfoPage */]);
                break;
            }
            case 1: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__private_doctor_private_doctor__["a" /* PrivateDoctorPage */]);
                break;
            }
            case 2: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__case_history_case_history__["a" /* CaseHistoryPage */]);
                break;
            }
        }
    };
    HomeTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/home-tab/home-tab.html"*/'<!--\n  Generated template for the HomeTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only clear>\n      <ion-icon name=\'person\'></ion-icon>\n    </button>\n    <ion-title text-center>智慧医院</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu type="overlay" id="my-menu" [content]="content">\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img src="{{profile}}"/>\n      <div class="card-title">{{name}}</div>\n      <div class="card-subtitle">{{describe}}</div>\n    </ion-card>\n    <ion-list>\n      <button ion-item (tap)="onItemClicked(0)">\n        个人信息\n      </button>\n      <button ion-item (tap)="onItemClicked(1)">\n        专属医生\n      </button>\n      <button ion-item (tap)="onItemClicked(2)">\n        电子病历\n      </button>\n      <button ion-item (tap)="onItemClicked(3)">\n        身体体征\n      </button>\n      <button ion-item (tap)="onItemClicked(4)">\n        医疗进度\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content class="color-content">\n\n  <ion-slides pager>\n\n    <ion-slide (tap)="toHospital()">\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-list *ngFor="let hospital of hospitals">\n    <ion-card>\n      <img class="hospital-img" src="{{hospital.img}}">\n      <div class="hospital-name">{{hospital.name}}</div>\n      <div class="item">\n        <ion-icon name="navigate" item-start small></ion-icon>\n        <p>{{hospital.add}}</p>\n      </div>\n\n      <div class="item">\n        <ion-icon name="call" item-left small></ion-icon>\n        <p>{{hospital.tel}}</p>\n      </div>\n      <div class="divider"></div>\n      <button ion-button full clear>\n        查看详情\n      </button>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/home-tab/home-tab.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object])
    ], HomeTabPage);
    return HomeTabPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HospitalPage = (function () {
    function HospitalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = '新桥医院';
    }
    HospitalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HospitalPage');
        // this.navBar.setBackButtonText('');
    };
    HospitalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospital',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/hospital/hospital.html"*/'<!--\n  Generated template for the HospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <ion-slides pager>\n\n    <ion-slide>\n      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=592c0a4b8ad4b31ce4319ce9e6bf4c1a/54fbb2fb43166d225c8b049c472309f79052d23d.jpg">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=3a4e8dd48b13632701e0ca61f0e6cb89/500fd9f9d72a60590ebcf0122934349b033bba0d.jpg">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=441df538bba1cd1111bb7a72d87ba399/0824ab18972bd407893bc2f57a899e510fb3093d.jpg">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>\n  <ion-card>\n    <ion-card-header>\n      医院简介\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>第三军医大学新桥医院是地方对第三军医大学第二附属医院\n        的称谓，设在重庆市沙坪坝区，现已成为一所综合性现代化教学医院。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      历史沿革\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>新桥医院是第三军医大学第二附属医院，始建于1944年，前身是国民党军\n        政部陆军医院，1950年改编为西南军区总医院，1955年转隶第七军医大学，\n        为第二附属医院，对外称新桥医院。1975年改称第三军医大学第二附属医院，\n        现址由贺龙、邓小平等老一辈革命家亲自选定。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      特色科室\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>医院设有临床和医技科室45个，国家级重点学科10个（呼吸内科、心血管内科、\n        心血管外科、骨科、泌尿外科、神经外科、普通外科、肝胆外科、胸外科、整形外\n        科），国家中医药管理局重点建设专科1个（中西医结合肾脏病重点建设专科），\n        全军医学研究所4个（呼吸、心内、心外、肿瘤），全军医学专科（病）中心6个（\n        肾内、超声、骨科、神外、血液、口腔），优生优育中心学科3个（妇产、儿科、泌外）\n        。医院是临床医学博士后流动站，有博士学位授权点学科22个、硕士学位授权点学科2\n        8个。有6个重庆市质量控制中心（血液内科医疗质量控制中心、肾移植质控中心、\n        心脏大血管外科（含心脏移植）医疗质量控制中心、美容外科质量控制中心、\n        临床输血质量控制中心、护理质量控制中心）。</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/hospital/hospital.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HospitalPage);
    return HospitalPage;
}());

//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_medical_card_edit_medical_card__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicalCard = {
            birth_date: '2018年03月19日',
            state: '慢性胃炎',
            note: '未列明',
            hypersensitivity: '未列明',
            medicine: '未列明',
            blood_type: 'O',
            weight: '65',
            height: '170'
        };
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
    };
    PersonalInfoPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */]);
    };
    PersonalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-info',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/personal-info/personal-info.html"*/'<!--\n  Generated template for the PersonalInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>个人信息</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="edit()">\n        <ion-icon name="medical"></ion-icon>\n        修改\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <div class="head">\n    <ion-item no-lines>\n      <ion-avatar>\n        <img src="../../assets/imgs/person_info.jpg">\n      </ion-avatar>\n    </ion-item>\n  </div>\n\n  <ion-card>\n    <ion-card-content style="margin-top: 15px">\n      <ion-card-title>\n        程飘\n        <ion-icon name="male" color="primary"></ion-icon>\n      </ion-card-title>\n      <p>\n        重庆市南岸区学府大道69号\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title text-center color="danger">\n        <ion-icon name="medical"></ion-icon>\n        医疗急救卡\n      </ion-card-title>\n      <p>医疗急救卡可在您出现注入过敏反应和医疗状况等紧急情况时，提供您的重要医疗信息。</p>\n      <hr>\n      <p>\n        <ion-label>出生日期</ion-label>\n        {{medicalCard.birth_date}}\n      </p>\n      <p>\n        <ion-label>医疗状况</ion-label>\n        {{medicalCard.state}}\n      </p>\n      <p>\n        <ion-label>医疗笔记</ion-label>\n        {{medicalCard.note}}\n      </p>\n      <p>\n        <ion-label>过敏反应</ion-label>\n        {{medicalCard.hypersensitivity}}\n      </p>\n      <p>\n        <ion-label>药物使用</ion-label>\n        {{medicalCard.medicine}}\n      </p>\n      <p>\n        <ion-label>血型</ion-label>\n        {{medicalCard.blood_type}} 型\n      </p>\n      <p>\n        <ion-label>体重</ion-label>\n        {{medicalCard.weight}} KG\n      </p>\n      <p>\n        <ion-label>身高</ion-label>\n        {{medicalCard.height}} CM\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/personal-info/personal-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PersonalInfoPage);
    return PersonalInfoPage;
}());

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tab_home_tab__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_tab_doctor_tab__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appoinment_tab_appoinment_tab__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_tab_message_tab__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MainTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainTabPage = (function () {
    function MainTabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeTabRoot = __WEBPACK_IMPORTED_MODULE_2__home_tab_home_tab__["a" /* HomeTabPage */];
        this.doctorTabRoot = __WEBPACK_IMPORTED_MODULE_3__doctor_tab_doctor_tab__["a" /* DoctorTabPage */];
        this.appointmentTabPageRoot = __WEBPACK_IMPORTED_MODULE_4__appoinment_tab_appoinment_tab__["a" /* AppointmentTabPage */];
        this.messageTabRoot = __WEBPACK_IMPORTED_MODULE_5__message_tab_message_tab__["a" /* MessageTabPage */];
    }
    MainTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/main-tab/main-tab.html"*/'<ion-tabs>\n    <ion-tab [root]="homeTabRoot" tabTitle="首页" tabIcon="home"></ion-tab>\n    <ion-tab [root]="doctorTabRoot" tabTitle="在线医生" tabIcon="medical"></ion-tab>\n    <ion-tab [root]="appointmentTabPageRoot" tabTitle="预约挂号" tabIcon="pulse"></ion-tab>\n    <ion-tab [root]="messageTabRoot" tabBadge="14" tabBadgeStyle="danger" tabTitle="消息中心" tabIcon="mail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/main-tab/main-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], MainTabPage);
    return MainTabPage;
}());

//# sourceMappingURL=main-tab.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessageTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageTabPage = (function () {
    function MessageTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msg = {
            title: '内科预约',
            describe: '预约成功',
            status: 0,
            time: '2018-04-21'
        };
    }
    MessageTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageTabPage');
    };
    MessageTabPage.prototype.showMsg = function ($event) {
        //获取点击dom对象的参数值
        console.log($event.target.offsetParent.getAttribute("data-msg"));
    };
    MessageTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/message-tab/message-tab.html"*/'<!--\n  Generated template for the MessageTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>消息中心</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item data-msg="4" (click)="showMsg($event)">\n      <ion-badge class="i-badge" color="danger" item-start> </ion-badge>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </button>\n    <ion-item>\n      <ion-badge [ngStyle]="{\'background-color\': msg.status ? \'red\' : \'transparent\'}" class="i-badge" item-start> </ion-badge>\n      <h2>{{msg.title}}</h2>\n      <p>{{msg.describe}}</p>\n      <ion-note item-end>{{msg.time}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/message-tab/message-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MessageTabPage);
    return MessageTabPage;
}());

//# sourceMappingURL=message-tab.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var alert = this.alertCtrl.create({
            title: '提醒',
            subTitle: '您必须填写所有表项才能注册！',
            buttons: ['确认']
        });
        console.log(this.name);
        console.log(this.id_card);
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar text-center color="primary">\n    <ion-title>注册</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content scroll="false" class="color-content" padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>姓名</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>身份证号码</ion-label>\n      <ion-input type="text" [(ngModel)]="id_card"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>电话号码</ion-label>\n      <ion-input type="text" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>电子邮箱</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>输入密码</ion-label>\n      <ion-input type="password" [(ngModel)]="paw"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="paw_confirm"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="register()">确认注册</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		288,
		5
	],
	"../pages/add-case-history/add-case-history.module": [
		289,
		21
	],
	"../pages/appoinment-tab/appoinment-tab.module": [
		290,
		20
	],
	"../pages/appointment-list/appointment-list.module": [
		291,
		19
	],
	"../pages/body-mass/body-mass.module": [
		292,
		4
	],
	"../pages/case-history/case-history.module": [
		293,
		18
	],
	"../pages/cure-progress/cure-progress.module": [
		294,
		3
	],
	"../pages/doctor-tab/doctor-tab.module": [
		295,
		17
	],
	"../pages/doctor/doctor.module": [
		297,
		16
	],
	"../pages/edit-medical-card/edit-medical-card.module": [
		296,
		15
	],
	"../pages/edit-personal-info/edit-personal-info.module": [
		299,
		2
	],
	"../pages/home-tab/home-tab.module": [
		298,
		14
	],
	"../pages/hospital/hospital.module": [
		300,
		13
	],
	"../pages/img-preview/img-preview.module": [
		301,
		12
	],
	"../pages/main-tab/main-tab.module": [
		302,
		11
	],
	"../pages/message-tab/message-tab.module": [
		303,
		10
	],
	"../pages/pay-platform/pay-platform.module": [
		304,
		1
	],
	"../pages/personal-info/personal-info.module": [
		305,
		9
	],
	"../pages/private-doctor/private-doctor.module": [
		306,
		8
	],
	"../pages/register/register.module": [
		307,
		7
	],
	"../pages/sos/sos.module": [
		308,
		0
	],
	"../pages/welcom/welcom.module": [
		309,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tab_main_tab__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.routeLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_tab_main_tab__["a" /* MainTabPage */]);
    };
    HomePage.prototype.routeRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true" text-center color="primary">\n    <ion-title>\n      智慧医院\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false" id="login-container" padding>\n  <div id="login-bg">\n    <ion-list id="login-ion-list">\n      <ion-item>\n        <ion-label floating>身份证号码或者手机号码</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>密码</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>记住登录状态</ion-label>\n        <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <button ion-button class="md" [full]="true" (click)="routeLogin()">登录</button>\n    <p text-center>\n      <a (click)="routeRegister()">没有帐号？点我注册</a>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_case_history_add_case_history__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaseHistoryPage = (function () {
    function CaseHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CaseHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaseHistoryPage');
    };
    CaseHistoryPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_case_history_add_case_history__["a" /* AddCaseHistoryPage */]);
    };
    CaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-case-history',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/case-history/case-history.html"*/'<!--\n  Generated template for the CaseHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>电子病历数据</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines class="color-content">\n    <ion-list-header class="m-list-header">\n      2014年12月\n    </ion-list-header>\n    <ion-card class="case-card">\n      <ion-card-header text-center>\n        <ion-icon name="logo-buffer"></ion-icon>\n        就诊记录\n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n        <div class="case-item">\n          <label class="case-title">病&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情:</label>\n          <p class="case-info">眼组织受损</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">治疗医院:</label>\n          <p class="case-info">新桥医院</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室:</label>\n          <p class="case-info">眼科</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">大&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夫:</label>\n          <p class="case-info">李医生</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间:</label>\n          <p class="case-info">2014年04月21日</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">治疗记录:</label>\n          <p class="case-info">眼部修复dasdawdas92noiwaoihdioasxasidhaio安后iOS点好IDhi哦撒hi哦点撒好i哦大海哦我</p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n    <ion-item>Blade Runner</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/case-history/case-history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
    ], CaseHistoryPage);
    return CaseHistoryPage;
    var _a, _b;
}());

//# sourceMappingURL=case-history.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivateDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivateDoctorPage = (function () {
    function PrivateDoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hasPrivateDoctor = true;
        this.userId = '140000198202211138';
        this.toUserId = '210000198410281948';
        this.msgList = [
            {
                "messageId": "1",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "../../assets/imgs/slide1.png",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "../../assets/imgs/slide1.png",
                "time": 1488349800000,
                "message": "A good programmer is someone who always looks both ways before crossing a one-way street. ",
                "status": "success"
            },
            {
                "messageId": "2",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491034800000,
                "message": "Don’t worry if it doesn't work right. If everything did, you’d be out of a job.",
                "status": "success"
            },
            {
                "messageId": "3",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1491034920000,
                "message": "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
                "status": "success"
            },
            {
                "messageId": "4",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491036720000,
                "message": "One man’s crappy software is another man’s full time job.",
                "status": "success"
            },
            {
                "messageId": "5",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491108720000,
                "message": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
                "status": "success"
            },
            {
                "messageId": "6",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1491231120000,
                "message": "If at first you don’t succeed, call it version 1.0",
                "status": "success"
            },
            {
                "messageId": "7",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1491231150000,
                "message": "The <textarea> tag defines a multi-line text input control.\nA text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).\nThe size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.",
                "status": "success"
            }
        ];
    }
    PrivateDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivateDoctorPage');
        this.scrollToBottom();
    };
    PrivateDoctorPage.prototype.sendMsg = function () {
        var newmsg1 = {
            "messageId": "7",
            "userId": "140000198202211138",
            "userName": "Luff",
            "userImgUrl": "./assets/user.jpg",
            "toUserId": "210000198410281948",
            "toUserName": "Hancock",
            "userAvatar": "./assets/to-user.jpg",
            "time": 1491231150000,
            "message": this.msg,
            "status": "success"
        };
        var newmsg2 = {
            "messageId": "5",
            "userId": "210000198410281948",
            "userName": "Hancock",
            "userImgUrl": "./assets/to-user.jpg",
            "toUserId": "140000198202211138",
            "toUserName": "Luff",
            "userAvatar": "./assets/user.jpg",
            "time": 1491108720000,
            "message": this.msg,
            "status": "success"
        };
        this.msgList.push(newmsg1);
        this.msgList.push(newmsg2);
        this.msg = '';
        this.scrollToBottom();
    };
    PrivateDoctorPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    PrivateDoctorPage.prototype.convertTime = function (date) {
        return new Date(date).toDateString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], PrivateDoctorPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* List */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* List */])
    ], PrivateDoctorPage.prototype, "list", void 0);
    PrivateDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-private-doctor',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/private-doctor/private-doctor.html"*/'<!--\n  Generated template for the PrivateDoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>专属医生</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content" *ngIf="!hasPrivateDoctor">\n  <ion-card>\n    <ion-card-content>\n      <img src="../../assets/imgs/oops.png">\n      <p style="color: #488aff">您还没有匹配任何专属医生，请点击下方按钮进入私人医生匹配系统</p>\n    </ion-card-content>\n    <button ion-button color="primary" full>寻找专属医生</button>\n  </ion-card>\n</ion-content>\n\n\n<ion-content class="color-content" *ngIf="hasPrivateDoctor">\n  <header class="head-info">\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/person_info.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n        <p>\n          <ion-icon name="md-disc" style="color: deepskyblue"></ion-icon>\n          在线\n        </p>\n      </ion-item>\n    </ion-card>\n  </header>\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of msgList"\n         class="message"\n         [class.left]=" msg.userId === toUserId "\n         [class.right]=" msg.userId === userId ">\n      <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{convertTime(msg.time)}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.message}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-item>\n    <button ion-button small clear icon-only item-left (click)="switchEmojiPicker()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n    <ion-textarea placeholder="输入文本信息" [(ngModel)]="msg">\n    </ion-textarea>\n    <button small ion-button outline item-right (click)="sendMsg()">\n      发送\n    </button>\n  </ion-item>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/private-doctor/private-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PrivateDoctorPage);
    return PrivateDoctorPage;
}());

//# sourceMappingURL=private-doctor.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomPage = (function () {
    function WelcomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomPage');
    };
    WelcomPage.prototype.start = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WelcomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcom',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/welcom/welcom.html"*/'<!--\n  Generated template for the WelcomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide id="slide1">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>专属医生</h1>\n        </div>\n        <p>美国的医疗产业高度发达，创新能力十分突出，不断涌现各种治疗新技术和新手段，\n          尤其是在药品研发和诊疗设备研发上。比如近几年推出的一种新型的外科微创手术设备，\n          达芬奇系统，这种设备与常规手术相比，损伤小，见效快，效果更好，美国已经普及好几年了。</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide id="slide2">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>治疗跟踪</h1>\n        </div>\n        <p>不断推陈出新的先进的医疗理念已经渗透到美国医疗的各个方面并发挥着极其重要的指导作用，\n          往往要比单纯的医疗技术创新和突破更为重要。</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide id="slide3">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>电子病历</h1>\n        </div>\n        <p>美国最新的技术利用免疫/化学方法切断癌组织血供，不用大型手术就可以控制癌症；\n          一些严重哮喘患者，任何药物都不能彻底缓解病情。美国最新的微创手术治疗通过切\n          除部分呼吸道平滑肌，可以彻底根治哮喘。</p>\n      </div>\n\n    </ion-slide>\n\n    <ion-slide id="slide4">\n      <h1>大智慧医疗服务</h1>\n      <h2>就在现在</h2>\n      <button ion-button class="start-button" (click)="start()"  full color="primary">开始</button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/welcom/welcom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], WelcomPage);
    return WelcomPage;
}());

//# sourceMappingURL=welcom.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_tab_main_tab__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_doctor_tab_doctor_tab__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_tab_home_tab__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_appoinment_tab_appoinment_tab__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcom_welcom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_tab_message_tab__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hospital_hospital__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_doctor_doctor__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_img_preview_img_preview__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_personal_info_personal_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_medical_card_edit_medical_card__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_private_doctor_private_doctor__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_emoji__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_case_history_case_history__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_case_history_add_case_history__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_doctor_tab_doctor_tab__["a" /* DoctorTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_appoinment_tab_appoinment_tab__["a" /* AppointmentTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcom_welcom__["a" /* WelcomPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_tab_message_tab__["a" /* MessageTabPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hospital_hospital__["a" /* HospitalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_img_preview_img_preview__["a" /* ImgPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_private_doctor_private_doctor__["a" /* PrivateDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_case_history_case_history__["a" /* CaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_case_history_add_case_history__["a" /* AddCaseHistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    // add global configuration here
                    tabsHideOnSubPages: 'true',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-case-history/add-case-history.module#AddCaseHistoryPageModule', name: 'AddCaseHistoryPage', segment: 'add-case-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appoinment-tab/appoinment-tab.module#AppoinmentTabPageModule', name: 'AppointmentTabPage', segment: 'appoinment-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-list/appointment-list.module#AppointmentListPageModule', name: 'AppointmentListPage', segment: 'appointment-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/body-mass/body-mass.module#BodyMassPageModule', name: 'BodyMassPage', segment: 'body-mass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-history/case-history.module#CaseHistoryPageModule', name: 'CaseHistoryPage', segment: 'case-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cure-progress/cure-progress.module#CureProgressPageModule', name: 'CureProgressPage', segment: 'cure-progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-tab/doctor-tab.module#DoctorTabPageModule', name: 'DoctorTabPage', segment: 'doctor-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-medical-card/edit-medical-card.module#EditMedicalCardPageModule', name: 'EditMedicalCardPage', segment: 'edit-medical-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor/doctor.module#DoctorPageModule', name: 'DoctorPage', segment: 'doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabPageModule', name: 'HomeTabPage', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-personal-info/edit-personal-info.module#EditPersonalInfoPageModule', name: 'EditPersonalInfoPage', segment: 'edit-personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospital/hospital.module#HospitalPageModule', name: 'HospitalPage', segment: 'hospital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/img-preview/img-preview.module#ImgPreviewPageModule', name: 'ImgPreviewPage', segment: 'img-preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tab/main-tab.module#MainTabPageModule', name: 'MainTabPage', segment: 'main-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-tab/message-tab.module#MessageTabPageModule', name: 'MessageTabPage', segment: 'message-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-platform/pay-platform.module#PayPlatformPageModule', name: 'PayPlatformPage', segment: 'pay-platform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-doctor/private-doctor.module#PrivateDoctorPageModule', name: 'PrivateDoctorPage', segment: 'private-doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sos/sos.module#SosPageModule', name: 'SosPage', segment: 'sos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcom/welcom.module#WelcomPageModule', name: 'WelcomPage', segment: 'welcom', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_doctor_tab_doctor_tab__["a" /* DoctorTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_appoinment_tab_appoinment_tab__["a" /* AppointmentTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcom_welcom__["a" /* WelcomPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_tab_message_tab__["a" /* MessageTabPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hospital_hospital__["a" /* HospitalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_img_preview_img_preview__["a" /* ImgPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_private_doctor_private_doctor__["a" /* PrivateDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_case_history_case_history__["a" /* CaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_case_history_add_case_history__["a" /* AddCaseHistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_emoji__["a" /* EmojiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__["a" /* MainTabPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCaseHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddCaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCaseHistoryPage = (function () {
    // @ViewChild('alert')
    // alert: ElementRef;
    function AddCaseHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showAlert = true;
    }
    AddCaseHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCaseHistoryPage');
    };
    AddCaseHistoryPage.prototype.dismiss = function () {
        var alert = document.getElementById("alert");
        alert.style.animation = "dismissing 2s";
    };
    AddCaseHistoryPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    AddCaseHistoryPage.prototype.submit = function () {
    };
    AddCaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-case-history',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/add-case-history/add-case-history.html"*/'<!--\n  Generated template for the AddCaseHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" [hideBackButton]="true">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>添加病历记录</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div id="alert" div class="alert-info">\n    <ion-buttons end>\n      <button ion-button icon-only clear small (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <p>\n      请如实填写如下信息\n    </p>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>就诊医院</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>就诊时间</ion-label>\n      <ion-datetime displayFormat="YYYY 年 MM 月 DD 日"\n                    pickerFormat="YYYY 年 MM 月 DD 日"\n                    [(ngModel)]="time"\n                    cancelText="取消"\n                    doneText="确认"\n                    color="primary"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>出诊医生</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>诊断结果</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>治疗意见</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/add-case-history/add-case-history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
    ], AddCaseHistoryPage);
    return AddCaseHistoryPage;
    var _a, _b;
}());

//# sourceMappingURL=add-case-history.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map