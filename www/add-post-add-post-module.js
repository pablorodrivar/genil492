(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"],{

/***/ "./src/app/add-post/add-post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-post/add-post.module.ts ***!
  \*********************************************/
/*! exports provided: AddPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-post.page */ "./src/app/add-post/add-post.page.ts");







var routes = [
    {
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]
    }
];
var AddPostPageModule = /** @class */ (function () {
    function AddPostPageModule() {
    }
    AddPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]]
        })
    ], AddPostPageModule);
    return AddPostPageModule;
}());



/***/ }),

/***/ "./src/app/add-post/add-post.page.html":
/*!*********************************************!*\
  !*** ./src/app/add-post/add-post.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Publicar post</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"post-img\">\r\n    <ion-icon name=\"camera\" class=\"post-icon\"></ion-icon>    \r\n  </div>\r\n  <ion-label class=\"post-img-lbl\">Escoge una o varias imagenes</ion-label>\r\n\r\n  <ion-item>\r\n    <ion-label>Titulo</ion-label>\r\n    <ion-input placeholder=\"Titulo\" [(ngModel)]=\"title\"></ion-input>\r\n  </ion-item>  \r\n\r\n  <ion-item>\r\n    <ion-label lines=\"none\">Contenido</ion-label>\r\n  </ion-item>\r\n  <ion-item>    \r\n    <ion-textarea placeholder=\"Contenido\" rows=\"15\" [(ngModel)]=\"content\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Tipo de Post</ion-label>\r\n        </ion-list-header>\r\n    \r\n        <ion-item>\r\n          <ion-label>Post normal</ion-label>\r\n          <ion-radio slot=\"start\" value=\"4\" checked (ionSelect)=\"tipoPost(4)\"></ion-radio>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label>Excursion</ion-label>\r\n          <ion-radio slot=\"start\" value=\"0\" (ionSelect)=\"tipoPost(0)\"></ion-radio>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label>Acampada</ion-label>\r\n          <ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"tipoPost(1)\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Campamento</ion-label>\r\n          <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"tipoPost(2)\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Otro</ion-label>\r\n          <ion-radio slot=\"start\" value=\"3\" (ionSelect)=\"tipoPost(3)\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-item *ngIf=\"tipo < 4\">\r\n      <ion-label>Fecha Inicio</ion-label>\r\n      <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"dateBeg\"></ion-datetime>\r\n    </ion-item>      \r\n    <ion-item *ngIf=\"tipo < 4\">\r\n      <ion-label>Fecha Fin</ion-label>\r\n      <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"dateEnd\"></ion-datetime>\r\n    </ion-item>   \r\n\r\n    <ion-list>\r\n        <ion-radio-group>\r\n          <ion-list-header>\r\n            <ion-label>Publicar en</ion-label>\r\n          </ion-list-header>\r\n      \r\n          <ion-item>\r\n            <ion-label>Grupo</ion-label>\r\n            <ion-radio slot=\"start\" value=\"0\" checked (ionSelect)=\"scope(0)\"></ion-radio>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Seccion</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" checked (ionSelect)=\"scope(1)\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n\r\n      <ion-item lines=\"none\"><ion-button fill style=\"width:100%; border: solid 1px #ECEBEB;\" (click)=\"post()\">Publicar</ion-button></ion-item>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/add-post/add-post.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-post/add-post.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-img {\n  height: 200px !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-color: #616161;\n  text-align: center; }\n\n.post-icon {\n  font-size: 75px;\n  display: inline-block;\n  position: relative;\n  top: 25%;\n  color: #a4a4a4; }\n\n.post-img-lbl {\n  display: inline-block;\n  position: absolute;\n  top: 16%;\n  left: 25%;\n  color: #a4a4a4; }\n\n.title {\n  font-size: 20px; }\n\n.comments {\n  text-align: center;\n  font-size: 20px;\n  padding: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBvc3QvQzpcXFVzZXJzXFxBMTcwQTZCXFxEZXNrdG9wXFxnZW5pbDQ5Mi9zcmNcXGFwcFxcYWRkLXBvc3RcXGFkZC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFRO0VBQ1IsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1JTsgICAgXHJcbiAgICBjb2xvcjogI2E0YTRhNDtcclxufVxyXG5cclxuLnBvc3QtaW1nLWxibCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2JTtcclxuICAgIGxlZnQ6MjUlO1xyXG4gICAgY29sb3I6ICNhNGE0YTQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7ICAgIFxyXG59XHJcblxyXG4uY29tbWVudHMge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-post/add-post.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-post/add-post.page.ts ***!
  \*******************************************/
/*! exports provided: AddPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPage", function() { return AddPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var USER_KEY = 'user-key';
var AddPostPage = /** @class */ (function () {
    function AddPostPage(httpService, storage, toastController, router) {
        this.httpService = httpService;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.tipo = 4;
        this.ambito = 0;
        this.postData = [];
        this.eventData = [];
        this.postable = true;
    }
    AddPostPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                            _this.user = val;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPostPage.prototype.tipoPost = function (t) {
        this.tipo = t;
    };
    AddPostPage.prototype.scope = function (s) {
        this.ambito = s;
    };
    AddPostPage.prototype.post = function () {
        var _this = this;
        this.postable = true;
        this.postData.push(this.title);
        this.postData.push(this.content);
        this.postData.push(this.tipo);
        this.postData.push(this.ambito);
        this.postData.push(this.user.login);
        this.postData.push(this.user.role);
        this.eventData.push(this.title);
        this.eventData.push(this.dateBeg);
        this.eventData.push(this.dateEnd);
        this.eventData.push(this.tipo);
        this.postData.forEach(function (element) {
            if (element === undefined) {
                _this.presentToast();
                _this.postData = [];
                _this.postable = false;
            }
        });
        this.eventData.forEach(function (element) {
            if (element === undefined) {
                _this.presentToast();
                _this.eventData = [];
                _this.postable = false;
            }
        });
        if (this.tipo == 4) {
            if (this.postable) {
                this.httpService.post(this.postData);
            }
        }
        else {
            if (this.postable) {
                this.httpService.post(this.postData).then(function (val) {
                    _this.httpService.postEvent(_this.eventData);
                });
            }
        }
        this.router.navigate(['']);
    };
    AddPostPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Rellena los campos obligatorios.',
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
    AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.page.html */ "./src/app/add-post/add-post.page.html"),
            styles: [__webpack_require__(/*! ./add-post.page.scss */ "./src/app/add-post/add-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddPostPage);
    return AddPostPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-post-add-post-module.js.map