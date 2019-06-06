(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-section-module"],{

/***/ "./src/app/section/section.module.ts":
/*!*******************************************!*\
  !*** ./src/app/section/section.module.ts ***!
  \*******************************************/
/*! exports provided: SectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageModule", function() { return SectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _section_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section.page */ "./src/app/section/section.page.ts");







var routes = [
    {
        path: '',
        component: _section_page__WEBPACK_IMPORTED_MODULE_6__["SectionPage"]
    }
];
var SectionPageModule = /** @class */ (function () {
    function SectionPageModule() {
    }
    SectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_section_page__WEBPACK_IMPORTED_MODULE_6__["SectionPage"]]
        })
    ], SectionPageModule);
    return SectionPageModule;
}());



/***/ }),

/***/ "./src/app/section/section.page.html":
/*!*******************************************!*\
  !*** ./src/app/section/section.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tab2\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"section_id == 0\">Colonia</ion-title>\r\n    <ion-title *ngIf=\"section_id == 1\">Manada</ion-title>\r\n    <ion-title *ngIf=\"section_id == 2\">Tropa</ion-title>\r\n    <ion-title *ngIf=\"section_id == 3\">Unidad</ion-title>\r\n    <ion-title *ngIf=\"section_id == 4\">Clan</ion-title>\r\n    <ion-title *ngIf=\"section_id == 5\">Kraal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"title\">Blog de la Seccion</ion-label>\r\n    <img *ngIf=\"section_id == 0\" src=\"../../assets/castores.jpg\" class=\"sec-img\">\r\n    <img *ngIf=\"section_id == 1\" src=\"../../assets/lobatos.png\" class=\"sec-img\">\r\n    <img *ngIf=\"section_id == 2\" src=\"../../assets/troperos.jpg\" class=\"sec-img\">\r\n    <img *ngIf=\"section_id == 3\" src=\"../../assets/escultas.jpg\" class=\"sec-img\">\r\n    <img *ngIf=\"section_id == 4\" src=\"../../assets/rovers.jpg\" class=\"sec-img\">\r\n    <img *ngIf=\"section_id == 5\" src=\"../../assets/kraal.jpg\" class=\"sec-img\">\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label style=\"font-size: 20px;\">Ultimas noticias</ion-label>\r\n  </ion-item>\r\n  <ion-card *ngFor=\"let post of posts\" (click)=\"goToPost(post.id)\">\r\n    <ion-item *ngIf=\"post.section == 0\" color=\"secondary\">\r\n      <ion-item color=\"secondary\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n      <ion-item color=\"secondary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n      <ion-item color=\"secondary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n      <ion-item color=\"secondary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n    </ion-item>    \r\n    <ion-item *ngIf=\"post.section == 1\" color=\"primary\">\r\n        <ion-item color=\"primary\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n        <ion-item color=\"primary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n        <ion-item color=\"primary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n        <ion-item color=\"primary\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 2\" color=\"warning\">\r\n        <ion-item color=\"warning\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n        <ion-item color=\"warning\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n        <ion-item color=\"warning\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n        <ion-item color=\"warning\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 3\" color=\"success\">\r\n        <ion-item color=\"success\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n        <ion-item color=\"success\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n        <ion-item color=\"success\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n        <ion-item color=\"success\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 4\" color=\"unidad\">\r\n        <ion-item color=\"unidad\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n        <ion-item color=\"unidad\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n        <ion-item color=\"unidad\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n        <ion-item color=\"unidad\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"post.section == 5\" color=\"danger\">\r\n        <ion-item color=\"danger\" style=\"color: white;\" slot=\"start\">{{ post.title }}</ion-item> \r\n        <ion-item color=\"danger\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 0\">Excursion</ion-item> \r\n        <ion-item color=\"danger\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 1\">Acampada</ion-item> \r\n        <ion-item color=\"danger\" slot=\"end\" style=\"color: white;\" *ngIf=\"post.event == 2\">Campamento</ion-item> \r\n      </ion-item>      \r\n    <ion-card-content>\r\n      <img class=\"thumbnail\" src=\"../../assets/forest1.jpg\">\r\n      <ion-item *ngIf=\"post.content.length > 100\">{{ post.content.substring(0, 100) }}...</ion-item>\r\n      <ion-item *ngIf=\"post.content.length < 100\">{{ post.content }}</ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-item slot=\"start\" lines=\"none\">{{ post.author }}</ion-item>\r\n        <ion-item slot=\"end\" lines=\"none\">{{ post.date }}</ion-item>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"start\">\r\n        <ion-fab-button><ion-icon name=\"mail\"></ion-icon></ion-fab-button>\r\n        <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side=\"top\">\r\n        <ion-fab-button><ion-icon name=\"contacts\"></ion-icon></ion-fab-button>\r\n        <ion-fab-button><ion-icon name=\"hand\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content> \r\n"

/***/ }),

/***/ "./src/app/section/section.page.scss":
/*!*******************************************!*\
  !*** ./src/app/section/section.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  position: absolute;\n  color: white;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  font-size: 25px; }\n\n.elbutton {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 60%;\n  width: 100%;\n  text-align: center; }\n\n.sec-img {\n  height: 250px !important;\n  width: 100% !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.thumbnail {\n  height: 250px !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9DOlxcVXNlcnNcXEExNzBBNkJcXERlc2t0b3BcXGdlbmlsNDkyL3NyY1xcYXBwXFxzZWN0aW9uXFxzZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmVsYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWMtaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAudGh1bWJuYWlsIHtcclxuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/section/section.page.ts":
/*!*****************************************!*\
  !*** ./src/app/section/section.page.ts ***!
  \*****************************************/
/*! exports provided: SectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPage", function() { return SectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var USER_KEY = 'user-key';
var SectionPage = /** @class */ (function () {
    function SectionPage(route, httpService, storage, router) {
        this.route = route;
        this.httpService = httpService;
        this.storage = storage;
        this.router = router;
        this.posts = [];
    }
    SectionPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(USER_KEY).then(function (val) {
                            _this.user = val;
                        })];
                    case 1:
                        _a.sent();
                        this.section_id = this.route.snapshot.paramMap.get('id');
                        if (this.section_id == 6) {
                            this.actual_id = 0;
                        }
                        else {
                            this.actual_id = +this.section_id + 1;
                        }
                        return [4 /*yield*/, this.httpService.getPostBySection(this.actual_id).then(function (val) {
                                _this.posts = val.section;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionPage.prototype.goToPost = function (id) {
        this.router.navigate(["/post", id]);
    };
    SectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.page.html */ "./src/app/section/section.page.html"),
            styles: [__webpack_require__(/*! ./section.page.scss */ "./src/app/section/section.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SectionPage);
    return SectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=section-section-module.js.map