webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_login_login_component__ = __webpack_require__("../../../../../src/app/content/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_banner_banner_component__ = __webpack_require__("../../../../../src/app/content/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_profile_card_profile_card_component__ = __webpack_require__("../../../../../src/app/content/profile_card/profile_card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_connect_connect_component__ = __webpack_require__("../../../../../src/app/content/connect/connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_customer_consent_customer_consent_component__ = __webpack_require__("../../../../../src/app/content/customer_consent/customer_consent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_fund_navigator_fund_navigator_component__ = __webpack_require__("../../../../../src/app/content/fund-navigator/fund-navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_rowcounter_ud_rowcounter_ud_component__ = __webpack_require__("../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_end_transaction_confirmation_end_transaction_confirmation_component__ = __webpack_require__("../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_canactivate_via_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/canactivate-via-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__ = __webpack_require__("../../../../../src/app/services/canactivate-home-to-customer-consent-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// Change the name corresponding to globals
var routes = [
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["a" /* LOGIN */], component: __WEBPACK_IMPORTED_MODULE_2__content_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_canactivate_via_auth_guard_service__["a" /* CanActivateViaAuthGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["c" /* CONNECT */], component: __WEBPACK_IMPORTED_MODULE_5__content_connect_connect_component__["a" /* ConnectComponent */], canActivate: [] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["v" /* HOME */], component: __WEBPACK_IMPORTED_MODULE_3__content_banner_banner_component__["a" /* BannerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["l" /* PROFILE_CARD */], component: __WEBPACK_IMPORTED_MODULE_4__content_profile_card_profile_card_component__["a" /* ProfileCardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["m" /* CUSTOMER_CONSENT */], component: __WEBPACK_IMPORTED_MODULE_6__content_customer_consent_customer_consent_component__["a" /* CustomerConsentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["w" /* ROWCOUNTER_PROCEDURES */], component: __WEBPACK_IMPORTED_MODULE_3__content_banner_banner_component__["a" /* BannerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["n" /* FUND_NAVIGATOR */], component: __WEBPACK_IMPORTED_MODULE_7__content_fund_navigator_fund_navigator_component__["a" /* FundNavigatorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["o" /* ROWCOUNTER_UD */], component: __WEBPACK_IMPORTED_MODULE_8__content_rowcounter_ud_rowcounter_ud_component__["a" /* RowCounterUDComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: __WEBPACK_IMPORTED_MODULE_12__globals__["p" /* END_TRANSACTION */], component: __WEBPACK_IMPORTED_MODULE_9__content_end_transaction_confirmation_end_transaction_confirmation_component__["a" /* EndTransactionConfirmationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__content_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n  opacity:    0.5;\r\n  background: #000;\r\n  width:      100%;\r\n  height:     100%;\r\n  z-index:    10;\r\n  top:        0;\r\n  left:       0;\r\n  position:   fixed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<div [ngClass]=\"showBackground()\" #background></div>\r\n\r\n<!-- Stop Recording -->\r\n<div id=\"stopRecordingModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"></h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <p>กรุณายืนยันการหยุดบันทึกภาพและเสียง</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-main\" (click)=\"onStopRecording()\">ยืนยัน</button>\r\n        <button type=\"button\" class=\"btn btn-cancel\" data-dismiss=\"modal\">ไม่ยืนยัน</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Logout Modal -->\r\n<div id=\"logoutModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Log Out</h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <p>กรุณายืนยันการออกจากระบบ</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-main\" (click)=\"onLogout()\">ยืนยัน</button>\r\n        <button type=\"button\" class=\"btn btn-cancel\" data-dismiss=\"modal\">ไม่ยืนยัน</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var AppComponent = (function () {
    function AppComponent(document, messageCommunicationService, recorderService, userService, navigationService, deviceService, location, router, imageService) {
        this.document = document;
        this.messageCommunicationService = messageCommunicationService;
        this.recorderService = recorderService;
        this.userService = userService;
        this.navigationService = navigationService;
        this.deviceService = deviceService;
        this.location = location;
        this.router = router;
        this.imageService = imageService;
        this.isMobile = this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_11__globals__["x" /* UNKNOWN */];
        this.showBg = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getBanners();
        this.messageCommunicationService.logoutSubject.subscribe(function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_11__globals__["q" /* LOGOUT */]) {
                _this.userService.logOut();
                if (!_this.isMobile) {
                    _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_11__globals__["a" /* LOGIN */]]);
                }
                else {
                    _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_11__globals__["c" /* CONNECT */]]);
                }
            }
        });
        this.messageCommunicationService.backgroundSubject.subscribe(function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_11__globals__["j" /* BACKGROUND */]) {
                if (message.message === __WEBPACK_IMPORTED_MODULE_11__globals__["s" /* SHOW */]) {
                    _this.showBg = true;
                }
                else if (message.message === __WEBPACK_IMPORTED_MODULE_11__globals__["t" /* HIDE */]) {
                    _this.showBg = false;
                }
            }
        });
        this.messageCommunicationService.recordingSubject.subscribe(function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_11__globals__["r" /* STOP_RECORDING */]) {
                if (message.message === __WEBPACK_IMPORTED_MODULE_11__globals__["H" /* TO_HOME */]) {
                    _this.recorderService.recording = false;
                    _this.navigationService.disableNavBarAndUserLoginNavigation();
                    _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_11__globals__["v" /* HOME */]]);
                    //if mobile disconnect by closing tab then stop recording
                    if (!_this.isMobile) {
                        _this.recorderService.stopRecording();
                    }
                }
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_11__globals__["y" /* RECORDER */]) {
                if (message.message === __WEBPACK_IMPORTED_MODULE_11__globals__["r" /* STOP_RECORDING */]) {
                    jQuery("#stopRecordingModal").modal('show');
                }
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.onStopRecording = function () {
        this.recorderService.stopRecording();
        jQuery("#stopRecordingModal").modal('hide');
        var component = __WEBPACK_IMPORTED_MODULE_11__globals__["r" /* STOP_RECORDING */];
        var message = __WEBPACK_IMPORTED_MODULE_11__globals__["H" /* TO_HOME */];
        this.messageCommunicationService.sendMessage(component, message);
        this.navigationService.disableNavBarAndUserLoginNavigation();
        this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_11__globals__["v" /* HOME */]]);
    };
    AppComponent.prototype.onLogout = function () {
        var component = __WEBPACK_IMPORTED_MODULE_11__globals__["q" /* LOGOUT */];
        var message = this.userService.user.id;
        var messageModel = new __WEBPACK_IMPORTED_MODULE_10__models_message_model__["a" /* MessageModel */]();
        messageModel.component = component;
        messageModel.message = message;
        this.messageCommunicationService.sendMessage(component, message);
        this.messageCommunicationService.logoutSubject.next(messageModel);
        jQuery("#logoutModal").modal('hide');
    };
    AppComponent.prototype.showBackground = function () {
        return this.showBg === true ? 'background' : '';
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_recorder_service__["a" /* RecorderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__services_images_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_images_service__["a" /* ImageService */]) === "function" && _h || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_swiper_wrapper__ = __webpack_require__("../../../../ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_menu_menu_component__ = __webpack_require__("../../../../../src/app/header/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_login_login_component__ = __webpack_require__("../../../../../src/app/content/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__content_connect_connect_component__ = __webpack_require__("../../../../../src/app/content/connect/connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__content_banner_banner_component__ = __webpack_require__("../../../../../src/app/content/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__content_profile_card_profile_card_component__ = __webpack_require__("../../../../../src/app/content/profile_card/profile_card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__content_customer_consent_customer_consent_component__ = __webpack_require__("../../../../../src/app/content/customer_consent/customer_consent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__content_fund_navigator_fund_navigator_component__ = __webpack_require__("../../../../../src/app/content/fund-navigator/fund-navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__content_rowcounter_ud_rowcounter_ud_component__ = __webpack_require__("../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_end_transaction_confirmation_end_transaction_confirmation_component__ = __webpack_require__("../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__error_handler_error_handler_component__ = __webpack_require__("../../../../../src/app/error-handler/error-handler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_sharepoint_service__ = __webpack_require__("../../../../../src/app/services/sharepoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_canactivate_via_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/canactivate-via-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_canactivate_home_to_customer_consent_guard_service__ = __webpack_require__("../../../../../src/app/services/canactivate-home-to-customer-consent-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var SWIPER_CONFIG = {};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__content_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__content_banner_banner_component__["a" /* BannerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__content_profile_card_profile_card_component__["a" /* ProfileCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__content_connect_connect_component__["a" /* ConnectComponent */],
            __WEBPACK_IMPORTED_MODULE_17__content_customer_consent_customer_consent_component__["a" /* CustomerConsentComponent */],
            __WEBPACK_IMPORTED_MODULE_18__content_fund_navigator_fund_navigator_component__["a" /* FundNavigatorComponent */],
            __WEBPACK_IMPORTED_MODULE_19__content_rowcounter_ud_rowcounter_ud_component__["a" /* RowCounterUDComponent */],
            __WEBPACK_IMPORTED_MODULE_20__content_end_transaction_confirmation_end_transaction_confirmation_component__["a" /* EndTransactionConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__error_handler_error_handler_component__["a" /* ErrorHandlerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_30__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_swiper_wrapper__["SwiperModule"].forRoot(SWIPER_CONFIG)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_23__services_recorder_service__["a" /* RecorderService */],
            __WEBPACK_IMPORTED_MODULE_24__services_sharepoint_service__["a" /* SharepointService */],
            __WEBPACK_IMPORTED_MODULE_22__services_message_communication_service__["a" /* MessageCommunicationService */],
            __WEBPACK_IMPORTED_MODULE_26__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_27__services_images_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_28__services_canactivate_via_auth_guard_service__["a" /* CanActivateViaAuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_29__services_canactivate_home_to_customer_consent_guard_service__["a" /* CanActivateHomeToCustomerConsentGuardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Carousel */\r\n.carousel-image {\r\n    width: 100%; /* Set width to 100% */\r\n    margin: auto;\r\n    min-height: 30vh;\r\n    max-height: 65vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"carousel-wrapper\">\r\n      <swiper [config]=\"config\">\r\n        <div [ngClass]=\"getActive(i)\" *ngFor=\"let banner of banners; let i=index\" >\r\n          <img src=\"{{banner}}\" class=\"center-block img-responsive carousel-image\" alt=\"test\">\r\n        </div>\r\n      </swiper>\r\n      <div class=\"swiper-pagination\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center vertical-align\">\r\n    <div class=\"col-md-12\">\r\n      <button type=\"button\" class=\"btn btn-main\" (click)=\"onNext()\" [disabled]=\"isMobile\">{{nextWording}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BannerComponent = (function () {
    function BannerComponent(navigationService, messageCommunicationService, route, router, userService, deviceService, imageService) {
        this.navigationService = navigationService;
        this.messageCommunicationService = messageCommunicationService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.deviceService = deviceService;
        this.imageService = imageService;
        this.banners = [];
        this.isMobile = this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_7__globals__["x" /* UNKNOWN */];
        this.nextWording = __WEBPACK_IMPORTED_MODULE_7__globals__["D" /* START_TRANSACTION */];
        this.draggable = this.isMobile;
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.banners = this.imageService.bannerImages;
        this.getConfig(this.isMobile);
        this.messageCommunicationService.setBackgroundOverlay(false);
        var routeName = this.router.url;
        if (routeName === ('/' + __WEBPACK_IMPORTED_MODULE_7__globals__["w" /* ROWCOUNTER_PROCEDURES */])) {
            this.nextWording = __WEBPACK_IMPORTED_MODULE_7__globals__["E" /* NEXT */];
        }
        this.messageCommunicationService.bannerComponentSubject.subscribe(function (message) {
            var component = message.component;
            var body = message.message;
            if (body === __WEBPACK_IMPORTED_MODULE_7__globals__["F" /* TO_PROFILE_CARD */]) {
                console.log(message);
                _this.navigationService.startTransaction();
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_7__globals__["l" /* PROFILE_CARD */]]);
            }
            else if (body === __WEBPACK_IMPORTED_MODULE_7__globals__["G" /* TO_FUND_NAVIGATOR */]) {
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_7__globals__["n" /* FUND_NAVIGATOR */]]);
            }
        });
    };
    BannerComponent.prototype.onNext = function () {
        this.messageCommunicationService.setBackgroundOverlay(true);
        var routeName = this.router.url;
        var component = __WEBPACK_IMPORTED_MODULE_7__globals__["k" /* BANNER */];
        if (routeName === ('/' + __WEBPACK_IMPORTED_MODULE_7__globals__["v" /* HOME */])) {
            var message = __WEBPACK_IMPORTED_MODULE_7__globals__["F" /* TO_PROFILE_CARD */];
            this.messageCommunicationService.sendMessage(component, message);
            this.navigationService.startTransaction();
            this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_7__globals__["l" /* PROFILE_CARD */]]);
        }
        else if (routeName === ('/' + __WEBPACK_IMPORTED_MODULE_7__globals__["w" /* ROWCOUNTER_PROCEDURES */])) {
            var message = __WEBPACK_IMPORTED_MODULE_7__globals__["G" /* TO_FUND_NAVIGATOR */];
            this.messageCommunicationService.sendMessage(component, message);
            this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_7__globals__["n" /* FUND_NAVIGATOR */]]);
        }
    };
    BannerComponent.prototype.getActive = function (index) {
        return index === 0 ? 'active' : '';
    };
    BannerComponent.prototype.getConfig = function (isMobile) {
        if (isMobile) {
            this.config = {
                direction: 'horizontal',
                speed: 500,
                slidesPerView: 'auto',
                autoplay: 3000,
                loop: true,
                loopedSlides: this.banners.length,
                pagination: '.swiper-pagination',
                paginationClickable: true
            };
        }
        else {
            this.config = {
                direction: 'horizontal',
                speed: 500,
                slidesPerView: 'auto',
                autoplay: 3000,
                loop: true,
                loopedSlides: this.banners.length,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            };
        }
    };
    return BannerComponent;
}());
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__("../../../../../src/app/content/banner/banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/banner/banner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_images_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_images_service__["a" /* ImageService */]) === "function" && _g || Object])
], BannerComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/connect/connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  margin: 20px;\r\n}\r\n\r\n.connectInfo {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center vertical-align text\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"connectInfo\">\r\n        <h3>\r\n            กรุณาใส่รหัสพนักงาน<br>ที่ต้องการเชื่อมต่อ\r\n        </h3>\r\n\r\n      </div>\r\n      <hr>\r\n      <div class=\"connectInputForm\">\r\n        <label for=\"connectInput\">รหัสพนักงาน</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"connectInput\" #roomId>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-main\" (click)=\"onConnect()\">เชื่อมต่อ</button>\r\n      </div>\r\n      <p *ngIf=\"errorRoom\">{{errorMessage}}</p>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/connect/connect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectComponent = (function () {
    function ConnectComponent(messageCommunicationService, userService, navigationService, router) {
        this.messageCommunicationService = messageCommunicationService;
        this.userService = userService;
        this.navigationService = navigationService;
        this.router = router;
        this.errorRoom = false;
        this.errorMessage = '';
    }
    ConnectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.showNavigation = true;
        this.navigationService.showUserLoginNavigation = true;
        this.messageCommunicationService.connectSubject.subscribe(function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_5__globals__["h" /* GET_ROOM_STATUS */]) {
                var status = '' + message.message;
                _this.errorMessage = status;
                _this.errorRoom = true;
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_5__globals__["e" /* USER_DATA */]) {
                _this.userService.setUser(message.message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_5__globals__["i" /* SET_CLIENT_ID_TO_SEND_TO */]) {
                _this.navigationService.disableNavBarAndUserLoginNavigation();
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_5__globals__["v" /* HOME */]]);
            }
        });
    };
    ConnectComponent.prototype.onConnect = function () {
        var role = __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* CUSTOMER */];
        var roomId = this.roomId.nativeElement.value;
        this.messageCommunicationService.connect(role, roomId);
    };
    ConnectComponent.prototype.ngOnDestroy = function () {
    };
    return ConnectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('roomId'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ConnectComponent.prototype, "roomId", void 0);
ConnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-connect',
        template: __webpack_require__("../../../../../src/app/content/connect/connect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/connect/connect.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ConnectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=connect.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <app-login></app-login>\r\n    <app-banner></app-banner>\r\n    <app-profile-card></app-profile-card>\r\n    <app-connect></app-connect>\r\n    <app-customer-consent></app-customer-consent>\r\n  </div>\r\n  {{test}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentComponent = (function () {
    function ContentComponent(router, userService, messageCommunicationService, recorderService, deviceService) {
        this.router = router;
        this.userService = userService;
        this.messageCommunicationService = messageCommunicationService;
        this.recorderService = recorderService;
        this.deviceService = deviceService;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _e || Object])
], ContentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/customer_consent/customer_consent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  margin: 20px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/customer_consent/customer_consent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center vertical-align text\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <label for=\"consentForm\" class=\"header-text\"><h3>ข้อมูลลูกค้า</h3></label>\r\n      <form id=\"consentForm\" class=\"text-center\" #consentForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 text-right\">\r\n            <label for=\"accountname\" class=\"control-label\"><small>ชื่อ/นามสกุล</small></label>\r\n          </div>\r\n          <div class=\"col-md-8 text-left\">\r\n            <div class=\"form-inline\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"accountname\"\r\n                name=\"accountname\"\r\n                ngModel\r\n                required\r\n                (ngModelChange)=\"onNameChange($event)\"\r\n                [disabled]=\"disableName\"\r\n                #accountName>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row \">\r\n          <div class=\"col-md-4 text-right\">\r\n            <label for=\"accountcis\" class=\"control-label\"><small>รหัส CIS ลูกค้า</small></label>\r\n          </div>\r\n          <div class=\"col-md-8 text-left\">\r\n            <div class=\"form-inline\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"accountcis\"\r\n                name=\"accountcis\"\r\n                ngModel\r\n                required\r\n                (ngModelChange)=\"onCISChange($event)\"\r\n                [disabled]=\"disableCIS\"\r\n                #accountCIS>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n  \t\t\t  <!-- <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n  \t\t\t  \t<input\r\n              type=\"text\"\r\n              class=\"form-control mb-2 mr-sm-2 mb-sm-0\"\r\n              id=\"accountname\"\r\n              name=\"accountname\"\r\n              placeholder=\"ชื่อ - นามสกุล\"\r\n              ngModel\r\n              required\r\n              (ngModelChange)=\"onNameChange($event)\"\r\n              [disabled]=\"disableName\"\r\n              #accountName>\r\n  \t\t\t  </div>\r\n\r\n  \t\t\t  <label class=\"sr-only\" for=\"accountcis\">นามสกุล</label>\r\n  \t\t\t  <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n  \t\t\t    <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"accountcis\"\r\n              name=\"accountcis\"\r\n              placeholder=\"CIS\"\r\n              ngModel\r\n              required\r\n              (ngModelChange)=\"onCISChange($event)\"\r\n              [disabled]=\"disableCIS\"\r\n              #accountCIS>\r\n  \t\t\t  </div> -->\r\n          <hr>\r\n            <h3>ขออนุญาตบันทึกภาพและเสียง</h3>\r\n            <p style=\"margin: 10px\">\r\n              ขออนุญาตท่านในการบันทึกภาพหน้าจอและเสียงระหว่างการทำธุรกรรม<br>\r\n              เพิ่อเป็นข้อมูลในการพัฒนาการบริการของธนาคาร\r\n            </p>\r\n          <hr>\r\n\r\n  \t\t\t\t<button type=\"button\" id=\"customerAccept\"  class=\"btn btn-main\" [disabled]=\"nameNull || cisNull\" (click)=\"onConsentClick(true)\">อนุญาต</button>\r\n  \t\t\t\t<button type=\"button\" id=\"customerDecline\"  class=\"btn btn-cancel\" [disabled]=\"nameNull || cisNull\" (click)=\"onConsentClick(false)\">ไม่อนุญาต</button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/customer_consent/customer_consent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerConsentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerConsentComponent = (function () {
    function CustomerConsentComponent(recorderService, messageCommunicationService, route, router, deviceService) {
        this.recorderService = recorderService;
        this.messageCommunicationService = messageCommunicationService;
        this.route = route;
        this.router = router;
        this.deviceService = deviceService;
        this.disableName = false;
        this.disableCIS = false;
        this.nameNull = true;
        this.cisNull = true;
    }
    CustomerConsentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageCommunicationService.setBackgroundOverlay(false);
        if (this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_6__globals__["x" /* UNKNOWN */]) {
            this.disableName = true;
            this.disableCIS = true;
        }
        this.messageCommunicationService.customerConsentComponentSubject.subscribe(function (message) {
            var body = message.message;
            if (body === __WEBPACK_IMPORTED_MODULE_6__globals__["B" /* TO_ROWCOUNTER_PROCEDURE */]) {
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_6__globals__["w" /* ROWCOUNTER_PROCEDURES */]]);
            }
            else if (body === __WEBPACK_IMPORTED_MODULE_6__globals__["u" /* START_RECORDING */]) {
                var accountName = _this.accountName.nativeElement.value;
                var accountCIS = _this.accountCIS.nativeElement.value;
                _this.recorderService.setAccountNameAndCIS(accountName, accountCIS);
                _this.recorderService.record();
            }
            else if (body.component === 'account-name') {
                _this.nameNull = body.message === '';
                _this.accountName.nativeElement.value = body.message;
            }
            else if (body.component === 'account-cis') {
                _this.cisNull = body.message === '';
                _this.accountCIS.nativeElement.value = body.message;
            }
        });
    };
    CustomerConsentComponent.prototype.onNameChange = function (event) {
        var component = __WEBPACK_IMPORTED_MODULE_6__globals__["m" /* CUSTOMER_CONSENT */];
        var message = {
            component: 'account-name',
            message: event
        };
        this.messageCommunicationService.sendMessage(component, message);
    };
    CustomerConsentComponent.prototype.onCISChange = function (event) {
        var component = __WEBPACK_IMPORTED_MODULE_6__globals__["m" /* CUSTOMER_CONSENT */];
        var message = {
            component: 'account-cis',
            message: event
        };
        this.messageCommunicationService.sendMessage(component, message);
    };
    CustomerConsentComponent.prototype.onConsentClick = function (allowRecording) {
        this.messageCommunicationService.setBackgroundOverlay(true);
        var component = __WEBPACK_IMPORTED_MODULE_6__globals__["m" /* CUSTOMER_CONSENT */];
        if (allowRecording) {
            var message_1 = __WEBPACK_IMPORTED_MODULE_6__globals__["u" /* START_RECORDING */];
            this.messageCommunicationService.sendMessage(component, message_1);
            this.recorderService.recording = true;
        }
        var message = __WEBPACK_IMPORTED_MODULE_6__globals__["B" /* TO_ROWCOUNTER_PROCEDURE */];
        this.messageCommunicationService.sendMessage(component, message);
        this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_6__globals__["w" /* ROWCOUNTER_PROCEDURES */]]);
    };
    return CustomerConsentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('consentForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], CustomerConsentComponent.prototype, "consentForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accountName'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], CustomerConsentComponent.prototype, "accountName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accountCIS'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], CustomerConsentComponent.prototype, "accountCIS", void 0);
CustomerConsentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer-consent',
        template: __webpack_require__("../../../../../src/app/content/customer_consent/customer_consent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/customer_consent/customer_consent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _h || Object])
], CustomerConsentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=customer_consent.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  padding: 10px;\r\n}\r\n\r\n.img-responsive {\r\n  padding: 10px;\r\n  min-height: 10vh;\r\n  max-height: 50vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n      <div class=\"row text\">\r\n        <strong>กรุณาชำระเงินด้วยบัตรเครดิต หรือ เงินสด</strong>\r\n      </div>\r\n      <div class=\"row\">\r\n        <img src=\"assets/EndTransaction/endTransaction.jpg\" class=\"center-block img-responsive\" alt=\"ud\">\r\n      </div>\r\n      <div class=\"row text\">\r\n        <small>ท่านจะได้รับกรรมธรรม์ประกันภัย หรือ ได้รับการติดต่อจากบริษัทที่เกี่ยวข้องกับประกันภัย ภายใน 5 วัน</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-main\" (click)=\"onEndTransaction()\" [disabled]=\"!isMobile\">ยืนยัน</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndTransactionConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EndTransactionConfirmationComponent = (function () {
    function EndTransactionConfirmationComponent(router, messageCommunicationService, navigationService, recorderService, deviceService) {
        this.router = router;
        this.messageCommunicationService = messageCommunicationService;
        this.navigationService = navigationService;
        this.recorderService = recorderService;
        this.deviceService = deviceService;
        this.isMobile = this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_7__globals__["x" /* UNKNOWN */];
    }
    EndTransactionConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageCommunicationService.setBackgroundOverlay(false);
        this.messageCommunicationService.endTransactionComponentSubject.subscribe(function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_7__globals__["p" /* END_TRANSACTION */]) {
                if (message.message === __WEBPACK_IMPORTED_MODULE_7__globals__["r" /* STOP_RECORDING */]) {
                    var body = new __WEBPACK_IMPORTED_MODULE_6__models_message_model__["a" /* MessageModel */]();
                    body.component = __WEBPACK_IMPORTED_MODULE_7__globals__["y" /* RECORDER */];
                    body.message = __WEBPACK_IMPORTED_MODULE_7__globals__["r" /* STOP_RECORDING */];
                    _this.messageCommunicationService.recordingSubject.next(body);
                }
            }
        });
    };
    EndTransactionConfirmationComponent.prototype.onEndTransaction = function () {
        var component = __WEBPACK_IMPORTED_MODULE_7__globals__["p" /* END_TRANSACTION */];
        var message = __WEBPACK_IMPORTED_MODULE_7__globals__["r" /* STOP_RECORDING */];
        this.messageCommunicationService.sendMessage(component, message);
    };
    return EndTransactionConfirmationComponent;
}());
EndTransactionConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-end-transaction-confirmation',
        template: __webpack_require__("../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/end-transaction-confirmation/end-transaction-confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _e || Object])
], EndTransactionConfirmationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=end-transaction-confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/fund-navigator/fund-navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/fund-navigator/fund-navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12\">\r\n      <p>\r\n        Fund Navigator Page\r\n      </p>\r\n      <iframe id='fund-navigator-iframe' \r\n      src=\"https://k-invest.kasikornbankgroup.com/FundNavigator/FundNavigator.aspx\" width=\"100%\" height=\"500\"\r\n      (load)=\"onIframeclick();\">\r\n      </iframe>\r\n      <button type=\"button\" class=\"btn btn-main\" (click)=\"onNext()\">ยืนยันเรื่องกองทุน</button>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/fund-navigator/fund-navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundNavigatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Ng2DeviceService } from 'ng2-device-detector';


var FundNavigatorComponent = (function () {
    // isMobile = this.deviceService.device !== globals.UNKNOWN;
    function FundNavigatorComponent(router, messageCommunicationService
        // private deviceService: Ng2DeviceService
    ) {
        this.router = router;
        this.messageCommunicationService = messageCommunicationService;
    }
    FundNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageCommunicationService.setBackgroundOverlay(false);
        // if(!this.isMobile){
        //   console.log('this is pc');
        // }
        this.messageCommunicationService.fundNavigatorComponentSubject.subscribe(function (message) {
            _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_3__globals__["o" /* ROWCOUNTER_UD */]]);
        });
    };
    FundNavigatorComponent.prototype.onNext = function () {
        this.messageCommunicationService.setBackgroundOverlay(true);
        var component = __WEBPACK_IMPORTED_MODULE_3__globals__["n" /* FUND_NAVIGATOR */];
        var message = __WEBPACK_IMPORTED_MODULE_3__globals__["A" /* TO_ROWCOUNTER_UD */];
        this.messageCommunicationService.sendMessage(component, message);
        this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_3__globals__["o" /* ROWCOUNTER_UD */]]);
    };
    FundNavigatorComponent.prototype.onIframeclick = function () {
        console.log('iframe loaded!!');
        // jQuery('#ctl00_ContentPlaceHolder1_Tap1').click(function(){
        //   alert('1234');
        // });
        // console.log(jQuery('#ctl00_ContentPlaceHolder1_Tap1'));
        // console.log(jQuery('#fund-navigator-iframe').contents());
    };
    return FundNavigatorComponent;
}());
FundNavigatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fund-navigator',
        template: __webpack_require__("../../../../../src/app/content/fund-navigator/fund-navigator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/fund-navigator/fund-navigator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object])
], FundNavigatorComponent);

var _a, _b;
//# sourceMappingURL=fund-navigator.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n  margin: 10px;\r\n}\r\n\r\n.row {\r\n  margin-top: 7px;\r\n  margin-bottom: 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2\"></div>\r\n<div class=\"col-md-8\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form class=\"text-center text\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n        <p>\r\n          <span style=\"font-size: 1.5em;font-weight: 600\">Welcome to</span>\r\n          <br>\r\n          <span style=\"font-size: 1.8em;\" class=\"header-text\"><strong>Digital Sales<br>Management</strong></span>\r\n        </p>\r\n        <hr>\r\n\t\t\t\t<p>\r\n          <strong>\r\n            เข้าใช้งานด้วยรหัสผ่านเดียวกันกับรหัสผ่านที่ใช้ล็อกอินเข้าเครื่องคอมพิวเตอร์<br>\r\n            ของผู้ใช้งานแต่ละท่าน โดยกรอก Username และ Password ดังนี้\r\n          </strong>\r\n\r\n        </p>\r\n        <p>\r\n          <small>\r\n            ชื่อผู้ใช้ : K0 รหัสผ่านพนักงาน 6 หลัก<br>\r\n            รหัสผ่าน : รหัสผ่านตามที่ท่านได้บันทึกไว้\r\n          </small>\r\n        </p>\r\n        <hr>\r\n        <div class=\"row vertical-align\">\r\n          <div class=\"col-md-4 text-right\">\r\n            <label for=\"username\"><small>ชื่อผู้ใช้</small></label>\r\n          </div>\r\n          <div class=\"col-md-4 text-left\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control text\"\r\n              id=\"username\"\r\n              name=\"username\"\r\n              ngModel\r\n              required\r\n              #userName=\"ngModel\">\r\n          </div>\r\n          <div class=\"col-md-4\"></div>\r\n        </div>\r\n        <div class=\"row vertical-align\">\r\n          <div class=\"col-md-4 text-right\">\r\n              <label for=\"password\"><small>รหัสผ่าน</small></label>\r\n          </div>\r\n          <div class=\"col-md-4 text-left\">\r\n            <input\r\n              type=\"Password\"\r\n              class=\"form-control text\"\r\n              id=\"password\"\r\n              name=\"password\"\r\n              ngModel\r\n              required\r\n              #password=\"ngModel\">\r\n          </div>\r\n          <div class=\"col-md-4\"></div>\r\n        </div>\r\n        <p *ngIf=\"errorMessage\">กรุณาตรวจสอบข้อมูลอีกครั้ง</p>\r\n        <div class=\"row\">\r\n            <button type=\"submit\" class=\"btn btn-main\" name=\"login\" [disabled]=\"!loginForm.valid\">เข้าสู่ระบบ</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-2\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(userService, route, router, messageCommunicationService, navigationService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.messageCommunicationService = messageCommunicationService;
        this.navigationService = navigationService;
        this.errorMessage = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.showNavigation = true;
        this.navigationService.showUserLoginNavigation = true;
        // When user has data then move on to the next page
        this.messageCommunicationService.loginSubject.subscribe(function (message) {
            var component = message.component;
            var body = message.message;
            if (component === __WEBPACK_IMPORTED_MODULE_6__globals__["d" /* LOGIN_ERROR */]) {
                _this.errorMessage = true;
            }
            else if (component === __WEBPACK_IMPORTED_MODULE_6__globals__["e" /* USER_DATA */]) {
                _this.errorMessage = false;
                _this.userService.setUser(message.message);
                _this.navigationService.disableNavBarAndUserLoginNavigation();
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_6__globals__["v" /* HOME */]]);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var role = __WEBPACK_IMPORTED_MODULE_6__globals__["g" /* ROWCOUNTER */];
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        // Connect to the room with Id
        this.messageCommunicationService.login(role, username, password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/content/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/profile_card/profile_card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  border-radius: 20px;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/profile_card/profile_card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <div class=\"row text-center vertical-align \">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row text card\">\r\n        <div class=\"row text-center\">\r\n          <h2>ข้อมูลพนักงาน</h2>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img src=\"assets/Logos/KBank_Profile.jpg\" alt=\"ProfileCard\" class=\"img-responsive img-circle center-block\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          {{name}}\r\n          <hr>\r\n          {{position}}\r\n          <hr>\r\n          {{location}}\r\n          <hr>\r\n          หมายเลขใบอนุญาต : {{id}}\r\n          <hr>\r\n          <strong>ยินดีให้บริการ</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n  <div class=\"row text-center vertical-align\">\r\n    <div class=\"col-md-12\">\r\n      <button type=\"button\" class=\"btn btn-main\" (click)=\"onNext()\" [disabled]=\"isMobile\">ขั้นตอนถัดไป</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/profile_card/profile_card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileCardComponent = (function () {
    function ProfileCardComponent(userService, messageCommunicationService, router, locationRoute, deviceService) {
        this.userService = userService;
        this.messageCommunicationService = messageCommunicationService;
        this.router = router;
        this.locationRoute = locationRoute;
        this.deviceService = deviceService;
        this.name = '';
        this.position = '';
        this.location = '';
        this.id = '';
        this.isMobile = this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_6__globals__["x" /* UNKNOWN */];
    }
    ProfileCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageCommunicationService.setBackgroundOverlay(false);
        this.name = this.userService.user.name;
        this.position = this.userService.user.position;
        this.location = this.userService.user.location;
        this.id = this.userService.user.id;
        this.messageCommunicationService.profileCardComponentSubject.subscribe(function (message) {
            if (message.message === __WEBPACK_IMPORTED_MODULE_6__globals__["C" /* TO_CUSTOMER_CONSENT */]) {
                _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_6__globals__["m" /* CUSTOMER_CONSENT */]]);
            }
        });
    };
    ProfileCardComponent.prototype.onNext = function () {
        this.messageCommunicationService.setBackgroundOverlay(true);
        var component = __WEBPACK_IMPORTED_MODULE_6__globals__["l" /* PROFILE_CARD */];
        var message = __WEBPACK_IMPORTED_MODULE_6__globals__["C" /* TO_CUSTOMER_CONSENT */];
        this.messageCommunicationService.sendMessage(component, message);
        this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_6__globals__["m" /* CUSTOMER_CONSENT */]]);
    };
    return ProfileCardComponent;
}());
ProfileCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-card',
        template: __webpack_require__("../../../../../src/app/content/profile_card/profile_card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/profile_card/profile_card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _e || Object])
], ProfileCardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile_card.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container {\r\n  height: 100vh;\r\n}*/\r\n\r\n.row {\r\n  padding: 5px;\r\n}\r\n\r\n.image-div {\r\n  height: 55vh;\r\n}\r\n\r\n.img-responsive {\r\n  padding: 5px;\r\n\r\n}\r\n\r\n.img-responsive {\r\n  min-height: 10%;\r\n  max-height: 100%;\r\n}\r\n\r\n.message {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  background-color: rgb(173,176,181);\r\n  border-radius: 15px;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n          <div class=\"message\">\r\n            <small style=\"font-size: 0.8em;\">ขณะนี้พนักงานกำลังดำเนินรายการธุรกรรมกองทุนให้ท่านอยู่ กรุณารอเพื่อรับฟังการทวนรายการกองทุนสักครู่</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n      </div>\r\n      <div class=\"row image-div\">\r\n        <img src=\"assets/UD/ud1.jpg\" class=\"center-block img-responsive\" alt=\"ud\">\r\n      </div>\r\n      <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-main\" (click)=\"onNext()\" [disabled]=\"isMobile\">ขั้นตอนถัดไป</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowCounterUDComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RowCounterUDComponent = (function () {
    function RowCounterUDComponent(router, messageCommunicationService, deviceService) {
        this.router = router;
        this.messageCommunicationService = messageCommunicationService;
        this.deviceService = deviceService;
        this.isMobile = this.deviceService.device !== __WEBPACK_IMPORTED_MODULE_4__globals__["x" /* UNKNOWN */];
    }
    RowCounterUDComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageCommunicationService.setBackgroundOverlay(false);
        this.messageCommunicationService.rowCounterUDComponentSubject.subscribe(function (message) {
            _this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_4__globals__["p" /* END_TRANSACTION */]]);
        });
    };
    RowCounterUDComponent.prototype.onNext = function () {
        this.messageCommunicationService.setBackgroundOverlay(true);
        var component = __WEBPACK_IMPORTED_MODULE_4__globals__["o" /* ROWCOUNTER_UD */];
        var message = __WEBPACK_IMPORTED_MODULE_4__globals__["z" /* TO_END_OF_TRANSACTION */];
        this.messageCommunicationService.sendMessage(component, message);
        this.router.navigate(['/' + __WEBPACK_IMPORTED_MODULE_4__globals__["p" /* END_TRANSACTION */]]);
    };
    return RowCounterUDComponent;
}());
RowCounterUDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rowcounter-ud',
        template: __webpack_require__("../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/rowcounter-ud/rowcounter-ud.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _c || Object])
], RowCounterUDComponent);

var _a, _b, _c;
//# sourceMappingURL=rowcounter-ud.component.js.map

/***/ }),

/***/ "../../../../../src/app/error-handler/error-handler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-handler/error-handler.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error-handler works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/error-handler/error-handler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorHandlerComponent = (function () {
    function ErrorHandlerComponent() {
    }
    ErrorHandlerComponent.prototype.ngOnInit = function () {
    };
    return ErrorHandlerComponent;
}());
ErrorHandlerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-handler',
        template: __webpack_require__("../../../../../src/app/error-handler/error-handler.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error-handler/error-handler.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorHandlerComponent);

//# sourceMappingURL=error-handler.component.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ROWCOUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ROOM_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_CLIENT_ID_TO_SEND_TO; });
/* unused harmony export MENU */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return RECORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return BANNER; });
/* unused harmony export CAROUSEL */
/* unused harmony export SCROLL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PROFILE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CUSTOMER_CONSENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ROWCOUNTER_PROCEDURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FUND_NAVIGATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ROWCOUNTER_UD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return END_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return START_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TO_PROFILE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return TO_CUSTOMER_CONSENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TO_ROWCOUNTER_PROCEDURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return TO_FUND_NAVIGATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TO_ROWCOUNTER_UD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return TO_END_OF_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return TO_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return START_RECORDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return STOP_RECORDING; });
/* unused harmony export SHOW_STOP_RECORDER */

var ROWCOUNTER = 'RowCounter';
var CUSTOMER = 'Customer';
var MESSAGE = 'message';
var LOGIN_ERROR = 'login-error';
var USER_DATA = 'user-data';
var GET_ROOM_STATUS = 'get-room-status';
var SET_CLIENT_ID_TO_SEND_TO = 'set-client-id-to-send-to';
var MENU = 'menu';
var RECORDER = 'recorder';
var LOGIN = 'login';
var LOGOUT = 'logout';
var CONNECT = 'connect';
var BACKGROUND = 'background';
var SHOW = 'show';
var HIDE = 'hide';
var HOME = 'home';
var BANNER = 'banner';
var CAROUSEL = 'carousel';
var SCROLL = 'scroll';
var PROFILE_CARD = 'profile-card';
var CUSTOMER_CONSENT = 'customer-consent';
var ROWCOUNTER_PROCEDURES = 'rowcounter-procedures';
var FUND_NAVIGATOR = 'fund-navigator';
var ROWCOUNTER_UD = 'rowcounter-ud';
var END_TRANSACTION = 'end-transaction';
var START_TRANSACTION = 'เริ่มต้นธุรกรรม';
var NEXT = 'ขั้นตอนถัดไป';
var TO_PROFILE_CARD = 'redirect-to-profile-card';
var TO_CUSTOMER_CONSENT = 'redirect-to-customer-consent';
var TO_ROWCOUNTER_PROCEDURE = 'redirect-to-row-counter-procedure';
var TO_FUND_NAVIGATOR = 'redirect-to-fund-navigator';
var TO_ROWCOUNTER_UD = 'redirect-to-row-counter-ud';
var TO_END_OF_TRANSACTION = 'redirect-to-end-of-transaction';
var TO_HOME = 'redirect-to-home';
var UNKNOWN = 'unknown';
var START_RECORDING = 'start-recording';
var STOP_RECORDING = 'stop-recording';
var SHOW_STOP_RECORDER = 'show-stop-recorder';
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row vertical-align\">\r\n    <div class=\"col-md-2\">\r\n      <img src=\"/assets/Logos/KBank_Logo.png\" alt=\"Kbank Logo\" class=\"img-responsive\">\r\n    </div>\r\n    <div class=\"col-md-7\"></div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"pull-right\">\r\n        <span *ngIf=\"userInfoHasData\" class=\"text\">\r\n          {{id}} : {{name}}\r\n        </span>\r\n        <app-menu></app-menu>\r\n        <span class=\"glyphicon glyphicon-record\" *ngIf=\"recorderService.recording\" style=\"color:red;\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(userService, recorderService, deviceService) {
        this.userService = userService;
        this.recorderService = recorderService;
        this.deviceService = deviceService;
        this.userInfoSubscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        this.userInfoHasData = false;
        this.id = '';
        this.name = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userLoggedInSubject.subscribe(function (user) {
            if (user !== null) {
                _this.id = user.id;
                _this.name = user.name;
                _this.userInfoHasData = true;
            }
            else {
                _this.id = null;
                _this.name = null;
                _this.userInfoHasData = false;
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_recorder_service__["a" /* RecorderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" *ngIf=\"!isMobile && userService.userLoggedIn()\">\r\n  <button type=\"button\" class=\"btn btn-cancel dropdown-toggle\" data-toggle=\"dropdown\">\r\n    <span>เมนู</span>\r\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu dropdown-menu-right text\" role=\"menu\">\r\n      <li *ngIf=\"recorderService.recording\"><a data-toggle=\"modal\" data-target=\"#stopRecordingModal\">หยุดการบันทึกภาพและเสียง</a></li>\r\n      <li><a data-toggle=\"modal\" data-target=\"#logoutModal\">ออกจากระบบ</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__ = __webpack_require__("../../../../../src/app/services/message-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__ = __webpack_require__("../../../../../src/app/services/recorder.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuComponent = (function () {
    function MenuComponent(router, userService, messageCommunicationService, recorderService, deviceService) {
        this.router = router;
        this.userService = userService;
        this.messageCommunicationService = messageCommunicationService;
        this.recorderService = recorderService;
        this.deviceService = deviceService;
        this.isMobile = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.isMobile = this.deviceService.device !== 'unknown';
    };
    MenuComponent.prototype.ngOnDestroy = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/header/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_communication_service__["a" /* MessageCommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_recorder_service__["a" /* RecorderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _e || Object])
], MenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModel; });
var MessageModel = (function () {
    function MessageModel() {
    }
    return MessageModel;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(id, name, position, location) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.location = location;
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-color: rgb(0,168,81);\r\n}\r\n\r\nnav {\r\n  background-color: rgb(0,168,81);\r\n}\r\n\r\n.navbar {\r\n  margin-bottom: 0px;\r\n  border-radius: 0px;\r\n  border-left: 0px;\r\n  border-right: 0px;\r\n  border-color: rgb(221, 221, 221);\r\n}\r\n\r\n.navbar-brand {\r\n  padding-left: 20px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  color: white\r\n}\r\n\r\n.navigation {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  list-style: none;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.navigation li {\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default text-center\" *ngIf=\"navigationService.showNavigation\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"container vertical-align\">\r\n      <div class=\"row\">\r\n        <div class=\"navbar-header  text-center\">\r\n          <a class=\"navbar-brand navigation vertical-align\">\r\n            <span>\r\n              <img src=\"assets/Logos/KBank_Navbar_Logo.png\" alt=\"Navbar Logo\">\r\n            </span>\r\n            <span>\r\n              Digital Sales<br>\r\n              Management\r\n            </span>\r\n          </a>\r\n        </div>\r\n\r\n        <ul class=\"navigation\" *ngIf=\"navigationService.showUserLoginNavigation; else notUserLoginNavigation\">\r\n          <li class=\"vertical-align\"><a >ลงชื่อเข้าใช้</a></li>\r\n        </ul>\r\n        <ng-template #notUserLoginNavigation>\r\n          <ul class=\"navigation \">\r\n            <li class=\"vertical-align\"><a >เริ่มต้นการทำธุรกรรม</a></li>\r\n            <li class=\"vertical-align\"><a >ระบุตัวตนลูกค้า<br>และทำแบบประเมิณความเสี่ยง</a></li>\r\n            <li class=\"vertical-align\"><a >ประเมิณกองทุนที่<br>เหมาะสมกับลูกค้า</a></li>\r\n            <li class=\"vertical-align\"><a >นำเสนอ Fund Fact Sheet</a></li>\r\n            <li class=\"vertical-align\"><a >ทำธุรกรรมผ่านระบบของธนาคาร</a></li>\r\n            <li class=\"vertical-align\"><a >จบการทำธุรกรรม</a></li>\r\n          </ul>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(navigationService) {
        this.navigationService = navigationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/canactivate-home-to-customer-consent-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateHomeToCustomerConsentGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanActivateHomeToCustomerConsentGuardService = (function () {
    function CanActivateHomeToCustomerConsentGuardService(userService, route, router, deviceService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.deviceService = deviceService;
    }
    CanActivateHomeToCustomerConsentGuardService.prototype.canActivate = function () {
        // If the device is a mobile device then redirect to connect page
        // Need to change to if device is mobile and connected then redirect to landing page
        // If the device is PC and not logged in then allow login page but do not allow other page
        // If the device is PC and logged in then do not allow login page but allow all other page
        if (this.userService.user === null) {
            this.router.navigate(['/login']);
        }
        else {
            return true;
        }
    };
    return CanActivateHomeToCustomerConsentGuardService;
}());
CanActivateHomeToCustomerConsentGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _d || Object])
], CanActivateHomeToCustomerConsentGuardService);

var _a, _b, _c, _d;
//# sourceMappingURL=canactivate-home-to-customer-consent-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/canactivate-via-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanActivateViaAuthGuardService = (function () {
    function CanActivateViaAuthGuardService(userService, route, router, deviceService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.deviceService = deviceService;
    }
    CanActivateViaAuthGuardService.prototype.canActivate = function () {
        // If the device is a mobile device then redirect to connect page
        // Need to change to if device is mobile and connected then redirect to landing page
        console.log('canActiveGuard');
        if (this.deviceService.device !== 'unknown') {
            this.router.navigate(['/connect']);
            return false;
        }
        // If the device is PC and not logged in then allow login page but do not allow other page
        // If the device is PC and logged in then do not allow login page but allow all other page
        if (this.userService.user === null) {
            console.log('user is not logged in');
            return true;
        }
        else {
            console.log('user is logged in');
            this.router.navigate(['/home']);
            return false;
        }
    };
    return CanActivateViaAuthGuardService;
}());
CanActivateViaAuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _d || Object])
], CanActivateViaAuthGuardService);

var _a, _b, _c, _d;
//# sourceMappingURL=canactivate-via-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/images.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        this.bannerImages = [];
        this.rowCounterUdImages = [];
    }
    ImageService.prototype.getBanners = function () {
        var _this = this;
        this.http.get('./assets/Banner/banners.json').subscribe(function (response) {
            _this.bannerImages = response.json();
        });
    };
    return ImageService;
}());
ImageService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ImageService);

var _a;
//# sourceMappingURL=images.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message-communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageCommunicationService; });





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])();
var MessageCommunicationService = (function () {
    function MessageCommunicationService() {
        this.url = 'https://036ee773.ngrok.io';
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.loginSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.connectSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.recorderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.logoutSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.backgroundSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.recordingSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bannerComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.profileCardComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.customerConsentComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.fundNavigatorComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.rowCounterUDComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.endTransactionComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.registerCallbacks();
    }
    MessageCommunicationService.prototype.login = function (role, username, password) {
        this.role = role;
        var user = username;
        var pass = password;
        var message = {
            component: __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* LOGIN */],
            message: {
                username: user,
                password: pass
            }
        };
        this.socket.emit(__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* MESSAGE */], message);
    };
    MessageCommunicationService.prototype.connect = function (role, roomId) {
        this.role = role;
        this.roomId = roomId;
        var message = {
            component: __WEBPACK_IMPORTED_MODULE_3__globals__["c" /* CONNECT */],
            message: {
                role: role,
                roomId: roomId
            }
        };
        this.socket.emit(__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* MESSAGE */], message);
    };
    MessageCommunicationService.prototype.registerCallbacks = function () {
        var _this = this;
        this.socket.on(__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* MESSAGE */], function (message) {
            if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["d" /* LOGIN_ERROR */]) {
                _this.loginSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["e" /* USER_DATA */]) {
                if (_this.role === __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* CUSTOMER */]) {
                    _this.connectSubject.next(message);
                }
                else if (_this.role === __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* ROWCOUNTER */]) {
                    _this.loginSubject.next(message);
                }
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["h" /* GET_ROOM_STATUS */]) {
                _this.connectSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["i" /* SET_CLIENT_ID_TO_SEND_TO */]) {
                _this.clientToSendTo = message.message;
                _this.connectSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["j" /* BACKGROUND */]) {
                _this.backgroundSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["k" /* BANNER */]) {
                _this.bannerComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["l" /* PROFILE_CARD */]) {
                _this.profileCardComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["m" /* CUSTOMER_CONSENT */]) {
                _this.customerConsentComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["n" /* FUND_NAVIGATOR */]) {
                _this.fundNavigatorComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["o" /* ROWCOUNTER_UD */]) {
                _this.rowCounterUDComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["p" /* END_TRANSACTION */]) {
                _this.endTransactionComponentSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["q" /* LOGOUT */]) {
                _this.logoutSubject.next(message);
            }
            else if (message.component === __WEBPACK_IMPORTED_MODULE_3__globals__["r" /* STOP_RECORDING */]) {
                _this.recordingSubject.next(message);
            }
        });
    };
    MessageCommunicationService.prototype.sendMessage = function (component, message) {
        var messageToSend = new __WEBPACK_IMPORTED_MODULE_4__models_message_model__["a" /* MessageModel */]();
        messageToSend.clientId = this.clientToSendTo;
        messageToSend.component = component;
        messageToSend.message = message;
        this.socket.emit(__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* MESSAGE */], messageToSend);
    };
    MessageCommunicationService.prototype.setBackgroundOverlay = function (showBg) {
        var message = new __WEBPACK_IMPORTED_MODULE_4__models_message_model__["a" /* MessageModel */]();
        message.component = __WEBPACK_IMPORTED_MODULE_3__globals__["j" /* BACKGROUND */];
        if (showBg === true) {
            message.message = __WEBPACK_IMPORTED_MODULE_3__globals__["s" /* SHOW */];
            this.backgroundSubject.next(message);
        }
        else {
            message.message = __WEBPACK_IMPORTED_MODULE_3__globals__["t" /* HIDE */];
            this.sendMessage(message.component, message.message);
        }
    };
    MessageCommunicationService.prototype.destroyConnections = function () {
    };
    return MessageCommunicationService;
}());

//# sourceMappingURL=message-communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
var NavigationService = (function () {
    function NavigationService() {
        this.showUserLoginNavigation = true;
        this.showNavigation = true;
    }
    NavigationService.prototype.startTransaction = function () {
        this.showNavigation = true;
    };
    NavigationService.prototype.disableNavBarAndUserLoginNavigation = function () {
        this.showNavigation = false;
        this.showUserLoginNavigation = false;
    };
    return NavigationService;
}());

//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/recorder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecorderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecorderService = (function () {
    function RecorderService(userService) {
        this.userService = userService;
        this.accountName = '';
        this.accountCIS = '';
        this.recording = false;
    }
    RecorderService.prototype.setAccountNameAndCIS = function (accountName, accountCIS) {
        this.accountName = accountName;
        this.accountCIS = accountCIS;
    };
    RecorderService.prototype.record = function () {
        this.recording = true;
        this.sendMessageToChromeExtension(__WEBPACK_IMPORTED_MODULE_3__globals__["u" /* START_RECORDING */]);
    };
    RecorderService.prototype.sendMessageToChromeExtension = function (command) {
        var body = new __WEBPACK_IMPORTED_MODULE_2__models_message_model__["a" /* MessageModel */]();
        if (command === __WEBPACK_IMPORTED_MODULE_3__globals__["u" /* START_RECORDING */]) {
            body.component = __WEBPACK_IMPORTED_MODULE_3__globals__["u" /* START_RECORDING */];
            body.message = {
                name: this.accountName,
                CIS: this.accountCIS,
                userId: this.userService.user.id,
                date: new Date().toLocaleString()
            };
        }
        else if (command === __WEBPACK_IMPORTED_MODULE_3__globals__["r" /* STOP_RECORDING */]) {
            body.component = __WEBPACK_IMPORTED_MODULE_3__globals__["r" /* STOP_RECORDING */];
        }
        window.postMessage(body, '*');
    };
    RecorderService.prototype.stopRecording = function () {
        this.recording = false;
        this.sendMessageToChromeExtension(__WEBPACK_IMPORTED_MODULE_3__globals__["r" /* STOP_RECORDING */]);
    };
    return RecorderService;
}());
RecorderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], RecorderService);

var _a;
//# sourceMappingURL=recorder.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/sharepoint.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharepointService; });
var SharepointService = (function () {
    function SharepointService() {
    }
    return SharepointService;
}());

//# sourceMappingURL=sharepoint.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserService = (function () {
    function UserService() {
        this.userLoggedInSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.user = null;
    }
    UserService.prototype.setUser = function (message) {
        var id = message.id;
        var name = message.firstname + ' ' + message.lastname;
        var position = message.position;
        var location = message.location;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* UserModel */](id, name, position, location);
        this.userLoggedInSubject.next(this.user);
    };
    UserService.prototype.userLoggedIn = function () {
        return this.user != null;
    };
    UserService.prototype.logOut = function () {
        this.user = null;
        this.userLoggedInSubject.next(null);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map