(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.page.html":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showAlert()\">\r\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Registro</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item lines=\"none\" class=\"user-head\">\r\n      <img class=\"circle-pic\" src=\"../../../assets/avatar.png\" />\r\n  </ion-item>    \r\n  <ion-item style=\"margin-left: auto;margin-right: auto;\" lines=\"none\">\r\n    <ion-button block clear class=\"button-no-background\" color=\"transparent\" (click)=\"getImage()\">Cambiar avatar</ion-button>\r\n  </ion-item>\r\n\r\n  <!-- Nickname -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Nickname*</ion-label>      \r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-input placeholder=\"Nickname*\"></ion-input>\r\n  </ion-item>      \r\n\r\n  <!-- Password -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Contraseña*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Contraseña*\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Repeat -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Repite la contraseña*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Repite la contraseña*\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Email -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Email*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Email*\" type=\"email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Nombre -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Nombre*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Nombre*\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Apellidos -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Apellidos*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Apellidos*\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-pic {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%; }\n\n.button-no-background {\n  color: blue;\n  padding: 0;\n  border: none;\n  background: none;\n  margin-left: auto;\n  margin-right: auto; }\n\n.label {\n  font-size: 15px;\n  margin-bottom: -15px; }\n\n.selector {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcQTE3MEE2QlxcRGVza3RvcFxcZ2VuaWw0OTJcXGdlbmlsNDkyL3NyY1xcYXBwXFxwdWJsaWNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFHbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZS1waWMge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1uby1iYWNrZ3JvdW5kIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7IFxyXG59XHJcblxyXG4uc2VsZWN0b3Ige1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");




var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertController, imagePicker) {
        this.alertController = alertController;
        this.imagePicker = imagePicker;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ayuda',
                            message: 'Para darte de alta en la app dale tu email a Pablo Scouter.',
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
    RegisterPage.prototype.getImage = function () {
        var _this = this;
        this.options = {
            // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
            // selection of a single image, the plugin will return it.
            //maximumImagesCount: 3,
            // max width and height to allow the images to be.  Will keep aspect
            // ratio no matter what.  So if both are 800, the returned image
            // will be at most 800 pixels wide and 800 pixels tall.  If the width is
            // 800 and height 0 the image will be 800 pixels wide if the source
            // is at least that wide.
            width: 200,
            //height: 200,
            // quality of resized image, defaults to 100
            quality: 25,
            // output type, defaults to FILE_URIs.
            // available options are 
            // window.imagePicker.OutputType.FILE_URI (0) or 
            // window.imagePicker.OutputType.BASE64_STRING (1)
            outputType: 1
        };
        this.imageResponse = [];
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
            }
        }, function (err) {
            alert(err);
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module.js.map