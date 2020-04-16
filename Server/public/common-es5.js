function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/@core/services/call.service.ts":
  /*!************************************************!*\
    !*** ./src/app/@core/services/call.service.ts ***!
    \************************************************/

  /*! exports provided: CallService */

  /***/
  function srcAppCoreServicesCallServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallService", function () {
      return CallService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CallService = /*#__PURE__*/function () {
      function CallService(httpClient) {
        _classCallCheck(this, CallService);

        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
      }

      _createClass(CallService, [{
        key: "get",
        value: function get() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json', 'text/json', 'application/xml', 'text/xml']; // to determine the Content-Type header

          var consumes = [];
          return this.httpClient.get("/api/calls", {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json', 'text/json', 'application/xml', 'text/xml']; // to determine the Content-Type header

          var consumes = [];
          this.httpClient["delete"]("/api/calls", {
            headers: headers
          }).subscribe();
        }
      }]);

      return CallService;
    }();

    CallService.ɵfac = function CallService_Factory(t) {
      return new (t || CallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CallService,
      factory: CallService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/operators-center/operators-layout/operators-layout.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/operators-center/operators-layout/operators-layout.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: OperatorsLayoutComponent */

  /***/
  function srcAppOperatorsCenterOperatorsLayoutOperatorsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorsLayoutComponent", function () {
      return OperatorsLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OperatorsLayoutComponent = /*#__PURE__*/function () {
      function OperatorsLayoutComponent() {
        _classCallCheck(this, OperatorsLayoutComponent);
      }

      _createClass(OperatorsLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OperatorsLayoutComponent;
    }();

    OperatorsLayoutComponent.ɵfac = function OperatorsLayoutComponent_Factory(t) {
      return new (t || OperatorsLayoutComponent)();
    };

    OperatorsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OperatorsLayoutComponent,
      selectors: [["app-operators-layout"]],
      decls: 1,
      vars: 0,
      template: function OperatorsLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvb3BlcmF0b3JzLWxheW91dC9vcGVyYXRvcnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorsLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-operators-layout',
          templateUrl: './operators-layout.component.html',
          styleUrls: ['./operators-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map