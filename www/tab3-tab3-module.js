(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showAlert()\">\r\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item lines=\"none\" class=\"user-head\">\r\n    <ion-label style=\"font-size: 20px;\">{{ name }}</ion-label>\r\n    <ion-label style=\"font-size: 12px; color: grey; position: absolute; margin-top: 5%;\">{{ role }}</ion-label>\r\n    <img class=\"circle-pic\" src=\"../../assets/yo.jpg\" />\r\n  </ion-item>\r\n  <ion-button fill style=\"width:100%; border: solid 1px #ECEBEB\">Cambiar foto</ion-button>\r\n\r\n  <ion-item *ngIf=\"user.role >= 1 && user.role <= 11\" lines=\"none\" class=\"title\">\r\n    <ion-label *ngIf=\"(user.role >= 1 && user.role <= 5) || user.role == 11\" text-center>Educandos</ion-label>\r\n    <ion-label *ngIf=\"user.role >= 6 && user.role <= 10\" text-center>Hijos</ion-label>    \r\n  </ion-item>\r\n  <ion-item *ngIf=\"user.role >= 1 && user.role <= 11\">\r\n    <div class=\"thumbnails\">\r\n      <div class=\"list-thumbnail\">\r\n        <div *ngFor=\"let son of sons\" class=\"img-thumb\" (click)=\"toDetail(1)\">\r\n            <img class=\"barber-pic\" src=\"../../assets/avatar.png\" />\r\n        </div>\r\n    </div>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"title\">\r\n      <ion-label text-center>Ultimas actividades</ion-label>    \r\n    </ion-item>  \r\n    <ion-list>\r\n      <ion-card *ngFor=\"let ev of events\">\r\n          <ion-card-header>\r\n              <ion-item lines=\"none\">\r\n                  <img class=\"circle-pic\" src=\"../../assets/forest1.jpg\" />\r\n                  <ion-card-title style=\"margin-left: 3%;\">{{ ev.name }}</ion-card-title>\r\n              </ion-item>              \r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item *ngIf=\"ev.type == 0\" lines=\"none\" style=\"--ion-background-color: #0cd1e8;\"><div class=\"separator\">Grupo</div></ion-item>\r\n            <ion-item *ngIf=\"ev.type == 1\" lines=\"none\" style=\"--ion-background-color: #3880ff;\"><div class=\"separator\">Colonia</div></ion-item>\r\n            <ion-item *ngIf=\"ev.type == 2\" lines=\"none\" style=\"--ion-background-color: #ffce00;\"><div class=\"separator\">Manada</div></ion-item>\r\n            <ion-item *ngIf=\"ev.type == 3\" lines=\"none\" style=\"--ion-background-color: #10dc60;\"><div class=\"separator\">Tropa</div></ion-item>\r\n            <ion-item *ngIf=\"ev.type == 4\" lines=\"none\" style=\"--ion-background-color: #f04141;\"><div class=\"separator\">Unidad</div></ion-item>\r\n            <ion-item *ngIf=\"ev.type == 5\" lines=\"none\" style=\"--ion-background-color: #d30f0f;\"><div class=\"separator\">Clan</div></ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-item slot=\"start\" style=\"font-size: 14px;\">Inicio: {{ ev.beg_date }}</ion-item>\r\n              <ion-item slot=\"end\" style=\"font-size: 14px;\">Fin: {{ ev.end_date }}</ion-item>\r\n            </ion-item>    \r\n          </ion-card-content>\r\n      </ion-card>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-pic {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%; }\n\n.item {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  max-height: 40% !important;\n  margin-left: auto;\n  margin-right: auto; }\n\n.thumbnails {\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n.thumbnails .list-thumbnail {\n    height: 100%;\n    white-space: nowrap; }\n\n.thumbnails .list-thumbnail .img-thumb {\n      display: inline-block;\n      border-radius: 4px;\n      padding: 3px;\n      width: 75px;\n      height: 75px;\n      margin: 0 2px 0 0;\n      margin-bottom: 15px;\n      line-height: 60px; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.barber-pic {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%; }\n\n.center_row {\n  display: flex;\n  align-items: center; }\n\n.my-checkbox {\n  display: flex;\n  align-items: center; }\n\n.title {\n  font-size: 25px;\n  text-align: center;\n  margin-top: 5px; }\n\n.separator {\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEExNzBBNkJcXERlc2t0b3BcXGdlbmlsNDkyL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBRVosa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJTSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7O0FBTHpCO01BT1EscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBOztBQUl2QjtFQUNFLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUVYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2lyY2xlLXBpYyB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiA0MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsc3tcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC5saXN0LXRodW1ibmFpbHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAuaW1nLXRodW1ie1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBtYXJnaW46MCAycHggMCAwOyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gIH1cclxuXHJcbi5iYXJiZXItcGljIHtcclxuICAgIHdpZHRoOjc1cHg7XHJcbiAgICBoZWlnaHQ6NzVweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2VudGVyX3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubXktY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDsgICAgXHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var USER_KEY = 'user-key';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(authService, storage, httpService, alertController, loadingController) {
        this.authService = authService;
        this.storage = storage;
        this.httpService = httpService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.ass = [];
        this.events = [];
        this.sons = [];
    }
    Tab3Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading();
                        return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                                _this.user = val;
                                _this.name = _this.user.login;
                                _this.httpService.getRole(_this.user.role).then(function (val) {
                                    console.log(val);
                                    _this.role = val.role[0].name;
                                    _this.role = _this.role.toUpperCase();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getUserAssistance(this.user.id).then(function (ev) {
                                _this.ass = ev.as;
                                _this.ass.forEach(function (element) {
                                    _this.httpService.getEventById(element.event).then(function (event) {
                                        _this.events.push(event.event[0]);
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getSons(this.user.id).then(function (val) {
                                console.log(val);
                                val.son.forEach(function (element) {
                                    _this.sons.push(element.son);
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cerrar Sesion',
                            message: 'Seguro que quiere cerrar sesion?',
                            buttons: [
                                {
                                    text: 'NO',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                },
                                {
                                    text: 'SI',
                                    handler: function () {
                                        _this.logout();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.logout = function () {
        this.authService.logout();
    };
    Tab3Page.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 1000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map