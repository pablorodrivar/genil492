(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Dashboard\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item>\r\n    <ion-label>Secciones</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" style=\"margin-top: 3%;\">\r\n    <ion-button expand=\"block\" color=\"primary\" class=\"sect-button\" (click)=\"toSection(0)\">Colonia</ion-button>\r\n    <ion-button expand=\"block\" color=\"warning\" class=\"sect-button\" (click)=\"toSection(1)\">Manada</ion-button>\r\n    <ion-button expand=\"block\" color=\"success\" class=\"sect-button\" (click)=\"toSection(2)\">Tropa</ion-button>\r\n  </ion-item> \r\n  <ion-item lines=\"none\" style=\"margin-top: 3%;\">\r\n    <ion-button expand=\"block\" color=\"medium\" class=\"sect-button\" (click)=\"toSection(3)\">Unidad</ion-button>\r\n    <ion-button expand=\"block\" color=\"danger\" class=\"sect-button\" (click)=\"toSection(4)\">Clan</ion-button>\r\n    <ion-button expand=\"block\" color=\"secondary\" class=\"sect-button\" (click)=\"toSection(5)\">Kraal</ion-button>\r\n  </ion-item>  \r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Servicios\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"none\" (click)=\"goTo('intendance')\">\r\n      <ion-icon slot=\"start\" name=\"cube\"></ion-icon>\r\n      <ion-label>Intendencia</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-icon slot=\"start\" name=\"bonfire\"></ion-icon>\r\n      <ion-label>Gestionar actividades</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" (click)=\"goTo('cancionero')\">\r\n      <ion-icon slot=\"start\" name=\"musical-notes\"></ion-icon>\r\n      <ion-label>Cancionero</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-icon slot=\"start\" name=\"volume-high\"></ion-icon>\r\n      <ion-label>Altavoz</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon slot=\"start\" name=\"medkit\"></ion-icon>\r\n      <ion-label>Ficha medica</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-img {\n  width: 20%;\n  height: 15% !important; }\n\n.img-label {\n  font-size: 10px;\n  text-align: center; }\n\n.sect-button {\n  width: 33%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEExNzBBNkJcXERlc2t0b3BcXGdlbmlsNDkyL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1pbWcge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var USER_KEY = 'user-key';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(router, storage, toastController) {
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
        this.navigate = true;
    }
    Tab2Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                            _this.user_role = val.role;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.toSection = function (id) {
        switch (id) {
            case 0:
                if (this.user_role >= 12 && this.user_role <= 16) {
                    this.navigate = false;
                }
                else {
                    this.navigate = true;
                }
                break;
            case 1:
                if (this.user_role >= 12 && this.user_role <= 15) {
                    this.navigate = false;
                }
                else {
                    this.navigate = true;
                }
                break;
            case 2:
                if (this.user_role >= 13 && this.user_role <= 16) {
                    this.navigate = false;
                }
                else {
                    this.navigate = true;
                }
                break;
            case 3:
                if (this.user_role == 12 || this.user_role >= 14) {
                    this.navigate = false;
                }
                else {
                    this.navigate = true;
                }
                break;
            case 4:
                if (this.user_role == 12 || this.user_role == 13 || this.user_role == 15 || this.user_role == 16) {
                    this.navigate = false;
                }
                else {
                    this.navigate = true;
                }
                break;
            case 5:
                if ((this.user_role >= 0 && this.user_role <= 5) || this.user_role == 11) {
                    this.navigate = true;
                }
                else {
                    this.navigate = false;
                }
                break;
        }
        if (this.navigate) {
            this.router.navigate(['section/', id]);
        }
        else {
            this.presentToast();
        }
    };
    Tab2Page.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'No tienes los permisos para acceder a esa seccion.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.goTo = function (option) {
        if (option == 'cancionero') {
            this.router.navigate(['/cancionero']);
        }
        else if (option == 'intendance') {
            this.router.navigate(['/intendance']);
        }
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map