webpackJsonp([8],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactDetailsPage = /** @class */ (function () {
    function ContactDetailsPage(navCtrl, navParams, viewCtrl, zone, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.loadCtrl = loadCtrl;
    }
    ContactDetailsPage.prototype.ionViewCanEnter = function () {
    };
    ContactDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function () {
            _this.zone.run(function () {
                _this.contacts = _this.navParams.get('contacts');
                _this.heading = _this.navParams.get('heading');
            });
        });
        setTimeout(function () {
            loading.dismiss().then(function () {
                console.log("dismissed spinner");
            });
        }, 2000);
    };
    ContactDetailsPage.prototype.onSelect = function (item) {
        this.viewCtrl.dismiss(item);
    };
    ContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-details',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\details\contact-details\contact-details.html"*/'<ion-content padding>\n  <ion-list>\n    <h5 class="fontWeightNormal">{{ heading }}</h5>\n\n    <div *ngIf="contacts">\n      <ion-item no-padding (click)="onSelect(item)" *ngFor="let item of contacts">\n        {{ item.displayName }}\n      </ion-item>\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\details\contact-details\contact-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_details_contact_details__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, menuCtrl, contacts, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.contacts = contacts;
        this.modalCtrl = modalCtrl;
        this.shown = 0;
    }
    DetailsPage.prototype.getDeviceContacts = function (heading) {
        var obj = {
            'heading': heading,
            'contacts': this.contacts.getContacts()
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contact_details_contact_details__["a" /* ContactDetailsPage */], obj);
        modal.present();
        modal.onDidDismiss(function (item) {
        });
    };
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\details\details.html"*/'<ion-header style="background-color: #000;">\n  <ion-navbar hideBackButton>\n    <div start>\n      <img class="logo" src="assets/images/splashlogo.png" />\n      <ion-title style="transform: translateY(-5px); display: inline-block;">My account</ion-title>\n    </div>\n    <ion-buttons end>\n      <div style="display: flex">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <button class="notificationBtn">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="d-flex userInfo p-l">\n    <div class="user">\n      <img style="transform: translateY(10px)" src="assets/images/user.png" />\n    </div>\n    <div class="userName">\n      <h5 class="fontWeightNormal">Suhas sharma</h5>\n      <progress-bar  [progress]="12"  [color]="\'#488aff\'">\n      </progress-bar>\n      <span style="font-size: small; color: grey;">12% completed</span>\n    </div>\n  </div>\n  <div>\n    <p class="p-l info">Share your details so we can you give you personalised\n      asthma action plan and more</p>\n    <div style="margin-top: 10px">\n      <ion-item>\n        <ion-label>Enable conversational form</ion-label>\n        <ion-toggle></ion-toggle>\n      </ion-item>\n    </div>\n    <ion-buttons>\n      <div class="d-flex tabLayout">\n        <button (click)="shown = 0" [class.active]="shown === 0">Personal</button>\n        <button (click)="shown = 1" [class.active]="shown === 1">Emergency</button>\n        <button (click)="shown = 2" [class.active]="shown === 2">Lifestyle</button>\n      </div>\n    </ion-buttons>\n\n    <form (ngSubmit)="onSubmit(form)" #form>\n      <div class="form" *ngIf="shown === 0">\n        <div class="mb">\n          <ion-item no-padding>\n            <ion-label stacked>Gender</ion-label>\n            <ion-select>\n              <ion-option value="female">Female</ion-option>\n              <ion-option value="male">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class="mb">\n          <ion-item  no-padding>\n            <ion-label stacked>Email Address</ion-label>\n            <ion-input type="email" placeholder="Email address" value="suhassharma@gmail.com"></ion-input>\n          </ion-item>\n        </div>\n        <div class="mb">\n          <ion-item no-padding>\n            <ion-label stacked>Birthday</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n          </ion-item>\n        </div>\n\n        <div class="mb">\n          <ion-item no-padding>\n            <ion-label stacked>Contact number</ion-label>\n            <ion-input type="text" placeholder="10-digit contact number" value="+91-1234567890"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="mb">\n          <ion-item no-padding>\n            <ion-label stacked>Location</ion-label>\n            <ion-input type="text" placeholder="Enter location" value="Pune"></ion-input>\n          </ion-item>\n        </div>\n\n        <ion-label>Height</ion-label>\n        <div class="d-flex mb justify-content-between">\n          <div>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Height in feet" value="0"></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Height in inch" value="0"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n\n        <ion-label>Weight</ion-label>\n        <div class="d-flex mb justify-content-between">\n          <div>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Weight in kg" value="0"></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Weight in gms" value="0"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n\n        <div text-center class="mt">\n          <button (click)="shown = 1" type="submit" class="bgBlack btnRounded">Next</button>\n        </div>\n      </div>\n\n      <div class="form" *ngIf="shown === 1">\n        <div style="margin-top: 10px">\n          <ion-item no-padding no-lines no-margin>\n            <ion-label>Send regular health alerts<br> to caregiver</ion-label>\n            <ion-toggle></ion-toggle>\n          </ion-item>\n        </div>\n        <div style="margin-top: 10px">\n          <ion-item no-padding no-lines no-margin>\n            <ion-label>Schedule appoinment<br> in emergency</ion-label>\n            <ion-toggle></ion-toggle>\n          </ion-item>\n        </div><hr>\n\n        <div>\n          <h5 class="fontWeightNormal">Caregiver details</h5>\n          <div class="d-flex justify-content-between">\n            <ion-label>Primary contact</ion-label>\n            <button (click)="getDeviceContacts(\'Choose caregiver contact\')" class="addBtn">\n              <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n            </button>\n          </div>\n\n          <div>\n            <ion-input type="text" placeholder="Full name"></ion-input>\n            <ion-input type="text" placeholder="Contact number"></ion-input>\n          </div>\n        </div><hr>\n\n        <div>\n          <div>\n            <div class="d-flex justify-content-between">\n              <ion-label>Secondary contact</ion-label>\n              <button  (click)="getDeviceContacts(\'Choose secondary contact\')" class="addBtn">\n                <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n              </button>\n            </div>\n            <div>\n              <ion-input type="text" placeholder="Full name"></ion-input>\n              <ion-input type="text" placeholder="Contact number"></ion-input>\n            </div>\n          </div>\n          <div>\n            <div class="d-flex justify-content-between">\n              <ion-label>My GP</ion-label>\n              <button (click)="getDeviceContacts(\'Choose third contact\')" class="addBtn">\n                <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n              </button>\n            </div>\n            <div>\n              <ion-input type="text" placeholder="Full name"></ion-input>\n              <ion-input type="text" placeholder="Contact number"></ion-input>\n            </div>\n          </div>\n        </div>\n\n        <div text-center class="mt">\n          <button (click)="shown = 2" type="submit" class="bgBlack btnRounded">Next</button>\n        </div>\n      </div>\n\n      <div padding class="form" *ngIf="shown === 2">\n        <div class="d-flex">\n          <ion-label no-padding no-margin no-lines>Physical activities</ion-label>\n          <button class="addBtn">\n            <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\details\details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* contactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* contactService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_with_email_register_with_email__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerWithEmail = __WEBPACK_IMPORTED_MODULE_2__register_with_email_register_with_email__["a" /* RegisterWithEmailPage */];
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\register\register.html"*/'<ion-content padding text-center>\n  <div class="headerText">\n    <h3 class="fontWeightNormal">Create an account</h3>\n  </div>\n  <div >\n    <div>\n      <button [navPush]="registerWithEmail" class="bgGrey bgGreyMargin btnRounded">Signup with email</button>\n    </div>\n    <div>\n      <button class="bgBlack bgBlackMargin btnRounded">Signup with facebook</button>\n    </div>\n  </div>\n\n  <div class="footerText">\n    <p class="fontWeightNormal ">By continuing, you are agree to our <span class="textGreen">terms & conditions</span></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterWithEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
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
 * Generated class for the RegisterWithEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterWithEmailPage = /** @class */ (function () {
    function RegisterWithEmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    RegisterWithEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterWithEmailPage');
    };
    RegisterWithEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register-with-email',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\register-with-email\register-with-email.html"*/'<ion-content>\n  <div class="headerText">\n    <h2 class="fontWeightNormal">Sign up</h2>\n  </div>\n  <form class="form">\n    <div class="mb">\n      <ion-item no-padding>\n        <ion-input type="text" placeholder="First name"></ion-input>\n      </ion-item>\n    </div>\n    <div class="mb">\n      <ion-item  no-padding>\n        <ion-input type="text" placeholder="Last name"></ion-input>\n      </ion-item>\n    </div>\n    <div class="mb">\n      <ion-item  no-padding>\n        <ion-input type="email" placeholder="Email address"></ion-input>\n      </ion-item>\n    </div>\n    <div class="mb">\n      <ion-item no-padding>\n        <ion-input type="password" placeholder="Password(8+ characters)"></ion-input>\n      </ion-item>\n    </div>\n\n    <div text-center class="mt">\n      <button [navPush]="login" type="submit" class="bgBlack btnRounded">Get started</button>\n    </div>\n  </form>\n  <div text-center class="mt">\n    <p class="fontWeightNormal">By continuing, you are agree to our <span class="textGreen">terms & conditions</span></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\register-with-email\register-with-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterWithEmailPage);
    return RegisterWithEmailPage;
}());

//# sourceMappingURL=register-with-email.js.map

/***/ }),

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/contact-details/contact-details.module": [
		711,
		7
	],
	"../pages/details/details.module": [
		712,
		6
	],
	"../pages/login/login.module": [
		713,
		5
	],
	"../pages/myaccount/myaccount.module": [
		714,
		4
	],
	"../pages/onboarding/onboarding.module": [
		715,
		3
	],
	"../pages/permission/permission.module": [
		716,
		2
	],
	"../pages/register-with-email/register-with-email.module": [
		717,
		1
	],
	"../pages/register/register.module": [
		718,
		0
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyaccountPage');
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myaccount',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\myaccount\myaccount.html"*/'<!--\n  Generated template for the MyaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myaccount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\myaccount\myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the PermissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PermissionPage = /** @class */ (function () {
    function PermissionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PermissionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PermissionPage');
    };
    PermissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-permission',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\permission\permission.html"*/'<!--\n  Generated template for the PermissionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>permission</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\permission\permission.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PermissionPage);
    return PermissionPage;
}());

//# sourceMappingURL=permission.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(397);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_onboarding_onboarding__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_with_email_register_with_email__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_permission_permission__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_myaccount_myaccount__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_details__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_progress_bar__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_contact_details_contact_details__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_with_email_register_with_email__["a" /* RegisterWithEmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_permission_permission__["a" /* PermissionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission/permission.module#PermissionPageModule', name: 'PermissionPage', segment: 'permission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-with-email/register-with-email.module#RegisterWithEmailPageModule', name: 'RegisterWithEmailPage', segment: 'register-with-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_with_email_register_with_email__["a" /* RegisterWithEmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_permission_permission__["a" /* PermissionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var contactService = /** @class */ (function () {
    function contactService() {
    }
    contactService.prototype.getContacts = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["a" /* Contacts */].find(['displayName', 'phoneNumbers'], { filter: "", multiple: true })
            .then(function (data) {
            _this.contacts = data;
            console.log(_this.contacts);
        });
        return this.contacts;
    };
    contactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], contactService);
    return contactService;
}());

//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_onboarding_onboarding__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_onboarding_onboarding__["a" /* OnboardingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\app\app.html"*/'<ion-menu [content]="nav" side="right" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item>\n        Help\n      </button>\n      <button ion-item>\n        Settings\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding_onboarding__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.onBoard = __WEBPACK_IMPORTED_MODULE_2__onboarding_onboarding__["a" /* OnboardingPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p>Actually this is splash screen page</p>\n    <button ion-button [navPush]="onBoard">Next</button>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.details = __WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\login\login.html"*/'<ion-content padding>\n  <div class="headerText">\n    <h2 class="fontWeightNormal">Welcome Back!</h2>\n  </div>\n  <form class="form">\n    <div class="mb">\n      <ion-item no-padding>\n        <ion-label stacked>Email address</ion-label>\n        <ion-input type="email" placeholder="Email address"></ion-input>\n      </ion-item>\n    </div>\n    <div style="margin-bottom: 15px;">\n      <ion-item no-padding>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" placeholder="Password(8+ characters)"></ion-input>\n      </ion-item>\n    </div>\n    <button class="textGreen" style="background: transparent">Forget Password</button>\n    <div text-center class="mt">\n      <div>\n        <button class="btnRounded bgBlack" [navPush]="details">Log in</button>\n      </div>\n      <p style="font-size: medium; margin: 20px 0">or</p>\n      <div>\n        <button class="btnRounded bgGrey">Login with email</button>\n        <button class="btnRounded bgLightGrey mt">Login with facebook</button>\n      </div>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.register = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.login = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    OnboardingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnboardingPage');
    };
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"F:\JS\asthamaPRO\client\src\pages\onboarding\onboarding.html"*/'<ion-content text-center>\n  <ion-img class="logo" src="assets/images/logo.png"></ion-img>\n\n  <ion-slides [loop]="true" [pager]="true" autoplay="1000" [centeredSlides]="true">\n    <ion-slide>\n      <div>\n        <img class="sliderImg" src="assets/images/slider1.jpg" />\n      </div>\n      <p>Learn about health and asthma</p>\n    </ion-slide>\n    <ion-slide>\n      <div>\n        <img class="sliderImg" src="assets/images/slider2.jpg"/>\n      </div>\n      <p>Makes asthma tracking easy</p>\n    </ion-slide>\n    <ion-slide>\n      <div>\n        <img class="sliderImg" src="assets/images/slider1.jpg"  />\n      </div>\n      <p>Get assistance from SIA for all your problems</p>\n    </ion-slide>\n  </ion-slides>\n\n  <div>\n    <p style="font-size: medium">Already have an account? <button [navPush]="login" class="textGreen" style="background: transparent">Log in</button></p>\n  </div>\n\n  <div class="cta">\n    <ion-buttons>\n      <button [navPush]="register" class="btn-block">Begin your journey</button>\n    </ion-buttons>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"F:\JS\asthamaPRO\client\src\pages\onboarding\onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ })

},[392]);
//# sourceMappingURL=main.js.map