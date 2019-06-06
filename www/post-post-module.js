(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");







var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/app/post/post.page.html":
/*!*************************************!*\
  !*** ./src/app/post/post.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button><ion-icon name=\"share\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Post</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRef($event)\">\r\n      <ion-refresher-content\r\n        pullingIcon=\"arrow-dropdown\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Refreshing...\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n  <img src=\"../../assets/forest1.jpg\" class=\"post-img\">\r\n  <ion-item><ion-label class=\"title\">{{ post_title }}</ion-label>\r\n    <ion-chip *ngIf=\"event_type == 0\"><ion-icon name=\"analytics\" color=\"light\"></ion-icon><ion-label color=\"light\">Excursion</ion-label></ion-chip>   \r\n    <ion-chip *ngIf=\"event_type == 1\"><ion-icon name=\"leaf\" color=\"light\"></ion-icon><ion-label color=\"light\">Acampada</ion-label></ion-chip>\r\n    <ion-chip *ngIf=\"event_type == 2\"><ion-icon name=\"bonfire\" color=\"light\"></ion-icon><ion-label color=\"light\">Campamento</ion-label></ion-chip>\r\n  </ion-item>  \r\n  <ion-item *ngIf=\"eventExists\"><ion-label (click)=showAss()>{{ asistentes }}</ion-label><ion-button *ngIf=\"asistira\" (click)=\"eraseAss()\" slot=\"end\" color=\"danger\">NO ASISTO</ion-button></ion-item>\r\n  <ion-item lines=\"none\"><ion-label slot=\"start\">{{ post_date }}</ion-label><ion-label slot=\"end\" style=\"text-align:end\">{{ post_author }}</ion-label></ion-item>\r\n\r\n  <ion-item *ngIf=\"eventExists\" color=\"secondary\" lines =\"none\"><ion-item lines=\"none\" color=\"secondary\" class=\"dates\" slot=\"start\">{{ event_beg }}</ion-item><ion-item class=\"dates\" color=\"secondary\" lines=\"none\" slot=\"end\">{{ event_end }}</ion-item></ion-item>\r\n  <ion-item lines=\"none\" style=\"margin-top:3%;\"><ion-text>{{ post_content }}</ion-text></ion-item>\r\n\r\n  <ion-button *ngIf=\"eventExists\" color=\"primary\" expand=\"full\" style=\"margin-top: 3%;\" (click)=\"asistir()\">Asistire</ion-button>  \r\n\r\n  <ion-item><ion-label class=\"comments\">Comentarios</ion-label></ion-item>\r\n\r\n  <ion-item *ngIf=\"comments.length == 0\" style=\"text-align:center; font-size:13px; color:rgb(167, 161, 161)\"><ion-label>No hay comentarios todavia, se el primero</ion-label></ion-item>\r\n  <ion-card *ngFor=\"let com of comments\">\r\n      <ion-avatar padding>\r\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n      </ion-avatar>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{ role }}</ion-card-subtitle>\r\n      <ion-card-title>{{ login }}</ion-card-title>\r\n    </ion-card-header>\r\n    \r\n    <ion-card-content>\r\n      {{ com.comment }}\r\n    </ion-card-content>\r\n  </ion-card>  \r\n  \r\n  <ion-item style=\"text-align: center;\"><ion-label>Deja tu comentario</ion-label></ion-item>\r\n  <ion-item lines=\"none\" style=\"height: 16%;\"><ion-textarea rows=\"6\" placeholder=\"Deja tu comentario\" maxlength=\"280\" [(ngModel)]=\"comment\"></ion-textarea></ion-item>\r\n  <ion-item lines=\"none\"><ion-button fill style=\"width:100%; border: solid 1px #ECEBEB;\" (click)=\"sendComment()\">Enviar</ion-button></ion-item>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-img {\n  height: 300px !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.title {\n  font-size: 20px; }\n\n.comments {\n  text-align: center;\n  font-size: 20px;\n  padding: 2%; }\n\n.dates {\n  font-size: 12px;\n  text-align: center;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXEExNzBBNkJcXERlc2t0b3BcXGdlbmlsNDkyL3NyY1xcYXBwXFxwb3N0XFxwb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY29tbWVudHMge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmRhdGVzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var USER_KEY = 'user-key';
var PostPage = /** @class */ (function () {
    function PostPage(route, httpService, storage, alertController, toastController, loadingController) {
        this.route = route;
        this.httpService = httpService;
        this.storage = storage;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.commentData = [];
        this.comments = [];
        this.sons = [];
        this.inputs = [];
        this.assData = [];
        this.list = "";
        this.repetido = false;
        this.eventExists = false;
        this.clickable = false;
        this.asistira = false;
        this.clickable_ass = true;
    }
    PostPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading();
                        this.post_id = this.route.snapshot.paramMap.get('id');
                        return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                                _this.user = val;
                                _this.login = val.login;
                                _this.httpService.getRole(_this.user.role).then(function (val) {
                                    _this.role = val.role[0].name;
                                    _this.role = _this.role.toUpperCase();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getPost(this.post_id).then(function (val) {
                                _this.post_title = val.post[0].title;
                                _this.post_author = val.post[0].author;
                                _this.post_content = val.post[0].content;
                                _this.post_date = val.post[0].date;
                                _this.post_section = val.post[0].section;
                                _this.post_gallery = val.post[0].gallery;
                                _this.post_thumbnail = val.post[0].thumbnail;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getEvent(this.post_title).then(function (val) {
                                if (val !== "No existen eventos en la base de datos con ese nombre.") {
                                    _this.eventExists = true;
                                }
                                _this.event_id = val.event[0].id;
                                _this.event_beg = "Desde " + val.event[0].beg_date;
                                _this.event_end = "Hasta " + val.event[0].end_date;
                                _this.event_type = val.event[0].type;
                                _this.httpService.numberOfAssistants(val.event[0].id).then(function (val) {
                                    _this.asistentes = "Asistentes: " + val.as[0]['count(*)'];
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getPostComments(this.post_id).then(function (val) {
                                if (val.comment !== undefined) {
                                    val.comment.forEach(function (element) {
                                        _this.comments.push(element);
                                    });
                                }
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getAssistantsByEvent(this.event_id).then(function (ass) {
                                console.log(typeof ass);
                                if (typeof ass !== 'string') {
                                    _this.event_assistants = ass.as;
                                    _this.event_assistants.forEach(function (element) {
                                        _this.httpService.getUserById(element.user).then(function (val) {
                                            _this.list = _this.list + val.user[0].login + "\n";
                                            if (val.user[0].id == _this.user.id) {
                                                _this.asistira = true;
                                            }
                                        });
                                    });
                                    _this.list = _this.list.substr(9, _this.list.length - 3);
                                }
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.httpService.getSons(this.user.id).then(function (val) {
                                console.log(val);
                                val.son.forEach(function (element) {
                                    _this.sons.push(element.son);
                                });
                                _this.inputs = [];
                                _this.sons.forEach(function (son) {
                                    _this.httpService.getUserById(son).then(function (name) {
                                        _this.inputs.push({
                                            "name": name.user[0].name,
                                            "type": "checkbox",
                                            "label": name.user[0].name,
                                            "value": name.user[0].id
                                        });
                                    });
                                });
                                _this.inputs.push({
                                    "name": "Yo",
                                    "type": "checkbox",
                                    "label": "Yo",
                                    "value": _this.user.id
                                });
                            })];
                    case 6:
                        _a.sent();
                        console.log(this.inputs);
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.sendComment = function () {
        this.commentData.push(this.user.id);
        this.commentData.push(this.post_id);
        this.commentData.push(this.comment);
        this.httpService.postComment(this.commentData);
        this.comments.push(this.commentData[2]);
        this.comment = "";
    };
    PostPage.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Aviso',
                            message: 'No tienes permisos para realizar esa acción',
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
    PostPage.prototype.showAss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.clickable_ass) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Asistentes',
                                message: this.list,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.sonAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Quién asistirá?',
                            inputs: this.inputs,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (val) {
                                        if (_this.event_assistants !== undefined) {
                                            _this.event_assistants.forEach(function (element) {
                                                if (element.user == val[0]) {
                                                    _this.repetido = true;
                                                    _this.presentToast();
                                                }
                                            });
                                        }
                                        console.log("repetido " + _this.repetido);
                                        if (!_this.repetido) {
                                            _this.repetido = false;
                                            val.forEach(function (element) {
                                                _this.assData.push(element);
                                                _this.assData.push(_this.event_id);
                                                console.log(_this.assData);
                                                _this.httpService.postAssistance(_this.assData).then(function (res) {
                                                    console.log(res);
                                                });
                                                _this.repetido = false;
                                                _this.assData = [];
                                                _this.inputs = [];
                                                _this.presentToastSucc();
                                            });
                                            _this.doRefresh();
                                        }
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
    PostPage.prototype.eraseAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Quién no asistirá?',
                            inputs: this.inputs,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (val) {
                                        _this.asistira = false;
                                        _this.clickable_ass = false;
                                        val.forEach(function (element) {
                                            _this.httpService.deleteAssistance(element, _this.event_id).then(function (res) {
                                                console.log(res);
                                            });
                                            _this.assData = [];
                                            _this.presentToastEr();
                                        });
                                        _this.doRefresh();
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
    PostPage.prototype.doRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this.asistentes = [];
            _this.ngOnInit();
            console.log('Async operation has ended');
        }, 2000);
    };
    PostPage.prototype.doRef = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    PostPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Ese usuario ya está en la lista de asistencia.',
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
    PostPage.prototype.presentToastSucc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Añadido(s) a la lista de asistencia.',
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
    PostPage.prototype.presentToastEr = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Borrado(s) de la lista de asistencia.',
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
    PostPage.prototype.eraseAss = function () {
        this.eraseAlert();
    };
    PostPage.prototype.checkClickable = function () {
        console.log("POST: " + this.post_section + "ROL: " + this.user.role);
        if ((this.user.role >= 6 && this.user.role <= 10) || this.user.role == 0) {
            this.clickable = true;
        }
        else {
            console.log(this.post_section + " ROL: " + this.user.role);
            if (this.post_section == 0) {
                console.log("HEY");
                this.clickable = true;
            }
            else if (this.post_section == 1) {
                console.log("HEY");
                if (this.user.role == 1 || this.user.role == 6) {
                    this.clickable = true;
                }
                else {
                    this.clickable = false;
                }
            }
            else if (this.post_section == 2) {
                console.log("HEY");
                if (this.user.role == 2 || this.user.role == 7) {
                    this.clickable = true;
                }
                else {
                    this.clickable = false;
                }
            }
            else if (this.post_section == 3) {
                console.log("HEY");
                if (this.user.role == 3 || this.user.role == 8) {
                    this.clickable = true;
                }
                else {
                    this.clickable = false;
                }
            }
            else if (this.post_section == 4) {
                console.log("HEY");
                if (this.user.role == 4 || this.user.role == 13) {
                    this.clickable = true;
                }
                else {
                    this.clickable = false;
                }
            }
            else if (this.post_section == 5) {
                console.log("HEY");
                if (this.user.role == 5 || this.user.role == 14) {
                    this.clickable = true;
                }
                else {
                    this.clickable = false;
                }
            }
        }
    };
    PostPage.prototype.asistir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkClickable()];
                    case 1:
                        _a.sent();
                        if (!this.clickable) {
                            this.showAlert();
                        }
                        else {
                            this.sonAlert();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.presentLoading = function () {
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
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.page.html */ "./src/app/post/post.page.html"),
            styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], PostPage);
    return PostPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-post-module.js.map