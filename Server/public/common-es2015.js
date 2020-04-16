(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@core/services/call.service.ts":
/*!************************************************!*\
  !*** ./src/app/@core/services/call.service.ts ***!
  \************************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CallService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    get(observe = 'body', reportProgress = false) {
        const headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`/api/calls`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    deleteAll() {
        const headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        // to determine the Content-Type header
        const consumes = [];
        this.httpClient.delete(`/api/calls`, {
            headers: headers
        }).subscribe();
    }
}
CallService.ɵfac = function CallService_Factory(t) { return new (t || CallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallService, factory: CallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operators-center/operators-layout/operators-layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/operators-center/operators-layout/operators-layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OperatorsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsLayoutComponent", function() { return OperatorsLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class OperatorsLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
OperatorsLayoutComponent.ɵfac = function OperatorsLayoutComponent_Factory(t) { return new (t || OperatorsLayoutComponent)(); };
OperatorsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorsLayoutComponent, selectors: [["app-operators-layout"]], decls: 1, vars: 0, template: function OperatorsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvb3BlcmF0b3JzLWxheW91dC9vcGVyYXRvcnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorsLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operators-layout',
                templateUrl: './operators-layout.component.html',
                styleUrls: ['./operators-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map