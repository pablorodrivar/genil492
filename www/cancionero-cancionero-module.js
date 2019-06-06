(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancionero-cancionero-module"],{

/***/ "./src/app/cancionero/cancionero.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cancionero/cancionero.module.ts ***!
  \*************************************************/
/*! exports provided: CancioneroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancioneroPageModule", function() { return CancioneroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancionero_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancionero.page */ "./src/app/cancionero/cancionero.page.ts");








var routes = [
    {
        path: '',
        component: _cancionero_page__WEBPACK_IMPORTED_MODULE_7__["CancioneroPage"]
    }
];
var CancioneroPageModule = /** @class */ (function () {
    function CancioneroPageModule() {
    }
    CancioneroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancionero_page__WEBPACK_IMPORTED_MODULE_7__["CancioneroPage"]]
        })
    ], CancioneroPageModule);
    return CancioneroPageModule;
}());



/***/ }),

/***/ "./src/app/cancionero/cancionero.page.html":
/*!*************************************************!*\
  !*** ./src/app/cancionero/cancionero.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button><ion-icon name=\"musical-notes\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cancionero</ion-title>     \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-searchbar placeholder=\"Buscar cancion...\" animated (ionChange)=\"searchSong($event)\"></ion-searchbar>   \r\n  <ion-item lines=\"none\">\r\n    <ion-chip color=\"secondary\" style=\"font-size: 10px;\">Grupo</ion-chip>\r\n    <ion-chip color=\"primary\" style=\"font-size: 10px;\">Colonia</ion-chip>\r\n    <ion-chip color=\"warning\" style=\"font-size: 10px;\">Manada</ion-chip>\r\n    <ion-chip color=\"success\" style=\"font-size: 10px;\">Tropa</ion-chip>\r\n    <ion-chip color=\"tertiary\" style=\"font-size: 10px;\">Unidad</ion-chip>\r\n    <ion-chip color=\"danger\" style=\"font-size: 10px;\">Clan</ion-chip>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let song of songs | filter:searchText\" (click)=\"openSong(song.path)\">\r\n      <ion-label>{{ song.title }}</ion-label>\r\n      <ion-chip *ngIf=\"song.section == 0\" color=\"secondary\">Grupo</ion-chip>\r\n      <ion-chip *ngIf=\"song.section == 1\" color=\"primary\">Colonia</ion-chip>\r\n      <ion-chip *ngIf=\"song.section == 2\" color=\"warning\">Manada</ion-chip>\r\n      <ion-chip *ngIf=\"song.section == 3\" color=\"success\">Tropa</ion-chip>\r\n      <ion-chip *ngIf=\"song.section == 4\" color=\"tertiary\">Unidad</ion-chip>\r\n      <ion-chip *ngIf=\"song.section == 5\" color=\"danger\">Clan</ion-chip>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cancionero/cancionero.page.scss":
/*!*************************************************!*\
  !*** ./src/app/cancionero/cancionero.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNpb25lcm8vY2FuY2lvbmVyby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cancionero/cancionero.page.ts":
/*!***********************************************!*\
  !*** ./src/app/cancionero/cancionero.page.ts ***!
  \***********************************************/
/*! exports provided: CancioneroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancioneroPage", function() { return CancioneroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");









var CancioneroPage = /** @class */ (function () {
    function CancioneroPage(httpService, platform, file, ft, fileOpener, document, loadingController) {
        this.httpService = httpService;
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.loadingController = loadingController;
        this.songs = [];
        this.searchText = '';
    }
    CancioneroPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading();
        this.httpService.getSongs().then(function (val) {
            _this.songs = val.song;
        });
    };
    CancioneroPage.prototype.searchSong = function (event) {
        var text = event.target.value;
        this.searchText = text;
    };
    CancioneroPage.prototype.openSong = function (path) {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, path, this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'My PDF'
            };
            this.document.viewDocument(filePath + "/5-tools.pdf", 'application/pdf', options);
        }
    };
    CancioneroPage.prototype.presentLoading = function () {
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
    CancioneroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancionero',
            template: __webpack_require__(/*! ./cancionero.page.html */ "./src/app/cancionero/cancionero.page.html"),
            styles: [__webpack_require__(/*! ./cancionero.page.scss */ "./src/app/cancionero/cancionero.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["DocumentViewer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], CancioneroPage);
    return CancioneroPage;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (songs, text) {
        if (text.length === 0) {
            return songs;
        }
        text = text.toLocaleLowerCase();
        return songs.filter(function (song) {
            return song.title.toLocaleLowerCase().indexOf(text) >= 0;
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/pipes/filter.pipe.ts");




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]],
            exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=cancionero-cancionero-module.js.map