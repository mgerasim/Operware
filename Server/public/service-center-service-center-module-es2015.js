(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-center-service-center-module"],{

/***/ "./src/app/service-center/service-center-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service-center/service-center-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCenterRoutingModule", function() { return ServiceCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _operators_center_operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators-center/operators-layout/operators-layout.component */ "./src/app/operators-center/operators-layout/operators-layout.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service-center/service/service.component.ts");






const routes = [
    {
        path: '', component: _operators_center_operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_2__["OperatorsLayoutComponent"], children: [
            {
                path: '', component: _service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]
            }
        ]
    }
];
class ServiceCenterRoutingModule {
}
ServiceCenterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceCenterRoutingModule });
ServiceCenterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceCenterRoutingModule_Factory(t) { return new (t || ServiceCenterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCenterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service-center/service-center.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/service-center/service-center.module.ts ***!
  \*********************************************************/
/*! exports provided: ServiceCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCenterModule", function() { return ServiceCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-center-routing.module */ "./src/app/service-center/service-center-routing.module.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service-center/service/service.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");






class ServiceCenterModule {
}
ServiceCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceCenterModule });
ServiceCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceCenterModule_Factory(t) { return new (t || ServiceCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceCenterModule, { declarations: [_service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterRoutingModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterRoutingModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service-center/service/service.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/service-center/service/service.component.ts ***!
  \*************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@core/services/call.service */ "./src/app/@core/services/call.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");






class ServiceComponent {
    constructor(callService) {
        this.callService = callService;
    }
    ngOnInit() {
    }
    deleteCallAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (confirm('Вы действительно хотите удалить все звонки, события и переменные?')) {
                yield this.callService.deleteAll();
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2___default()('Операция успешна выполнена!');
            }
        });
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"])); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 1, vars: 0, consts: [["stylingMode", "contained", "type", "success", "text", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435", 3, "click"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServiceComponent_Template_dx_button_click_0_listener() { return ctx.deleteCallAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtY2VudGVyL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-service',
                templateUrl: './service.component.html',
                styleUrls: ['./service.component.scss']
            }]
    }], function () { return [{ type: _core_services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=service-center-service-center-module-es2015.js.map