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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showAlert()\">\r\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Registro</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item lines=\"none\" class=\"user-head\">\r\n      <img class=\"circle-pic\" src=\"../../../assets/avatar.png\" />\r\n  </ion-item>    \r\n  <ion-item style=\"margin-left: auto;margin-right: auto;\" lines=\"none\">\r\n    <ion-button block clear class=\"button-no-background\" color=\"transparent\" (click)=\"getImage()\">Cambiar avatar</ion-button>\r\n  </ion-item>\r\n\r\n  <!-- Nickname -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Nickname*</ion-label>      \r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"nickname\" placeholder=\"Nickname*\"></ion-input>\r\n  </ion-item>      \r\n\r\n  <!-- Password -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Contraseña*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"password\" placeholder=\"Contraseña (6 caracteres min.)*\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Repeat -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Repite la contraseña*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"password2\" placeholder=\"Repite la contraseña*\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Email -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Email*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"email\" placeholder=\"Email validado*\" type=\"email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Nombre -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Nombre*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"name\" placeholder=\"Nombre*\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Apellidos -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"label\">Apellidos*</ion-label>      \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"surname\" placeholder=\"Apellidos*\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"register()\" style=\"margin-top: 20px;\" expand=\"block\">Registro</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-pic {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%; }\n\n.button-no-background {\n  color: blue;\n  padding: 0;\n  border: none;\n  background: none;\n  margin-left: auto;\n  margin-right: auto; }\n\n.label {\n  font-size: 15px;\n  margin-bottom: -15px; }\n\n.selector {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcQTE3MEE2QlxcRGVza3RvcFxcZ2VuaWw0OTIvc3JjXFxhcHBcXHB1YmxpY1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUdsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlLXBpYyB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYnV0dG9uLW5vLWJhY2tncm91bmQge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDsgXHJcbn1cclxuXHJcbi5zZWxlY3RvciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbn0iXX0= */"

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
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var FIRST_REF = 'first-ref';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertController, imagePicker, httpService, toastController, authService, storage) {
        this.alertController = alertController;
        this.imagePicker = imagePicker;
        this.httpService = httpService;
        this.toastController = toastController;
        this.authService = authService;
        this.storage = storage;
        this.userData = [];
        this.valid = true;
        this.valido = true;
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
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.password != this.password2) {
            this.errorMsg = "Las contrasenyas no coinciden.";
        }
        else {
            this.userData.push(this.nickname, this.password, this.email, this.name, this.surname);
            var i_1 = 0;
            this.userData.forEach(function (val) {
                _this.validate(i_1, val);
                i_1++;
            });
            if (this.valid) {
                this.httpService.getEmail(this.email).then(function (res) {
                    if (res.status != 205) {
                        _this.userData.push(res.valid_email[0].role);
                        _this.httpService.getUserByEmail(_this.userData[2]).then(function (em) {
                            if (em.user[0].email !== _this.userData[2]) {
                                _this.httpService.postUser(_this.userData).then(function () {
                                    _this.authService.login(_this.userData[0], _this.password).then(function () {
                                        _this.storage.set(FIRST_REF, false);
                                    });
                                    _this.errorMsg = "Usuario registrado.";
                                });
                            }
                            else {
                                _this.errorMsg = "Ese email ya esta en uso.";
                            }
                        });
                        _this.httpService.getUser(_this.userData[0]).then(function (user) {
                            if (user.user[0].login !== _this.userData[0]) {
                                _this.httpService.postUser(_this.userData).then(function () {
                                    _this.authService.login(_this.userData[0], _this.password).then(function () {
                                        _this.storage.set(FIRST_REF, false);
                                    });
                                    _this.errorMsg = "Usuario registrado.";
                                });
                            }
                            else {
                                _this.errorMsg = "Ese nickname ya esta en uso.";
                            }
                        });
                    }
                    else {
                        _this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter.";
                    }
                    if (res.status == 401) {
                        _this.errorMsg = "El nickname o el email ya existen.";
                    }
                }).catch(function () {
                    _this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter.";
                });
            }
        }
        this.presentToast();
        this.errorMsg = "Usuario registrado.";
    };
    RegisterPage.prototype.validate = function (index, input) {
        var _this = this;
        if (typeof input === "undefined") {
            this.errorMsg = "Rellene los campos obligatorios";
            this.valid = false;
        }
        else {
            switch (index) {
                case 0:
                    if (input.length < 4) {
                        this.errorMsg = "El nickname no puede tener menos de 4 caracteres.";
                        this.valid = false;
                    }
                    break;
                case 1:
                    if (input.length < 6) {
                        this.errorMsg = "La contrasenya debe tener al menos 6 caracteres.";
                        this.valid = false;
                    }
                    break;
                case 2:
                    this.httpService.getEmail(input).catch(function () {
                        _this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter.";
                        _this.valid = false;
                    });
                    break;
                case 3:
                    if (input.length < 1) {
                        this.errorMsg = "El nombre no puede ser vacio.";
                        this.valid = false;
                    }
                    break;
                case 4:
                    if (input.length < 1) {
                        this.errorMsg = "El apellido no puede ser vacio.";
                        this.valid = false;
                    }
                    break;
            }
        }
    };
    RegisterPage.prototype.checkEmails = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getUsers().then(function (val) {
                            console.log(val);
                            val.user.forEach(function (element) {
                                if (element.email == email) {
                                    _this.valido = false;
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        console.log(this.valido + " vALIDO");
                        return [2 /*return*/, this.valido];
                }
            });
        });
    };
    RegisterPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.errorMsg,
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module.js.map