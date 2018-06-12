webpackJsonp([25],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasebookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CasebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CasebookProvider = (function () {
    function CasebookProvider(http) {
        this.http = http;
        console.log('Hello CasebookProvider Provider');
    }
    CasebookProvider.prototype.storeBook = function (book) {
        window.localStorage.setItem("casebook", JSON.stringify(book));
    };
    CasebookProvider.prototype.getBook = function () {
        return JSON.parse(window.localStorage.getItem("casebook"));
    };
    CasebookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CasebookProvider);
    return CasebookProvider;
}());

//# sourceMappingURL=casebook.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctorProvider = (function () {
    function DoctorProvider(http) {
        this.http = http;
        console.log('Hello DoctorProvider Provider');
    }
    DoctorProvider.prototype.setCurrentDoctor = function (doctor) {
        window.localStorage.setItem("currentDoctor", JSON.stringify(doctor));
    };
    DoctorProvider.prototype.getCurrentDoctor = function () {
        return JSON.parse(window.localStorage.getItem("currentDoctor"));
    };
    DoctorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DoctorProvider);
    return DoctorProvider;
}());

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selecthospital_selecthospital__ = __webpack_require__(228);
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
    function HomePage(navCtrl, api, alertCtrl, token) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.token = token;
        this.remember = true;
    }
    HomePage.prototype.routeLogin = function () {
        if (this.username === '' ||
            this.password === '') {
            this.alertCtrl.create({
                title: '提示',
                subTitle: '用户名或密码不能为空',
                buttons: ['确认']
            }).present();
        }
        else {
            var body = {
                username: this.username,
                password: this.password
            };
            var that_1 = this;
            __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](this.api.getLoginApi(), body, function (data) {
                that_1.handleLogin(data);
            });
        }
    };
    HomePage.prototype.routeRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.handleLogin = function (data) {
        if (data['code'] === 1) {
            //store data
            var token = data['map']['token'];
            var user = JSON.stringify(data['map']['user']);
            this.token.storeToken(token);
            this.token.storeUser(user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selecthospital_selecthospital__["a" /* SelecthospitalPage */]);
        }
        else {
            this.alertCtrl.create({
                title: '提示',
                subTitle: data['info'],
                buttons: ['确认']
            }).present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true" text-center color="primary">\n    <ion-title>\n      智慧医院\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false" id="login-container" padding>\n  <div id="login-bg">\n    <ion-list id="login-ion-list">\n      <ion-item>\n        <ion-label floating>身份证号码</ion-label>\n        <ion-input type="text" [(ngModel)]="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>密码</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>记住登录状态</ion-label>\n        <ion-checkbox color="secondary" checked="true" [(ngModel)]="remember"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <button ion-button class="md" [full]="true" (click)="routeLogin()">登录</button>\n    <p text-center>\n      <a (click)="routeRegister()">没有帐号？点我注册</a>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_token_token__["a" /* TokenProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCaseHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hospital_hospital__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_casebook_casebook__ = __webpack_require__(112);
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
    function AddCaseHistoryPage(navCtrl, navParams, api, token, load, toast, hos, caseBook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.token = token;
        this.load = load;
        this.toast = toast;
        this.hos = hos;
        this.caseBook = caseBook;
        this.showAlert = true;
        this.hospital = this.hos.getHospital();
        this.user = this.token.getUser();
        this.hospitalName = this.hospital['hospitalName'];
        this.emr = this.caseBook.getBook();
        this.branches = [];
        this.getBranch();
    }
    AddCaseHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCaseHistoryPage');
    };
    AddCaseHistoryPage.prototype.getBranch = function () {
        var that = this;
        var loader = this.load.create({
            content: "数据加载中..."
        });
        loader.present();
        __WEBPACK_IMPORTED_MODULE_5_jquery__["get"](this.api.getBranches(), { token: this.token.getToken() }, function (data) {
            loader.dismiss();
            if (data['code'] === 200) {
                that.branches = data['map']['pageInfo']['list'];
            }
            else {
                that.toast.create({
                    message: "获取科室数据出错...",
                    duration: 1000
                }).present();
            }
        });
    };
    AddCaseHistoryPage.prototype.branchIdChanged = function () {
        var loader = this.load.create({
            content: "加载医生数据..."
        });
        loader.present();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["get"](this.api.getBranchDoctor(), {
            token: this.token.getToken(),
            branchId: this.branch
        }, function (data) {
            loader.dismiss();
            if (data['code'] === 200) {
                that.doctors = data['map']['pageInfo']['list'];
            }
            else {
                that.toast.create({
                    message: '请求医生数据失败，请稍后再试',
                    duration: 1000
                }).present();
            }
        });
    };
    AddCaseHistoryPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    AddCaseHistoryPage.prototype.submit = function () {
        var that = this;
        var hospitalId = this.hospital['hospitalId'];
        var branchId = this.branch;
        var doctorId = this.doctor;
        if (hospitalId === undefined) {
            this.toast.create({
                message: "请选择医院",
                duration: 1000
            }).present();
        }
        if (branchId === undefined) {
            this.toast.create({
                message: "请选择科室",
                duration: 1000
            }).present();
        }
        if (this.time === undefined) {
            this.toast.create({
                message: "请选择时间",
                duration: 1000
            }).present();
        }
        if (this.title === undefined) {
            this.toast.create({
                message: "请输入标题",
                duration: 1000
            }).present();
        }
        if (this.desc === undefined) {
            this.toast.create({
                message: "请输入描述",
                duration: 1000
            }).present();
        }
        if (this.treatment === undefined) {
            this.toast.create({
                message: "请输入治疗记录",
                duration: 1000
            }).present();
        }
        console.log(this.emr);
        var body = {
            emrId: this.emr['emrId'],
            title: this.title,
            description: this.desc,
            createTime: this.time,
            treament: this.treatment,
            hospitalId: hospitalId,
            branchId: branchId,
            doctorId: doctorId,
            token: this.token.getToken()
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["post"](this.api.postEmrRecord(), body, function (data) {
            console.log(data);
            if (data['code'] === 200) {
                that.toast.create({
                    message: "添加电子病历记录成功",
                    duration: 1000
                }).present();
            }
        });
    };
    AddCaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-case-history',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/add-case-history/add-case-history.html"*/'<!--\n  Generated template for the AddCaseHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" [hideBackButton]="true">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>添加病历记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div id="alert" div class="alert-info">\n    <p>\n      请如实填写如下信息\n    </p>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>名称</ion-label>\n      <ion-input [(ngModel)]="title" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>描述</ion-label>\n      <ion-input [(ngModel)]="desc" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>治疗记录</ion-label>\n      <ion-input [(ngModel)]="treatment" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>治疗时间</ion-label>\n      <ion-datetime displayFormat="YYYY 年 MM 月 DD 日"\n                    pickerFormat="YYYY-MM-DD"\n                    [(ngModel)]="time"\n                    cancelText="取消"\n                    doneText="确认"\n                    color="primary"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>选择科室</ion-label>\n      <ion-select [(ngModel)]="branch" submitText="确认"\n                  (ngModelChange)="branchIdChanged()" cancelText="取消">\n        <ion-option *ngFor="let item of branches" value="{{item.branchId}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>选择医生</ion-label>\n      <ion-select [(ngModel)]="doctor" submitText="确认" cancelText="取消">\n        <ion-option *ngFor="let item of doctors" value="{{item.doctor.idCard}}">{{item.doctor.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" full (click)="submit()">确认</button>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/add-case-history/add-case-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hospital_hospital__["a" /* HospitalProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_casebook_casebook__["a" /* CasebookProvider */]])
    ], AddCaseHistoryPage);
    return AddCaseHistoryPage;
}());

//# sourceMappingURL=add-case-history.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_list_appointment_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
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
    function AppointmentTabPage(navCtrl, navParams, toastCtrl, app, api, token, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.api = api;
        this.token = token;
        this.loader = loader;
        this.branch = [];
        this.doctors = [];
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["get"](this.api.getBranches(), { token: this.token.getToken() }, function (data) {
            // that.loadDialog.dismiss();
            console.log(data);
            if (data['code'] !== 200) {
                that.toastCtrl.create({
                    message: '请求科室数据失败，请稍后再试',
                    duration: 1000
                }).present();
                return;
            }
            else {
                that.branch = data['map']['pageInfo']['list'];
            }
        });
    }
    AppointmentTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentTabPage');
        this.loadDialog = this.loader.create({
            content: '数据加载中, 请稍后',
        });
        // this.loadDialog.present();
        // let that = this;
        // $.get(this.api.getBranches(),
        //   {token: this.token.getToken()},
        // function (data) {
        //   // that.loadDialog.dismiss();
        //   console.log(data);
        // })
        // $.get(this.api.getDocters(),
        //   {token: this.token.getToken()},
        // function (data) {
        //   console.log(data);
        // })
    };
    AppointmentTabPage.prototype.submit = function () {
        if (this.preorderTime === undefined || this.preorderTime === '') {
            this.toastCtrl.create({
                message: '预约时间不能为空',
                duration: 1000
            }).present();
            return;
        }
        if (this.branchId === undefined || this.branchId === '') {
            this.toastCtrl.create({
                message: '请选择科室',
                duration: 1000
            }).present();
            return;
        }
        if (this.doctorId === undefined || this.doctorId === '') {
            this.toastCtrl.create({
                message: '请选择医生',
                duration: 1000
            }).present();
            return;
        }
        var time = this.preorderTime.replace('T', ' ').replace('Z', '');
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["post"](this.api.postPreorder(), {
            doctorId: this.doctorId,
            preorderTime: time,
            branchId: this.branchId,
            token: this.token.getToken()
        }, function (data) {
            that.toastCtrl.create({
                message: data['info'],
                duration: 1000
            }).present();
        });
    };
    AppointmentTabPage.prototype.toList = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__appointment_list_appointment_list__["a" /* AppointmentListPage */]);
    };
    AppointmentTabPage.prototype.doRefresh = function (refresher) {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["get"](this.api.getBranches(), { token: this.token.getToken() }, function (data) {
            // that.loadDialog.dismiss();
            console.log(data);
            refresher.cancel();
            if (data['code'] !== 200) {
                that.toastCtrl.create({
                    message: '请求科室数据失败，请稍后再试',
                    duration: 1000
                }).present();
                return;
            }
            else {
                that.branch = data['map']['pageInfo']['list'];
            }
        });
    };
    AppointmentTabPage.prototype.branchIdChanged = function () {
        this.getBranchDoctor();
    };
    AppointmentTabPage.prototype.getBranchDoctor = function () {
        var loading = this.loader.create({
            content: "数据加载中，请稍后..."
        });
        loading.present();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["get"](this.api.getBranchDoctor(), { token: this.token.getToken(),
            branchId: this.branchId }, function (data) {
            loading.dismiss();
            console.log(data['code']);
            if (data['code'] !== 200) {
                that.toastCtrl.create({
                    message: '请求医生数据失败，请稍后再试',
                    duration: 1000
                }).present();
                return;
            }
            else {
                that.doctors = data['map']['pageInfo']['list'];
            }
        });
    };
    AppointmentTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appoinment-tab',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/appoinment-tab/appoinment-tab.html"*/'<!--\n  Generated template for the AppointmentTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>预约挂号</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toList()">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n\n    <ion-item>\n      <ion-label><span style="color: red">*</span>选择科室</ion-label>\n      <ion-select [(ngModel)]="branchId" submitText="确认"\n                  (ngModelChange)="branchIdChanged()" cancelText="取消">\n        <ion-option *ngFor="let item of branch" value="{{item.branchId}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>选择医生</ion-label>\n      <ion-select [(ngModel)]="doctorId" submitText="确认" cancelText="取消">\n        <ion-option *ngFor="let item of doctors" value="{{item.doctor.idCard}}">{{item.doctor.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>预约时间</ion-label>\n      <ion-datetime [(ngModel)]="preorderTime" displayFormat="YYYY年MM月DD日 HH:mm"\n                    pickerFormat="YYYY-MM-DD HH:mm:ss"\n                    [(ngModel)]="time"\n                    min="2018-03-14"\n                    cancelText="取消"\n                    doneText="确认"\n                    placeholder="点击选择预约时间"\n                    color="primary"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="primary" style="margin-top: 80px" (click)="submit()">预约</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/appoinment-tab/appoinment-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], AppointmentTabPage);
    return AppointmentTabPage;
}());

//# sourceMappingURL=appoinment-tab.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(42);
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
    function AppointmentListPage(navCtrl, navParams, api, token, load, toast, alert, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.token = token;
        this.load = load;
        this.toast = toast;
        this.alert = alert;
        this.http = http;
        this.records = [];
        this.getPreorder();
    }
    AppointmentListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentListPage');
    };
    AppointmentListPage.prototype.itemSelected = function (item) {
        var that = this;
        console.log(item);
        var content = "是否取消与" + item['doctor']['name'] + "医生的预约\n" + "电话：" + item['doctor']['phone'];
        var buttons = [
            {
                text: '不取消',
                role: 'cancel'
            },
            {
                text: '确认取消',
                handler: function () {
                    var header = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('token', that.token.getToken());
                    var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('orderId', item['preOrders']['orderId']);
                    that.http.delete(that.api.deletePreorder(), {
                        headers: header,
                        params: params
                    }).subscribe(function (value) {
                        if (value['code'] === 200) {
                            that.getPreorder();
                        }
                    }, function (error) {
                        console.log(error);
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
    };
    AppointmentListPage.prototype.getPreorder = function () {
        var loader = this.load.create({
            content: "数据加载中,请稍后..."
        });
        var that = this;
        loader.present();
        __WEBPACK_IMPORTED_MODULE_2_jquery__["get"](this.api.getPreorders(), { token: this.token.getToken() }, function (data) {
            loader.dismiss();
            if (data['code'] !== 200) {
                that.toast.create({
                    message: '获取预约挂号数据失败...',
                    duration: 1000
                }).present();
            }
            else {
                that.records = data['map']['preorders'];
            }
        });
    };
    AppointmentListPage.prototype.doRefresh = function (refresher) {
        refresher.cancel();
        this.getPreorder();
    };
    AppointmentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment-list',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/appointment-list/appointment-list.html"*/'<!--\n  Generated template for the AppointmentListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>预约记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <button ion-item *ngFor="let record of records" (click)="itemSelected(record)">\n      <h2>{{record.branch.name}}</h2>\n      <p>{{record.preorderStatus.description}}</p>\n      <ion-note item-end>{{record.preOrders.preorderTime}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/appointment-list/appointment-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], AppointmentListPage);
    return AppointmentListPage;
}());

//# sourceMappingURL=appointment-list.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyMassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
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
 * Generated class for the BodyMassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BodyMassPage = (function () {
    function BodyMassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BodyMassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BodyMassPage');
        var weight = __WEBPACK_IMPORTED_MODULE_2_echarts__["init"](document.getElementById("weight"));
        //体重
        var option = {
            title: {
                text: '近一年体重变化',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '体重值',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: ['65.5', '64', '63', '61', '63.5', '65.2', '65.9', '66.5', '64.7', '63.9', '64.6', '65']
                }
            ]
        };
        weight.setOption(option);
        var treatment = __WEBPACK_IMPORTED_MODULE_2_echarts__["init"](document.getElementById("treatment"));
        var treatmentData = {
            title: {
                text: '近一年就诊统计',
                subtext: '总数' + 12 + "次",
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '就诊次数',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: ['0', '1', '0', '0', '0', '1', '3', '1', '2', '0', '1', '1']
                }
            ]
        };
        treatment.setOption(treatmentData);
    };
    BodyMassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-body-mass',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/body-mass/body-mass.html"*/'<!--\n  Generated template for the BodyMassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>body-mass</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <div class="chart" id="weight">\n  </div>\n  <div class="chart" id="treatment"></div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/body-mass/body-mass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BodyMassPage);
    return BodyMassPage;
}());

//# sourceMappingURL=body-mass.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_casebook_casebook__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__case_history_case_history__ = __webpack_require__(218);
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
 * Generated class for the CaseBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaseBookPage = (function () {
    function CaseBookPage(navCtrl, navParams, api, load, toast, token, casebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.load = load;
        this.toast = toast;
        this.token = token;
        this.casebook = casebook;
        this.getEmrs();
    }
    CaseBookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaseBookPage');
    };
    CaseBookPage.prototype.add = function () {
        //添加电子病例数据
        var loader = this.load.create({
            content: '请稍后...'
        });
        loader.present();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["post"](this.api.postEmr(), { token: this.token.getToken() }, function (data) {
            loader.dismiss();
            if (data['code'] === 200) {
                that.toast.create({
                    message: '创建电子病历成功成功',
                    duration: 1000
                }).present();
                that.getEmrs();
            }
        });
    };
    CaseBookPage.prototype.getEmrs = function () {
        var loader = this.load.create({
            content: '数据加载中，请稍后...'
        });
        loader.present();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["get"](this.api.getEmrs(), { token: this.token.getToken() }, function (data) {
            loader.dismiss();
            if (data['code'] === 200) {
                that.books = data['map']['emrs'];
            }
            else {
                that.toast.create({
                    message: '获取电子病历簿数据失败',
                    duration: 1000
                }).present();
            }
        });
    };
    CaseBookPage.prototype.doRefresh = function (refresher) {
        refresher.cancel();
        this.getEmrs();
    };
    CaseBookPage.prototype.checkBook = function (book) {
        this.casebook.storeBook(book);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__case_history_case_history__["a" /* CaseHistoryPage */]);
    };
    CaseBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-case-book',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/case-book/case-book.html"*/'<!--\n  Generated template for the CaseBookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>电子病历管理</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n<ion-list>\n  <button ion-item *ngFor="let book of books" (click)="checkBook(book)">\n   病历簿{{ book.emrId }}\n  </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/case-book/case-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_casebook_casebook__["a" /* CasebookProvider */]])
    ], CaseBookPage);
    return CaseBookPage;
}());

//# sourceMappingURL=case-book.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_case_history_add_case_history__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_casebook_casebook__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_hospital_hospital__ = __webpack_require__(76);
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
    function CaseHistoryPage(navCtrl, navParams, token, api, toast, load, casebook, hos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = token;
        this.api = api;
        this.toast = toast;
        this.load = load;
        this.casebook = casebook;
        this.hos = hos;
        this.emrs = [];
        this.hospital = this.hos.getHospital()['hospitalName'];
        this.getRecords();
    }
    CaseHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaseHistoryPage');
    };
    CaseHistoryPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_case_history_add_case_history__["a" /* AddCaseHistoryPage */]);
    };
    CaseHistoryPage.prototype.getRecords = function () {
        var loader = this.load.create({
            content: '数据加载中,请稍后...'
        });
        loader.present();
        var emr = this.casebook.getBook();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__["get"](this.api.getEmrRecord(), { token: this.token.getToken(),
            emrId: emr['emrId'] }, function (data) {
            loader.dismiss();
            if (data['code'] === 200) {
                that.emrs = data['map']['emrRecords'];
            }
        });
    };
    CaseHistoryPage.prototype.doRefresh = function (refresher) {
        refresher.cancel();
        this.getRecords();
    };
    CaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-case-history',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/case-history/case-history.html"*/'<!--\n  Generated template for the CaseHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>电子病历数据</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list no-lines class="color-content">\n    <ion-card *ngFor="let emr of emrs" class="case-card">\n      <ion-card-header text-center>\n        <ion-icon name="logo-buffer"></ion-icon>\n        {{emr.title}}\n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n        <div class="case-item">\n          <label class="case-title">病&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情:</label>\n          <p class="case-info">{{emr.desc}}</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">治疗医院:</label>\n          <p class="case-info">{{hospital}}</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室:</label>\n          <p class="case-info">{{emr.branch.name}}</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">大&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夫:</label>\n          <p class="case-info">{{emr.doctor.name}}</p>\n        </div>\n        <div class="breaker"></div>\n        <div class="case-item">\n          <label class="case-title">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间:</label>\n          <p class="case-info">{{emr.time}}</p>\n        </div>\n        <div class="breaker"></div>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/case-history/case-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_casebook_casebook__["a" /* CasebookProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_hospital_hospital__["a" /* HospitalProvider */]])
    ], CaseHistoryPage);
    return CaseHistoryPage;
}());

//# sourceMappingURL=case-history.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_doctor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_doctor_doctor__ = __webpack_require__(189);
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
    function DoctorTabPage(navCtrl, navParams, app, api, token, toast, load, doctorCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.api = api;
        this.token = token;
        this.toast = toast;
        this.load = load;
        this.doctorCtrl = doctorCtrl;
        this.doctors = [];
        this.currentPage = 2;
        this.getDoctor(null);
    }
    DoctorTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorTabPage');
        // let that = this;
        // $.get(this.api.getDocters(),
        //   {token: this.token.getToken()},
        //   function (data) {
        //   that.doctors = data['map']['pageInfo']['list'];
        // })
    };
    DoctorTabPage.prototype.toDoctor = function (doctor) {
        this.doctorCtrl.setCurrentDoctor(doctor);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__doctor_doctor__["a" /* DoctorPage */]);
    };
    DoctorTabPage.prototype.getDoctor = function (refresher) {
        var that = this;
        this.showLoadMore = false;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["get"](this.api.getDocters(), { token: this.token.getToken() }, function (data) {
            if (refresher !== null &&
                refresher !== undefined) {
                refresher.cancel();
            }
            if (data['code'] !== 200) {
                that.toast.create({
                    message: "请求医生数据错误",
                    duration: 1000
                }).present();
            }
            else {
                that.doctors = data['map']['pageInfo']['list'];
                if (data['map']['pageInfo']['isLastPage'] !== true) {
                    that.showLoadMore = true;
                }
            }
        });
    };
    DoctorTabPage.prototype.doRefresh = function (refresher) {
        this.getDoctor(refresher);
    };
    DoctorTabPage.prototype.loadMore = function () {
        var loader = this.load.create({
            content: "数据加载中..."
        });
        loader.present();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["get"](this.api.getDocters(), { token: this.token.getToken(),
            pageNum: this.currentPage++ }, function (data) {
            loader.dismiss();
            if (data['code'] !== 200) {
                that.toast.create({
                    message: "请求医生数据错误",
                    duration: 1000
                }).present();
            }
            else {
                var nds = data['map']['pageInfo']['list'];
                for (var h in nds) {
                    that.doctors.push(nds[h]);
                    //that.doctors.unshift(nds[h]);
                }
                if (data['map']['pageInfo']['isLastPage'] === true) {
                    that.showLoadMore = false;
                }
            }
        });
    };
    DoctorTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor-tab',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/doctor-tab/doctor-tab.html"*/'<!--\n  Generated template for the DoctorTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>在线医生</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="color-content">\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let doctor of doctors">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/doctor.jpg">\n      </ion-avatar>\n      <h2>{{doctor.name}}</h2>\n      <p>mail:{{doctor.mail}}</p>\n    </ion-item>\n    <ion-card-content>\n      <p>手机:{{doctor.phone}}</p>\n      <p>状态：值班</p>\n    </ion-card-content>\n    <div class="divider"></div>\n    <button ion-button clear full (click)="toDoctor(doctor)">预约</button>\n  </ion-card>\n  <button *ngIf="showLoadMore" ion-button color="primary" full clear (click)="loadMore()">加载更多...</button>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/doctor-tab/doctor-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_doctor_doctor__["a" /* DoctorProvider */]])
    ], DoctorTabPage);
    return DoctorTabPage;
}());

//# sourceMappingURL=doctor-tab.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_preview_img_preview__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_doctor_doctor__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
    function DoctorPage(navCtrl, navParams, popCtrl, doctorCtrl, load, api, token, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popCtrl = popCtrl;
        this.doctorCtrl = doctorCtrl;
        this.load = load;
        this.api = api;
        this.token = token;
        this.toast = toast;
        this.doctor = this.doctorCtrl.getCurrentDoctor();
        console.log(this.doctor);
        this.doctorName = this.doctor['name'];
        console.log(this.doctorName);
        this.branches = [];
        this.getBranches(null);
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
    DoctorPage.prototype.getBranches = function (refresher) {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__["get"](this.api.getDoctorBranches(), { token: this.token.getToken(),
            idCard: this.doctor['idCard'] }, function (data) {
            if (refresher !== null &&
                refresher !== undefined) {
                refresher.cancel();
            }
            if (data['code'] !== 200) {
                that.toast.create({
                    message: '获取科室数据失败',
                    duration: 1000
                }).present();
            }
            else {
                that.branches = data['map']['pageInfo']['list'];
            }
        });
    };
    DoctorPage.prototype.doRefresh = function (refresher) {
        this.getBranches(refresher);
    };
    DoctorPage.prototype.submit = function () {
        var that = this;
        var preorderTime = this.time.replace('T', ' ').replace('Z', '');
        __WEBPACK_IMPORTED_MODULE_6_jquery__["post"](this.api.postPreorder(), {
            doctorId: this.doctor['idCard'],
            preorderTime: preorderTime,
            branchId: this.branchId,
            token: this.token.getToken()
        }, function (data) {
            that.toast.create({
                message: data['info'],
                duration: 1000
            }).present();
        });
    };
    DoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/doctor/doctor.html"*/'<!--\n  Generated template for the DoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar text-center color="primary">\n    <ion-title>医生介绍</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <div class="car-img-bg img-bg">\n      <img (click)="showImg($event)" src="http://www.xqhospital.com.cn/image/expertimages/21300601.jpg"/>\n    </div>\n    <ion-card-content>\n      <ion-card-title ([ngModel])="doctorNme">\n        {{doctorName}}\n      </ion-card-title>\n      <p>\n        <ion-chip>\n          <ion-icon name="flash" color="primary"></ion-icon>\n          <ion-label>职称:</ion-label>\n        </ion-chip>\n        科室主任，博士研究生导师，美国亚利桑那大学博士后\n      </p>\n      <div class="divider"></div>\n      <p>\n        <ion-chip>\n          <ion-icon name="analytics" color="primary"></ion-icon>\n          <ion-label>主要擅长：</ion-label>\n        </ion-chip>\n        糖尿病自体骨髓干细胞移植治疗，糖尿病及并发症诊治, 自身免疫性甲状腺疾病的诊治。\n      </p>\n      <div class="divider"></div>\n      <p>\n        <ion-chip>\n          <ion-icon name="clock" color="primary"></ion-icon>\n          <ion-label>门诊时间：</ion-label>\n        </ion-chip>\n        周二、周四上午\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-label><span style="color: red">*</span>选择科室</ion-label>\n      <ion-select [(ngModel)]="branchId" submitText="确认" cancelText="取消">\n        <ion-option *ngFor="let branch of branches" value="branch.branch.branchId">{{branch.branch.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>预约时间</ion-label>\n      <ion-datetime ([ngModel])="time" displayFormat="YYYY-MM-DD HH:mm:ss"\n                    pickerFormat="YYYY-MM-DD HH:mm:ss"\n                    [(ngModel)]="time"\n                    min="2018-03-14"\n                    cancelText="取消"\n                    doneText="确认"\n                    placeholder="点击选择预约时间"\n                    color="primary"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="primary" style="margin-top: 50px" (click)="submit()">预约</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/doctor/doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_doctor_doctor__["a" /* DoctorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], DoctorPage);
    return DoctorPage;
}());

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-img-preview',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/img-preview/img-preview.html"*/'<!--\n  Generated template for the ImgPreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img src="{{source}}">\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/img-preview/img-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ImgPreviewPage);
    return ImgPreviewPage;
}());

//# sourceMappingURL=img-preview.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMedicalCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token_token__ = __webpack_require__(29);
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
    function EditMedicalCardPage(navCtrl, navParams, token) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = token;
        this.personalInfo = this.token.getUserDetail();
        console.log(this.personalInfo);
        this.nations = [{
                id: 1,
                name: '汉族'
            },
            {
                id: 2,
                name: '蒙古族'
            },
            {
                id: 3,
                name: '回族'
            },
            {
                id: 4,
                name: '藏族'
            },
            {
                id: 5,
                name: '维吾尔族'
            },
            {
                id: 6,
                name: '苗族'
            },
            {
                id: 7,
                name: '彝族'
            },
            {
                id: 8,
                name: '壮族'
            },
            {
                id: 9,
                name: '布依族'
            },
            {
                id: 10,
                name: '朝鲜族'
            },
            {
                id: 11,
                name: '满族'
            },
            {
                id: 12,
                name: '侗族'
            },
            {
                id: 13,
                name: '瑶族'
            },
            {
                id: 14,
                name: '白族'
            },
            {
                id: 15,
                name: '土家族'
            },
            {
                id: 16,
                name: '哈尼族'
            },
            {
                id: 17,
                name: '哈萨克族'
            },
            {
                id: 18,
                name: '傣族'
            },
            {
                id: 19,
                name: '黎族'
            },
            {
                id: 20,
                name: '傈僳族'
            },
            {
                id: 21,
                name: '佤族'
            },
            {
                id: 22,
                name: '畲族'
            },
            {
                id: 23,
                name: '高山族'
            },
            {
                id: 24,
                name: '拉祜族'
            },
            {
                id: 25,
                name: '水族'
            },
            {
                id: 26,
                name: '东乡族'
            },
            {
                id: 27,
                name: '纳西族'
            },
            {
                id: 28,
                name: '景颇族'
            },
            {
                id: 29,
                name: '柯尔克孜族'
            },
            {
                id: 30,
                name: '土族'
            },
            {
                id: 31,
                name: '达斡尔族'
            },
            {
                id: 32,
                name: '仫佬族'
            },
            {
                id: 33,
                name: '羌族'
            },
            {
                id: 34,
                name: '布朗族'
            },
            {
                id: 35,
                name: '撒拉族'
            },
            {
                id: 36,
                name: '毛难族'
            },
            {
                id: 37,
                name: '仡佬族'
            },
            {
                id: 38,
                name: '锡伯族'
            },
            {
                id: 39,
                name: '阿昌族'
            },
            {
                id: 40,
                name: '普米族'
            },
            {
                id: 41,
                name: '塔吉克族'
            },
            {
                id: 42,
                name: '怒族'
            },
            {
                id: 43,
                name: '乌孜别克族'
            },
            {
                id: 44,
                name: '俄罗斯族'
            },
            {
                id: 45,
                name: '鄂温克族'
            },
            {
                id: 46,
                name: '崩龙族'
            },
            {
                id: 47,
                name: '保安族'
            },
            {
                id: 48,
                name: '裕固族'
            },
            {
                id: 49,
                name: '京族'
            },
            {
                id: 50,
                name: '塔塔尔族'
            },
            {
                id: 51,
                name: '独龙族'
            },
            {
                id: 52,
                name: '鄂伦春族'
            },
            {
                id: 53,
                name: '赫哲族'
            },
            {
                id: 54,
                name: '门巴族'
            },
            {
                id: 55,
                name: '珞巴族'
            },
            {
                id: 56,
                name: '基诺族'
            }];
    }
    EditMedicalCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditMedicalCardPage');
    };
    EditMedicalCardPage.prototype.submit = function () {
        console.log(this.personalInfo);
    };
    EditMedicalCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-medical-card',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/edit-medical-card/edit-medical-card.html"*/'<!--\n  Generated template for the EditMedicalCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>修改个人信息</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="submit()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked="">地址</ion-label>\n      <ion-input type="text" [(ngModel)]="personalInfo.usersDetail.address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">姓名</ion-label>\n      <ion-input type="text" [(ngModel)]="personalInfo.users.realname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">手机号</ion-label>\n      <ion-input type="text" [(ngModel)]="personalInfo.users.phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked="">生日</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD"\n                    placeholder = "选择出生年月日"\n                    [(ngModel)]="personalInfo.usersDetail.birthYMD"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked="">民族</ion-label>\n      <ion-select [(ngModel)]="personalInfo.nation.nationId" cancelText="取消" okText="确认!">\n        <ion-option *ngFor="let mz of nations" value="{{mz.id}}">{{mz.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/edit-medical-card/edit-medical-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_token_token__["a" /* TokenProvider */]])
    ], EditMedicalCardPage);
    return EditMedicalCardPage;
}());

//# sourceMappingURL=edit-medical-card.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospital_hospital__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_info_personal_info__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__private_doctor_private_doctor__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body_mass_body_mass__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hospital_hospital__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__case_book_case_book__ = __webpack_require__(217);
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
    function HomeTabPage(navCtrl, navParams, app, menu, token, loading, hospital, alert, toast, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.menu = menu;
        this.token = token;
        this.loading = loading;
        this.hospital = hospital;
        this.alert = alert;
        this.toast = toast;
        this.api = api;
        //init loader
        this.loader = this.loading.create({
            content: '数据加载中，请稍后...',
            spinner: 'Bubbles'
        });
        this.loader.present();
        if (!this.token.checkToken()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        }
        else {
            console.log(this.token.getToken());
            console.log(this.token.getUser());
        }
        this.menu.enable(true);
        var user = JSON.parse(this.token.getUser());
        this.name = user['realname'];
        this.profile = './assets/imgs/person_info.jpg';
        this.describe = user['mail'];
        console.log(this.name);
        console.log(this.describe);
        this.hospitalData = this.hospital.getHospital();
    }
    HomeTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeTabPage');
        this.loader.dismiss();
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__case_book_case_book__["a" /* CaseBookPage */]);
                break;
            }
            case 3: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__body_mass_body_mass__["a" /* BodyMassPage */]);
                break;
            }
            case 5: {
                var that_1 = this;
                this.alert.create({
                    title: '提示',
                    subTitle: '是否需要呼救急救服务',
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: '确认',
                            handler: function () {
                                if (navigator.geolocation) {
                                    console.log("开始定位");
                                    var loading_1 = that_1.loading.create({
                                        content: "定位中..."
                                    });
                                    loading_1.present();
                                    navigator.geolocation.getCurrentPosition(function (pos) {
                                        loading_1.dismiss();
                                        $.post(that_1.api.postFirstAid(), {
                                            token: that_1.token.getToken(),
                                            latitude: pos.coords.latitude,
                                            longitude: pos.coords.longitude
                                        }, function (data) {
                                            if (data['code'] === 200) {
                                                that_1.toast.create({
                                                    message: '请求成功',
                                                    duration: 1000
                                                }).present();
                                            }
                                        });
                                    }, function (err) {
                                        loading_1.dismiss();
                                        if (err.code == 1) {
                                            that_1.toast.create({
                                                message: '请求定位被拒绝',
                                                duration: 1000
                                            }).present();
                                        }
                                        else if (err.code == 2) {
                                            that_1.toast.create({
                                                message: '定位失败',
                                                duration: 1000
                                            }).present();
                                        }
                                    });
                                }
                                else {
                                    that_1.toast.create({
                                        message: '不支持定位',
                                        duration: 1000
                                    }).present();
                                }
                            }
                        }
                    ]
                }).present();
            }
        }
    };
    HomeTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tab',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/home-tab/home-tab.html"*/'<!--\n  Generated template for the HomeTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only clear>\n      <ion-icon name=\'person\'></ion-icon>\n    </button>\n    <ion-title text-center>智慧医院</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu type="overlay" id="my-menu" [content]="content">\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img src="{{profile}}"/>\n      <div class="card-title">{{name}}</div>\n      <div class="card-subtitle">{{describe}}</div>\n    </ion-card>\n    <ion-list>\n      <button ion-item (tap)="onItemClicked(0)">\n        个人信息\n      </button>\n      <button ion-item (tap)="onItemClicked(1)">\n        专属医生\n      </button>\n      <button ion-item (tap)="onItemClicked(2)">\n        电子病历\n      </button>\n      <button ion-item (tap)="onItemClicked(3)">\n        身体体征\n      </button>\n      <button ion-item (tap)="onItemClicked(4)">\n        医疗进度\n      </button>\n      <button ion-item (tap)="onItemClicked(5)">\n        一键急救\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content class="color-content">\n\n  <ion-slides pager>\n\n    <ion-slide>\n      <img src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498096950_32d8a37ca37e8b3fdace4c3257060e64_w800.jpeg">\n      <h2>高效</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498097073_c1e10842f9b9b93f92e43ec8cc54f9cd_w800.jpeg">\n      <h2>便捷</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498097087_4fb2839a0f84a11a8b1b0bdeb71f10cc_w800.jpeg">\n      <h2>智慧</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-list>\n    <ion-card>\n      <img class="hospital-img" src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498096950_32d8a37ca37e8b3fdace4c3257060e64_w800.jpeg">\n      <div class="hospital-name">{{hospitalData.hospitalName}}</div>\n      <div class="item">\n        <ion-icon name="navigate" item-start small></ion-icon>\n        <p>{{hospitalData.address}}</p>\n      </div>\n\n      <div class="item">\n        <ion-icon name="call" item-left small></ion-icon>\n        <p>{{hospitalData.longitude}},{{hospitalData.latitude}}</p>\n      </div>\n      <div class="divider"></div>\n      <button ion-button full clear (tap)="toHospital()">\n        查看详情\n      </button>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/home-tab/home-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_hospital_hospital__["a" /* HospitalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */]])
    ], HomeTabPage);
    return HomeTabPage;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__ = __webpack_require__(76);
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
    function HospitalPage(navCtrl, navParams, hos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hos = hos;
        this.title = this.hos['hospitalName'];
    }
    HospitalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HospitalPage');
        // this.navBar.setBackButtonText('');
    };
    HospitalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospital',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/hospital/hospital.html"*/'<!--\n  Generated template for the HospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <ion-slides pager>\n\n    <ion-slide>\n    <img src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498096950_32d8a37ca37e8b3fdace4c3257060e64_w800.jpeg">\n    <h2>高效</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://ss0.bdstatic.com/6KYTfyqn1Ah3otqbppnN2DJv/comt/1498097073_c1e10842f9b9b93f92e43ec8cc54f9cd_w800.jpeg">\n      <h2>便捷</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-card>\n    <ion-card-header>\n      医院简介\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>重庆交通大学校医院现已成为一所综合性现代化教学医院。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      历史沿革\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>新桥医院是第三军医大学第二附属医院，始建于1944年，前身是国民党军\n        政部陆军医院，1950年改编为西南军区总医院，1955年转隶第七军医大学，\n        为第二附属医院，对外称新桥医院。1975年改称第三军医大学第二附属医院，\n        现址由贺龙、邓小平等老一辈革命家亲自选定。</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      特色科室\n    </ion-card-header>\n    <div class="divider"></div>\n    <ion-card-content>\n      <p>医院设有临床和医技科室45个，国家级重点学科10个（呼吸内科、心血管内科、\n        心血管外科、骨科、泌尿外科、神经外科、普通外科、肝胆外科、胸外科、整形外\n        科），国家中医药管理局重点建设专科1个（中西医结合肾脏病重点建设专科），\n        全军医学研究所4个（呼吸、心内、心外、肿瘤），全军医学专科（病）中心6个（\n        肾内、超声、骨科、神外、血液、口腔），优生优育中心学科3个（妇产、儿科、泌外）\n        。医院是临床医学博士后流动站，有博士学位授权点学科22个、硕士学位授权点学科2\n        8个。有6个重庆市质量控制中心（血液内科医疗质量控制中心、肾移植质控中心、\n        心脏大血管外科（含心脏移植）医疗质量控制中心、美容外科质量控制中心、\n        临床输血质量控制中心、护理质量控制中心）。</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/hospital/hospital.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__["a" /* HospitalProvider */]])
    ], HospitalPage);
    return HospitalPage;
}());

//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_medical_card_edit_medical_card__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
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
    function PersonalInfoPage(navCtrl, navParams, token) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = token;
        this.user = JSON.parse(this.token.getUser());
        this.accessToken = this.token.getToken();
        this.userInfo = {
            "users": {
                "idCard": "",
                "accountStatusId": 1,
                "roleId": 1,
                "realname": "",
                "phone": "",
                "password": "",
                "mail": ""
            },
            "accountStatus": {
                "accountStatusId": 1,
                "description": "正常"
            },
            "role": {
                "roleId": 1,
                "description": "普通用户"
            },
            "usersDetail": {
                "idCard": "",
                "nationId": 1,
                "photoId": null,
                "profileId": "",
                "sexId": 1,
                "address": "",
                "birthYMD": ""
            },
            "nation": {
                "nationId": 1,
                "nationDesc": "汉族"
            },
            "profile": {
                "profileId": "",
                "profilePath": ""
            },
            "photo": null
        };
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
        var that = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["get"]('https://api.zjhfyq.cn/api-user/users/detail', {
            token: this.accessToken
        }, function (data) {
            console.log(data);
            that.userInfo = data['map']['userDetail'];
            if (that.userInfo.nation === null ||
                that.userInfo.nation == undefined) {
                that.userInfo.nation = {
                    nationId: 1,
                    nationDesc: '汉族'
                };
            }
            that.token.storeUserDetail(JSON.stringify(that.userInfo));
        });
    };
    PersonalInfoPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */]);
    };
    PersonalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-info',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/personal-info/personal-info.html"*/'<!--\n  Generated template for the PersonalInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>个人信息</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="edit()">\n        <ion-icon name="medical"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="color-content">\n  <div class="head">\n    <ion-item no-lines>\n      <ion-avatar>\n        <img src="./assets/imgs/person_info.jpg">\n      </ion-avatar>\n    </ion-item>\n  </div>\n\n  <ion-card>\n    <ion-card-content style="margin-top: 15px">\n      <ion-card-title>\n        唐玉\n        <ion-icon name="male" color="primary"></ion-icon>\n      </ion-card-title>\n      <p>\n        {{user.address}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title text-center color="danger">\n        <ion-icon name="medical"></ion-icon>\n        用户信息卡\n      </ion-card-title>\n      <hr>\n      <p>\n        <ion-label>出生日期</ion-label>\n        {{userInfo.usersDetail.birthYMD}}\n      </p>\n      <p>\n        <ion-label>身份证号码</ion-label>\n        {{userInfo.users.idCard}}\n      </p>\n      <p>\n        <ion-label>住址</ion-label>\n        {{userInfo.usersDetail.address}}\n      </p>\n      <p>\n        <ion-label>电话号码</ion-label>\n        {{userInfo.users.phone}}\n      </p>\n      <p>\n        <ion-label>邮箱</ion-label>\n        {{userInfo.users.mail}}\n      </p>\n      <p>\n        <ion-label>民族</ion-label>\n        {{userInfo.nation.nationDesc}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/personal-info/personal-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */]])
    ], PersonalInfoPage);
    return PersonalInfoPage;
}());

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        this.msgList = [];
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
            selector: 'page-private-doctor',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/private-doctor/private-doctor.html"*/'<!--\n  Generated template for the PrivateDoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>专属医生</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="color-content" *ngIf="hasPrivateDoctor">\n  <header class="head-info">\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/person_info.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n        <p>\n          <ion-icon name="md-disc" style="color: deepskyblue"></ion-icon>\n          在线\n        </p>\n      </ion-item>\n    </ion-card>\n  </header>\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of msgList"\n         class="message"\n         [class.left]=" msg.userId === toUserId "\n         [class.right]=" msg.userId === userId ">\n      <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{convertTime(msg.time)}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.message}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-item>\n    <button ion-button small clear icon-only item-left (click)="switchEmojiPicker()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n    <ion-textarea placeholder="输入文本信息" [(ngModel)]="msg">\n    </ion-textarea>\n    <button small ion-button outline item-right (click)="sendMsg()">\n      发送\n    </button>\n  </ion-item>\n\n</ion-footer>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/private-doctor/private-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PrivateDoctorPage);
    return PrivateDoctorPage;
}());

//# sourceMappingURL=private-doctor.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
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
    function RegisterPage(navCtrl, navParams, alertCtrl, http, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.api = api;
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
        if ('' === this.name ||
            '' === this.id_card ||
            '' === this.phone ||
            '' === this.paw ||
            '' === this.email ||
            '' === this.paw_confirm ||
            this.paw_confirm !== this.paw) {
            alert.present();
            return;
        }
        // var resp: string;
        var body = {
            idCard: this.id_card,
            realname: this.name,
            phone: this.phone,
            mail: this.email,
            password: this.paw
        };
        __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](this.api.getReigiterApi(), body, function (data) {
            console.log(data);
            if (data['code'] === 200) {
                alert.setSubTitle("注册成功，请前往登录");
                alert.present();
            }
            else {
                alert.setSubTitle(data['info']);
                alert.present();
            }
        });
        // alert.present();
    };
    RegisterPage.prototype.print = function (data) {
        console.log(data);
    };
    RegisterPage.prototype.toLogin = function () {
        var that = this;
        return function () {
            that.navCtrl.pop();
        };
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar text-center color="primary">\n    <ion-title>注册</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content scroll="false" class="color-content" padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>姓名</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>身份证号码</ion-label>\n      <ion-input type="text" [(ngModel)]="id_card"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>电话号码</ion-label>\n      <ion-input type="text" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>电子邮箱</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>输入密码</ion-label>\n      <ion-input type="password" [(ngModel)]="paw"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="paw_confirm"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="register()">确认注册</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecthospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hospital_hospital__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_tab_main_tab__ = __webpack_require__(229);
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
 * Generated class for the SelecthospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelecthospitalPage = (function () {
    function SelecthospitalPage(navCtrl, navParams, api, load, alert, hos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.load = load;
        this.alert = alert;
        this.hos = hos;
        console.log(this.currentHospital);
    }
    SelecthospitalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelecthospitalPage');
        this.page = 1;
        this.loader = this.load.create({
            content: '数据加载中, 请稍后',
            spinner: 'Bubbles'
        });
        this.loader.present();
        //get data
        var that = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__["get"](this.api.getHospitalsApi(), { pageNum: this.page++ }, function (data) {
            that.loader.dismiss();
            if (data['code'] === 200) {
                that.hospitals = data['map']['pageInfo']['list'];
                that.maxPage = data['map']['pageInfo']['pages'];
                console.log(that.hospitals);
            }
        });
    };
    SelecthospitalPage.prototype.select = function (hospial) {
        this.currentHospital = hospial;
    };
    SelecthospitalPage.prototype.doRefresh = function (refresher) {
        if (this.page > this.maxPage) {
            refresher.cancel();
            return;
        }
        var that = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__["get"](this.api.getHospitalsApi(), { pageNum: this.page++ }, function (data) {
            if (data['code'] === 200) {
                var hs = data['map']['pageInfo']['list'];
                for (var h in hs) {
                    that.hospitals.unshift(hs[h]);
                }
                refresher.cancel();
            }
        });
    };
    SelecthospitalPage.prototype.toMain = function () {
        if (this.currentHospital === null ||
            this.currentHospital === undefined) {
            this.alert.create({
                title: '提示',
                subTitle: '请选择医院'
            }).present();
        }
        else {
            this.hos.storeHospital(JSON.stringify(this.currentHospital));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_tab_main_tab__["a" /* MainTabPage */]);
        }
    };
    SelecthospitalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selecthospital',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/selecthospital/selecthospital.html"*/'<!--\n  Generated template for the SelecthospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar [hideBackButton]="true" text-center color="primary">\n    <ion-title>\n      选择医院\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list radio-group>\n    <ion-item *ngFor="let hospital of hospitals">\n      <ion-label>{{hospital.hospitalName}}</ion-label>\n      <ion-radio (ionSelect)="select(hospital)" value="{{hospital.hospitalId}}"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" full (click)="toMain()">确认</button>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/selecthospital/selecthospital.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hospital_hospital__["a" /* HospitalProvider */]])
    ], SelecthospitalPage);
    return SelecthospitalPage;
}());

//# sourceMappingURL=selecthospital.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tab_home_tab__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_tab_doctor_tab__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appoinment_tab_appoinment_tab__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_tab_message_tab__ = __webpack_require__(230);
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
        this.msgCount = 0;
    }
    MainTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tab',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/main-tab/main-tab.html"*/'<ion-tabs>\n    <ion-tab [root]="homeTabRoot" tabTitle="首页" tabIcon="home"></ion-tab>\n    <ion-tab [root]="doctorTabRoot" tabTitle="在线医生" tabIcon="medical"></ion-tab>\n    <ion-tab [root]="appointmentTabPageRoot" tabTitle="预约挂号" tabIcon="pulse"></ion-tab>\n    <ion-tab [root]="messageTabRoot" tabBadge="{{msgCount}}" tabBadgeStyle="danger" tabTitle="消息中心" tabIcon="mail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/main-tab/main-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], MainTabPage);
    return MainTabPage;
}());

//# sourceMappingURL=main-tab.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
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
    function MessageTabPage(navCtrl, navParams, token, api, alert, load, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = token;
        this.api = api;
        this.alert = alert;
        this.load = load;
        this.toast = toast;
        this.records = [];
    }
    MessageTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageTabPage');
        this.getPreorder();
    };
    MessageTabPage.prototype.showMsg = function ($event) {
        //获取点击dom对象的参数值
    };
    MessageTabPage.prototype.getPreorder = function () {
        var loader = this.load.create({
            content: "数据加载中,请稍后..."
        });
        var that = this;
        loader.present();
        __WEBPACK_IMPORTED_MODULE_2_jquery__["get"](this.api.getPreorders(), { token: this.token.getToken() }, function (data) {
            loader.dismiss();
            if (data['code'] !== 200) {
                that.toast.create({
                    message: '获取预约挂号数据失败...',
                    duration: 1000
                }).present();
            }
            else {
                that.records = data['map']['preorders'];
            }
        });
    };
    MessageTabPage.prototype.doRefresh = function (refresher) {
        refresher.cancel();
        this.getPreorder();
    };
    MessageTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-tab',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/message-tab/message-tab.html"*/'<!--\n  Generated template for the MessageTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>消息中心</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-refresher #refresh (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <button ion-item *ngFor="let record of records" (click)="showMsg(record)">\n      <ion-badge class="i-badge" color="danger" item-start> </ion-badge>\n      <h2>预约提示</h2>\n      <p>与{{record.doctor.name}}医生预约见面{{record.preorderStatus.description}}</p>\n      <ion-note item-end>{{record.preOrders.createTime}}</ion-note>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/message-tab/message-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], MessageTabPage);
    return MessageTabPage;
}());

//# sourceMappingURL=message-tab.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(190);
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
            selector: 'page-welcom',template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/welcom/welcom.html"*/'<!--\n  Generated template for the WelcomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide id="slide1">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>专属医生</h1>\n        </div>\n        <p>美国的医疗产业高度发达，创新能力十分突出，不断涌现各种治疗新技术和新手段，\n          尤其是在药品研发和诊疗设备研发上。比如近几年推出的一种新型的外科微创手术设备，\n          达芬奇系统，这种设备与常规手术相比，损伤小，见效快，效果更好，美国已经普及好几年了。</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide id="slide2">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>治疗跟踪</h1>\n        </div>\n        <p>不断推陈出新的先进的医疗理念已经渗透到美国医疗的各个方面并发挥着极其重要的指导作用，\n          往往要比单纯的医疗技术创新和突破更为重要。</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide id="slide3">\n      <button class="skip-button" (click)="start()" ion-button clear>跳过</button>\n      <div class="container">\n        <div class="function">\n          <h1>电子病历</h1>\n        </div>\n        <p>美国最新的技术利用免疫/化学方法切断癌组织血供，不用大型手术就可以控制癌症；\n          一些严重哮喘患者，任何药物都不能彻底缓解病情。美国最新的微创手术治疗通过切\n          除部分呼吸道平滑肌，可以彻底根治哮喘。</p>\n      </div>\n\n    </ion-slide>\n\n    <ion-slide id="slide4">\n      <h1>大智慧医疗服务</h1>\n      <h2>就在现在</h2>\n      <button ion-button class="start-button" (click)="start()"  full color="primary">开始</button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/pages/welcom/welcom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], WelcomPage);
    return WelcomPage;
}());

//# sourceMappingURL=welcom.js.map

/***/ }),

/***/ 243:
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
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        this.server = "https://api.zjhfyq.cn";
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.getReigiterApi = function () {
        return this.server + "/api-user/users/";
    };
    ApiProvider.prototype.getLoginApi = function () {
        return this.server + "/api-sso/login";
    };
    ApiProvider.prototype.getHospitalsApi = function () {
        return "https://sh.zjhfyq.cn/hospital";
    };
    ApiProvider.prototype.getDocters = function () {
        return this.server + "/api-hospital/hospital/doctor";
    };
    ApiProvider.prototype.getBranches = function () {
        return this.server + "/api-hospital/hospital/branch";
    };
    ApiProvider.prototype.getPreorders = function () {
        return this.server + "/api-appointment/preorder";
    };
    ApiProvider.prototype.postPreorder = function () {
        return this.server + "/api-appointment/preorder";
    };
    ApiProvider.prototype.deletePreorder = function () {
        return this.server + "/api-appointment/preorder";
    };
    ApiProvider.prototype.getBranchDoctor = function () {
        return this.server + "/api-hospital/branch-doctor-title";
    };
    ApiProvider.prototype.getDoctorBranches = function () {
        return this.server + "/api-hospital/branch-doctor-title";
    };
    ApiProvider.prototype.postFirstAid = function () {
        return this.server + "/api-onekeyfirstaid/sos";
    };
    ApiProvider.prototype.getEmrs = function () {
        return this.server + "/api-emr/emr";
    };
    ApiProvider.prototype.postEmr = function () {
        return this.server + "/api-emr/emr";
    };
    ApiProvider.prototype.getEmrRecord = function () {
        return this.server + "/api-emr/emr/record";
    };
    ApiProvider.prototype.postEmrRecord = function () {
        return this.server + "/api-emr/emr/record";
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		788,
		5
	],
	"../pages/add-case-book/add-case-book.module": [
		789,
		4
	],
	"../pages/add-case-history/add-case-history.module": [
		790,
		24
	],
	"../pages/appoinment-tab/appoinment-tab.module": [
		791,
		23
	],
	"../pages/appointment-list/appointment-list.module": [
		793,
		22
	],
	"../pages/body-mass/body-mass.module": [
		792,
		21
	],
	"../pages/case-book/case-book.module": [
		794,
		20
	],
	"../pages/case-history/case-history.module": [
		795,
		19
	],
	"../pages/cure-progress/cure-progress.module": [
		796,
		3
	],
	"../pages/doctor-tab/doctor-tab.module": [
		797,
		18
	],
	"../pages/doctor/doctor.module": [
		798,
		17
	],
	"../pages/edit-medical-card/edit-medical-card.module": [
		799,
		16
	],
	"../pages/edit-personal-info/edit-personal-info.module": [
		800,
		2
	],
	"../pages/home-tab/home-tab.module": [
		801,
		15
	],
	"../pages/hospital/hospital.module": [
		802,
		14
	],
	"../pages/img-preview/img-preview.module": [
		803,
		13
	],
	"../pages/main-tab/main-tab.module": [
		804,
		12
	],
	"../pages/message-tab/message-tab.module": [
		805,
		11
	],
	"../pages/pay-platform/pay-platform.module": [
		806,
		1
	],
	"../pages/personal-info/personal-info.module": [
		812,
		10
	],
	"../pages/private-doctor/private-doctor.module": [
		808,
		9
	],
	"../pages/register/register.module": [
		811,
		8
	],
	"../pages/selecthospital/selecthospital.module": [
		807,
		7
	],
	"../pages/sos/sos.module": [
		809,
		0
	],
	"../pages/welcom/welcom.module": [
		810,
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
webpackAsyncContext.id = 285;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TokenProvider = (function () {
    function TokenProvider(http) {
        this.http = http;
        console.log(__WEBPACK_IMPORTED_MODULE_2_jquery__);
    }
    TokenProvider.prototype.storeToken = function (token) {
        window.localStorage.setItem('token', token);
    };
    TokenProvider.prototype.getToken = function () {
        return window.localStorage.getItem('token');
    };
    TokenProvider.prototype.storeUser = function (user) {
        window.localStorage.setItem('user', user);
    };
    TokenProvider.prototype.getUser = function () {
        return window.localStorage.getItem('user');
    };
    TokenProvider.prototype.checkToken = function () {
        if (this.getToken() !== undefined &&
            this.getToken() !== '' &&
            this.getToken().length === 32) {
            return true;
        }
        else {
            return false;
        }
    };
    TokenProvider.prototype.storeUserDetail = function (userDetail) {
        window.localStorage.setItem("userDetail", userDetail);
    };
    TokenProvider.prototype.getUserDetail = function () {
        return JSON.parse(window.localStorage.getItem("userDetail"));
    };
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TokenProvider);
    return TokenProvider;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_tab_main_tab__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_doctor_tab_doctor_tab__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_appoinment_tab_appoinment_tab__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcom_welcom__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_message_tab_message_tab__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hospital_hospital__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_doctor_doctor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_img_preview_img_preview__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_appointment_list_appointment_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_personal_info_personal_info__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_medical_card_edit_medical_card__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_private_doctor_private_doctor__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_emoji__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_case_history_case_history__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_case_history_add_case_history__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_body_mass_body_mass__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_http_http__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_selecthospital_selecthospital__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_hospital_hospital__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_doctor_doctor__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_ws_ws__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_case_book_case_book__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_casebook_casebook__ = __webpack_require__(112);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_doctor_tab_doctor_tab__["a" /* DoctorTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_appoinment_tab_appoinment_tab__["a" /* AppointmentTabPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcom_welcom__["a" /* WelcomPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_message_tab_message_tab__["a" /* MessageTabPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hospital_hospital__["a" /* HospitalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_img_preview_img_preview__["a" /* ImgPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_private_doctor_private_doctor__["a" /* PrivateDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_case_history_case_history__["a" /* CaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_case_history_add_case_history__["a" /* AddCaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_body_mass_body_mass__["a" /* BodyMassPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_selecthospital_selecthospital__["a" /* SelecthospitalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_case_book_case_book__["a" /* CaseBookPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    // add global configuration here
                    tabsHideOnSubPages: 'true',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-case-book/add-case-book.module#AddCaseBookPageModule', name: 'AddCaseBookPage', segment: 'add-case-book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-case-history/add-case-history.module#AddCaseHistoryPageModule', name: 'AddCaseHistoryPage', segment: 'add-case-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appoinment-tab/appoinment-tab.module#AppoinmentTabPageModule', name: 'AppointmentTabPage', segment: 'appoinment-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/body-mass/body-mass.module#BodyMassPageModule', name: 'BodyMassPage', segment: 'body-mass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-list/appointment-list.module#AppointmentListPageModule', name: 'AppointmentListPage', segment: 'appointment-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-book/case-book.module#CaseBookPageModule', name: 'CaseBookPage', segment: 'case-book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-history/case-history.module#CaseHistoryPageModule', name: 'CaseHistoryPage', segment: 'case-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cure-progress/cure-progress.module#CureProgressPageModule', name: 'CureProgressPage', segment: 'cure-progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-tab/doctor-tab.module#DoctorTabPageModule', name: 'DoctorTabPage', segment: 'doctor-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor/doctor.module#DoctorPageModule', name: 'DoctorPage', segment: 'doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-medical-card/edit-medical-card.module#EditMedicalCardPageModule', name: 'EditMedicalCardPage', segment: 'edit-medical-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-personal-info/edit-personal-info.module#EditPersonalInfoPageModule', name: 'EditPersonalInfoPage', segment: 'edit-personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabPageModule', name: 'HomeTabPage', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospital/hospital.module#HospitalPageModule', name: 'HospitalPage', segment: 'hospital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/img-preview/img-preview.module#ImgPreviewPageModule', name: 'ImgPreviewPage', segment: 'img-preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tab/main-tab.module#MainTabPageModule', name: 'MainTabPage', segment: 'main-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-tab/message-tab.module#MessageTabPageModule', name: 'MessageTabPage', segment: 'message-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-platform/pay-platform.module#PayPlatformPageModule', name: 'PayPlatformPage', segment: 'pay-platform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecthospital/selecthospital.module#SelecthospitalPageModule', name: 'SelecthospitalPage', segment: 'selecthospital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-doctor/private-doctor.module#PrivateDoctorPageModule', name: 'PrivateDoctorPage', segment: 'private-doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sos/sos.module#SosPageModule', name: 'SosPage', segment: 'sos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcom/welcom.module#WelcomPageModule', name: 'WelcomPage', segment: 'welcom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_doctor_tab_doctor_tab__["a" /* DoctorTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_appoinment_tab_appoinment_tab__["a" /* AppointmentTabPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcom_welcom__["a" /* WelcomPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_message_tab_message_tab__["a" /* MessageTabPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hospital_hospital__["a" /* HospitalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_img_preview_img_preview__["a" /* ImgPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_appointment_list_appointment_list__["a" /* AppointmentListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_medical_card_edit_medical_card__["a" /* EditMedicalCardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_private_doctor_private_doctor__["a" /* PrivateDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_case_history_case_history__["a" /* CaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_case_history_add_case_history__["a" /* AddCaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_body_mass_body_mass__["a" /* BodyMassPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_selecthospital_selecthospital__["a" /* SelecthospitalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_case_book_case_book__["a" /* CaseBookPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_token_token__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_hospital_hospital__["a" /* HospitalProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_doctor_doctor__["a" /* DoctorProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_ws_ws__["a" /* WsProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_casebook_casebook__["a" /* CasebookProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HospitalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalProvider = (function () {
    function HospitalProvider(http) {
        this.http = http;
        console.log('Hello HospitalProvider Provider');
    }
    HospitalProvider.prototype.storeHospital = function (hospital) {
        window.localStorage.setItem('hospital', hospital);
    };
    HospitalProvider.prototype.getHospital = function () {
        return JSON.parse(window.localStorage.getItem('hospital'));
    };
    HospitalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HospitalProvider);
    return HospitalProvider;
}());

//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcom_welcom__ = __webpack_require__(231);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcom_welcom__["a" /* WelcomPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mevur/Documents/dev/web/smart_hospital_front/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/mevur/Documents/dev/web/smart_hospital_front/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 785:
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

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.get = function (url, params) {
        var resp;
        this.http.get(url, { params: params }).subscribe(function (value) {
            resp = value;
        });
        return this.http.get(url, { params: params }).subscribe();
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the WsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsProvider = (function () {
    function WsProvider(http) {
        this.http = http;
        console.log('Hello WsProvider Provider');
    }
    WsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WsProvider);
    return WsProvider;
}());

//# sourceMappingURL=ws.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map