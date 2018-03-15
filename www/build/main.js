webpackJsonp([19],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_list_appointment_list__ = __webpack_require__(310);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object])
    ], AppointmentTabPage);
    return AppointmentTabPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=appoinment-tab.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_doctor__ = __webpack_require__(102);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], DoctorTabPage);
    return DoctorTabPage;
}());

//# sourceMappingURL=doctor-tab.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_preview_img_preview__ = __webpack_require__(103);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], DoctorPage);
    return DoctorPage;
}());

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ImgPreviewPage);
    return ImgPreviewPage;
}());

//# sourceMappingURL=img-preview.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospital_hospital__ = __webpack_require__(105);
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
    function HomeTabPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
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
    HomeTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/home-tab/home-tab.html"*/'<!--\n  Generated template for the HomeTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'person\'></ion-icon>\n    </button>\n    <ion-title text-center>智慧医院</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img src="{{profile}}"/>\n      <div class="card-title">{{name}}</div>\n      <div class="card-subtitle">{{describe}}</div>\n    </ion-card>\n    <ion-list>\n      <button ion-item>\n        个人信息\n      </button>\n      <button ion-item>\n        专属医生\n      </button>\n      <button ion-item>\n        电子病历\n      </button>\n      <button ion-item>\n        身体体征\n      </button>\n      <button ion-item>\n        医疗进度\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content class="color-content">\n\n  <ion-slides pager>\n\n    <ion-slide (click)="toHospital()">\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="../../assets/imgs/person_info.jpg">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-list *ngFor="let hospital of hospitals">\n    <ion-card>\n      <img class="hospital-img" src="{{hospital.img}}">\n      <div class="hospital-name">{{hospital.name}}</div>\n      <div class="item">\n        <ion-icon name="navigate" item-start small></ion-icon>\n        <p>{{hospital.add}}</p>\n      </div>\n\n      <div class="item">\n        <ion-icon name="call" item-left small></ion-icon>\n        <p>{{hospital.tel}}</p>\n      </div>\n      <div class="divider"></div>\n      <button ion-button full clear>\n        查看详情\n      </button>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/home-tab/home-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomeTabPage);
    return HomeTabPage;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    };
    HospitalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospital',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/hospital/hospital.html"*/'<!--\n  Generated template for the HospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <ion-slides pager>\n\n    <ion-slide>\n      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=592c0a4b8ad4b31ce4319ce9e6bf4c1a/54fbb2fb43166d225c8b049c472309f79052d23d.jpg">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=3a4e8dd48b13632701e0ca61f0e6cb89/500fd9f9d72a60590ebcf0122934349b033bba0d.jpg">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=441df538bba1cd1111bb7a72d87ba399/0824ab18972bd407893bc2f57a899e510fb3093d.jpg">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>\n  <ion-card>\n    <ion-card-header>\n      医院简介\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>第三军医大学新桥医院是地方对第三军医大学第二附属医院\n        的称谓，设在重庆市沙坪坝区，现已成为一所综合性现代化教学医院。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      历史沿革\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>新桥医院是第三军医大学第二附属医院，始建于1944年，前身是国民党军\n        政部陆军医院，1950年改编为西南军区总医院，1955年转隶第七军医大学，\n        为第二附属医院，对外称新桥医院。1975年改称第三军医大学第二附属医院，\n        现址由贺龙、邓小平等老一辈革命家亲自选定。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      特色科室\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>医院设有临床和医技科室45个，国家级重点学科10个（呼吸内科、心血管内科、\n        心血管外科、骨科、泌尿外科、神经外科、普通外科、肝胆外科、胸外科、整形外\n        科），国家中医药管理局重点建设专科1个（中西医结合肾脏病重点建设专科），\n        全军医学研究所4个（呼吸、心内、心外、肿瘤），全军医学专科（病）中心6个（\n        肾内、超声、骨科、神外、血液、口腔），优生优育中心学科3个（妇产、儿科、泌外）\n        。医院是临床医学博士后流动站，有博士学位授权点学科22个、硕士学位授权点学科2\n        8个。有6个重庆市质量控制中心（血液内科医疗质量控制中心、肾移植质控中心、\n        心脏大血管外科（含心脏移植）医疗质量控制中心、美容外科质量控制中心、\n        临床输血质量控制中心、护理质量控制中心）。</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/hospital/hospital.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HospitalPage);
    return HospitalPage;
}());

//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-message-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/message-tab/message-tab.html"*/'<!--\n  Generated template for the MessageTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>智慧医院</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item data-msg="4" (click)="showMsg($event)">\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </button>\n    <ion-item>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>预约提示</h2>\n      <p>您以成功预约12：30分李医生会诊</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/message-tab/message-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MessageTabPage);
    return MessageTabPage;
}());

//# sourceMappingURL=message-tab.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		281,
		30
	],
	"../pages/appoinment-tab/appoinment-tab.module": [
		282,
		40
	],
	"../pages/appointment-list/appointment-list.module": [
		309,
		29
	],
	"../pages/body-mass/body-mass.module": [
		283,
		28
	],
	"../pages/case-history/case-history.module": [
		284,
		27
	],
	"../pages/cure-progress/cure-progress.module": [
		285,
		26
	],
	"../pages/doctor-tab/doctor-tab.module": [
		286,
		39
	],
	"../pages/doctor/doctor.module": [
		287,
		38
	],
	"../pages/edit-personal-info/edit-personal-info.module": [
		288,
		25
	],
	"../pages/home-tab/home-tab.module": [
		289,
		37
	],
	"../pages/hospital/hospital.module": [
		290,
		36
	],
	"../pages/img-preview/img-preview.module": [
		291,
		35
	],
	"../pages/main-tab/main-tab.module": [
		292,
		34
	],
	"../pages/message-tab/message-tab.module": [
		293,
		33
	],
	"../pages/pay-platform/pay-platform.module": [
		294,
		24
	],
	"../pages/personal-info/personal-info.module": [
		295,
		23
	],
	"../pages/private-doctor/private-doctor.module": [
		296,
		22
	],
	"../pages/register/register.module": [
		297,
		32
	],
	"../pages/sos/sos.module": [
		298,
		21
	],
	"../pages/welcom/welcom.module": [
		299,
		31
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tab_main_tab__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(160);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomPage);
    return WelcomPage;
}());

//# sourceMappingURL=welcom.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_tab_main_tab__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_doctor_tab_doctor_tab__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_tab_home_tab__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_appoinment_tab_appoinment_tab__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcom_welcom__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_tab_message_tab__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hospital_hospital__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_doctor_doctor__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_img_preview_img_preview__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__ = __webpack_require__(310);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appoinment-tab/appoinment-tab.module#AppoinmentTabPageModule', name: 'AppointmentTabPage', segment: 'appoinment-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/body-mass/body-mass.module#BodyMassPageModule', name: 'BodyMassPage', segment: 'body-mass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-history/case-history.module#CaseHistoryPageModule', name: 'CaseHistoryPage', segment: 'case-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cure-progress/cure-progress.module#CureProgressPageModule', name: 'CureProgressPage', segment: 'cure-progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-tab/doctor-tab.module#DoctorTabPageModule', name: 'DoctorTabPage', segment: 'doctor-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor/doctor.module#DoctorPageModule', name: 'DoctorPage', segment: 'doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-personal-info/edit-personal-info.module#EditPersonalInfoPageModule', name: 'EditPersonalInfoPage', segment: 'edit-personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabPageModule', name: 'HomeTabPage', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospital/hospital.module#HospitalPageModule', name: 'HospitalPage', segment: 'hospital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/img-preview/img-preview.module#ImgPreviewPageModule', name: 'ImgPreviewPage', segment: 'img-preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tab/main-tab.module#MainTabPageModule', name: 'MainTabPage', segment: 'main-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-tab/message-tab.module#MessageTabPageModule', name: 'MessageTabPage', segment: 'message-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-platform/pay-platform.module#PayPlatformPageModule', name: 'PayPlatformPage', segment: 'pay-platform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-doctor/private-doctor.module#PrivateDoctorPageModule', name: 'PrivateDoctorPage', segment: 'private-doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sos/sos.module#SosPageModule', name: 'SosPage', segment: 'sos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcom/welcom.module#WelcomPageModule', name: 'WelcomPage', segment: 'welcom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-list/appointment-list.module#AppointmentListPageModule', name: 'AppointmentListPage', segment: 'appointment-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-appointment-list',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/appointment-list/appointment-list.html"*/'<!--\n  Generated template for the AppointmentListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>预约记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <ion-list *ngFor="let record of records">\n   <ion-item (click)="itemSelected(record)">\n     <h2>{{record.title}}</h2>\n     <p>{{record.status}}</p>\n     <ion-note item-end>{{record.time}}</ion-note>\n   </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/appointment-list/appointment-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], AppointmentListPage);
    return AppointmentListPage;
    var _a, _b;
}());

//# sourceMappingURL=appointment-list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tab_home_tab__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_tab_doctor_tab__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appoinment_tab_appoinment_tab__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_tab_message_tab__ = __webpack_require__(106);
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
            selector: 'page-main-tab',template:/*ion-inline-start:"/Users/chengpiao/ionic/mevur/src/pages/main-tab/main-tab.html"*/'<ion-tabs>\n    <ion-tab [root]="homeTabRoot" tabTitle="首页" tabIcon="home"></ion-tab>\n    <ion-tab [root]="doctorTabRoot" tabTitle="在线医生" tabIcon="medical"></ion-tab>\n    <ion-tab [root]="appointmentTabPageRoot" tabTitle="预约挂号" tabIcon="pulse"></ion-tab>\n    <ion-tab [root]="messageTabRoot" tabTitle="消息中心" tabIcon="mail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chengpiao/ionic/mevur/src/pages/main-tab/main-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MainTabPage);
    return MainTabPage;
}());

//# sourceMappingURL=main-tab.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map