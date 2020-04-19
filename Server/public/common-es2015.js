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
    deleteAll(configurationId) {
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
        return this.httpClient.delete(`/api/calls/${configurationId}`, {
            headers: headers
        });
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


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map