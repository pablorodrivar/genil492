(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showAlert()\">\r\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Inicio\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-item>\r\n    <ion-label style=\"font-size: 20px;\">Ultimas noticias</ion-label>\r\n  </ion-item>\r\n  <ion-card *ngFor=\"let post of posts\" (click)=\"goToPost(post.id)\">\r\n    <ion-item *ngIf=\"post.section == 0\" color=\"secondary\">\r\n      <ion-item color=\"secondary\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item>    \r\n    </ion-item>    \r\n    <ion-item *ngIf=\"post.section == 1\" color=\"primary\">\r\n        <ion-item color=\"primary\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 2\" color=\"warning\">\r\n        <ion-item color=\"warning\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 3\" color=\"success\">\r\n        <ion-item color=\"success\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item>         \r\n      </ion-item>            \r\n      <ion-item *ngIf=\"post.section == 4\" color=\"unidad\">\r\n        <ion-item color=\"unidad\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 5\" color=\"danger\">\r\n        <ion-item color=\"danger\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n      </ion-item>     \r\n      <ion-item lines=\"none\">\r\n        <ion-chip *ngIf=\"post.event == 0\"><ion-icon name=\"analytics\" color=\"light\"></ion-icon><ion-label color=\"light\">Excursion</ion-label></ion-chip>   \r\n        <ion-chip *ngIf=\"post.event == 1\"><ion-icon name=\"leaf\" color=\"light\"></ion-icon><ion-label color=\"light\">Acampada</ion-label></ion-chip>\r\n        <ion-chip *ngIf=\"post.event == 2\"><ion-icon name=\"bonfire\" color=\"light\"></ion-icon><ion-label color=\"light\">Campamento</ion-label></ion-chip>\r\n      </ion-item> \r\n    <ion-card-content>\r\n      <img class=\"thumbnail\" src=\"../../assets/forest1.jpg\">\r\n      <ion-item *ngIf=\"post.content.length > 100\">{{ post.content.substring(0, 100) }}...</ion-item>\r\n      <ion-item *ngIf=\"post.content.length < 100\">{{ post.content }}</ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-item slot=\"start\" lines=\"none\">{{ post.author }}</ion-item>\r\n        <ion-item slot=\"end\" lines=\"none\">{{ post.date }}</ion-item>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card> \r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button *ngIf=\"user.role >= 0 && user.role <=5\" (click)=\"addPost()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.thumbnail {\n  height: 250px !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEExNzBBNkJcXERlc2t0b3BcXGdlbmlsNDkyL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var USER_KEY = 'user-key';
var FIRST_REF = 'first-ref';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(httpService, router, storage, alertController, loadingController) {
        this.httpService = httpService;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.posts = [];
    }
    Tab1Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading();
                        return [4 /*yield*/, this.storage.get(FIRST_REF).then(function (val) {
                                if (!val) {
                                    _this.doRefresh(event);
                                    _this.storage.set(FIRST_REF, true);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                                _this.user = val;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getLastPosts().then(function (res) {
                                res.post.forEach(function (element) {
                                    if (element.scope == 0) {
                                        _this.posts.push(element);
                                    }
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.goToPost = function (id) {
        this.router.navigate(["/post", id]);
    };
    Tab1Page.prototype.addPost = function () {
        this.router.navigate(["/add-post"]);
    };
    Tab1Page.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Colores',
                            message: 'Azul: Colonia\nAmarillo: Lobatos\nVerde: Tropa\nNaranja: Unidad\nRojo: Clan\nCeleste: General',
                            buttons: ['OK']
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
    Tab1Page.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.posts = [];
            _this.ngOnInit();
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    Tab1Page.prototype.presentLoading = function () {
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
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map