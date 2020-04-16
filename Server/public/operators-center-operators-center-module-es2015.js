(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operators-center-operators-center-module"],{

/***/ "./src/app/@core/models/callback.model.ts":
/*!************************************************!*\
  !*** ./src/app/@core/models/callback.model.ts ***!
  \************************************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
class Callback {
}


/***/ }),

/***/ "./src/app/@core/services/callback.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/services/callback.service.ts ***!
  \****************************************************/
/*! exports provided: CallbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackService", function() { return CallbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CallbackService {
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
        return this.httpClient.get(`/api/callbacks`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    save(callback) {
        const headers = this.defaultHeaders;
        return this.httpClient.get(`/callback`);
    }
}
CallbackService.ɵfac = function CallbackService_Factory(t) { return new (t || CallbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CallbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallbackService, factory: CallbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/services/event.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/services/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class EventService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    get(pbxCallId, observe = 'body', reportProgress = false) {
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
        return this.httpClient.get(`/api/calls/${pbxCallId}/events`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getAll(observe = 'body', reportProgress = false) {
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
        return this.httpClient.get(`/api/events`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/services/variable.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/services/variable.service.ts ***!
  \****************************************************/
/*! exports provided: VariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableService", function() { return VariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class VariableService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    get(pbxCallId, observe = 'body', reportProgress = false) {
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
        return this.httpClient.get(`/api/calls/${pbxCallId}/variables`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
VariableService.ɵfac = function VariableService_Factory(t) { return new (t || VariableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VariableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VariableService, factory: VariableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operators-center/callbacks/callback-form/callback-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/operators-center/callbacks/callback-form/callback-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CallbackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackFormComponent", function() { return CallbackFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_callback_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/models/callback.model */ "./src/app/@core/models/callback.model.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");






class CallbackFormComponent {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.callback = new _core_models_callback_model__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
    }
    ngOnInit() {
    }
    save_Click() {
        this.save.emit(this.callback);
    }
}
CallbackFormComponent.ɵfac = function CallbackFormComponent_Factory(t) { return new (t || CallbackFormComponent)(); };
CallbackFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallbackFormComponent, selectors: [["app-callback-form"]], outputs: { save: "save" }, decls: 9, vars: 1, consts: [["colCount", "1", 3, "formData"], ["dataField", "from"], ["text", "\u041E\u0442 \u043A\u043E\u0433\u043E"], ["dataField", "to"], ["text", "\u041A\u043E\u043C\u0443"], ["stylingMode", "contained", "type", "success", "text", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 3, "click"]], template: function CallbackFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dxi-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dxi-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxo-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "dx-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallbackFormComponent_Template_dx_button_click_8_listener() { return ctx.save_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.callback);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoLabelComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvY2FsbGJhY2tzL2NhbGxiYWNrLWZvcm0vY2FsbGJhY2stZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-callback-form',
                templateUrl: './callback-form.component.html',
                styleUrls: ['./callback-form.component.scss']
            }]
    }], function () { return []; }, { save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/operators-center/callbacks/callbacks.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/operators-center/callbacks/callbacks.component.ts ***!
  \*******************************************************************/
/*! exports provided: CallbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbacksComponent", function() { return CallbacksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_callback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/services/callback.service */ "./src/app/@core/services/callback.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
/* harmony import */ var _callback_form_callback_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callback-form/callback-form.component */ "./src/app/operators-center/callbacks/callback-form/callback-form.component.ts");








function CallbacksComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-callback-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("save", function CallbacksComponent_div_9_Template_app_callback_form_save_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.save($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 20]; };
class CallbacksComponent {
    constructor(callbackService) {
        this.callbackService = callbackService;
        this.popupVisible = false;
    }
    ngOnInit() {
        this.callbackService.get().subscribe(callbacks => {
            if (callbacks === null) {
                return;
            }
            console.log(callbacks);
            this.callbacks = callbacks;
        });
    }
    add() {
        this.popupVisible = true;
    }
    save($event) {
        console.log($event);
        this.callbackService.save($event).subscribe(res => {
            console.log(res);
            this.popupVisible = false;
        }, err => {
            console.error(err);
        });
    }
}
CallbacksComponent.ɵfac = function CallbacksComponent_Factory(t) { return new (t || CallbacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_callback_service__WEBPACK_IMPORTED_MODULE_1__["CallbackService"])); };
CallbacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallbacksComponent, selectors: [["app-callbacks"]], decls: 10, vars: 10, consts: [["id", "gridContainer", 3, "dataSource", "showBorders"], [3, "pageSize"], [3, "visible"], [3, "showPageSizeSelector", "allowedPageSizes", "showInfo"], ["dataField", "to"], ["dataField", "from"], ["title", "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A", 3, "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [3, "save"]], template: function CallbacksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-data-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxo-paging", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-search-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxo-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "dx-popup", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function CallbacksComponent_Template_dx_popup_visibleChange_8_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CallbacksComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.callbacks)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoSearchPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiColumnComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_5__["DxTemplateDirective"], _callback_form_callback_form_component__WEBPACK_IMPORTED_MODULE_6__["CallbackFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvY2FsbGJhY2tzL2NhbGxiYWNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-callbacks',
                templateUrl: './callbacks.component.html',
                styleUrls: ['./callbacks.component.scss']
            }]
    }], function () { return [{ type: _core_services_callback_service__WEBPACK_IMPORTED_MODULE_1__["CallbackService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operators-center/calls/calls.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/operators-center/calls/calls.component.ts ***!
  \***********************************************************/
/*! exports provided: CallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsComponent", function() { return CallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/services/call.service */ "./src/app/@core/services/call.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _variables_variables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./variables/variables.component */ "./src/app/operators-center/calls/variables/variables.component.ts");










const _c0 = function (a0) { return [a0]; };
function CallsComponent_dx_data_grid_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, "/calls/" + d_r23.data.pbx_call_id) + "/events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r23.data.pbx_call_id, " ");
} }
function CallsComponent_dx_data_grid_0_div_18_dx_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallsComponent_dx_data_grid_0_div_18_dx_button_1_Template_dx_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const d_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.play(d_r24.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CallsComponent_dx_data_grid_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CallsComponent_dx_data_grid_0_div_18_dx_button_1_Template, 1, 0, "dx-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r24.data.call_filename);
} }
function CallsComponent_dx_data_grid_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-variables", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("call", data_r29.data);
} }
const _c1 = function () { return { enabled: true, template: "detail" }; };
const _c2 = function () { return [20, 30, 40]; };
function CallsComponent_dx_data_grid_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-data-grid", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dxo-paging", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dxo-search-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxo-header-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxo-column-chooser", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxo-pager", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dxi-column", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxi-column", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxi-column", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxi-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxi-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxi-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dxi-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "dxi-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dxi-column", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CallsComponent_dx_data_grid_0_div_17_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CallsComponent_dx_data_grid_0_div_18_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CallsComponent_dx_data_grid_0_div_19_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r19.calls)("showBorders", true)("masterDetail", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c1))("allowColumnResizing", true)("allowColumnReordering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2))("showInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "pbxCallIdCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "pbxCallFileNameCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "detail");
} }
class CallsComponent {
    constructor(callService) {
        this.callService = callService;
    }
    ngOnInit() {
        this.callService.get().subscribe(calls => {
            this.calls = calls;
        });
    }
    play(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const audio = new Audio();
            audio.src = data.call_filename;
            audio.load();
            yield audio.play();
        });
    }
}
CallsComponent.ɵfac = function CallsComponent_Factory(t) { return new (t || CallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"])); };
CallsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CallsComponent, selectors: [["app-calls"]], decls: 1, vars: 1, consts: [["id", "gridContainer", 3, "dataSource", "showBorders", "masterDetail", "allowColumnResizing", "allowColumnReordering", 4, "ngIf"], ["id", "gridContainer", 3, "dataSource", "showBorders", "masterDetail", "allowColumnResizing", "allowColumnReordering"], [3, "pageSize"], [3, "visible"], ["mode", "dragAndDrop", 3, "enabled"], [3, "showPageSizeSelector", "allowedPageSizes", "showInfo"], ["dataField", "createdAt"], ["dataField", "call_start"], ["dataField", "call_answer"], ["dataField", "call_end"], ["dataField", "pbx_call_id", "cellTemplate", "pbxCallIdCellTemplate"], ["dataField", "caller_id"], ["dataField", "internal"], ["dataField", "responsibles"], ["dataField", "called_phone_number"], ["dataField", "duration"], ["dataField", "call_filename", "cellTemplate", "pbxCallFileNameCellTemplate"], [4, "dxTemplate", "dxTemplateOf"], [3, "routerLink"], ["icon", "video", 3, "click", 4, "ngIf"], ["icon", "video", 3, "click"], [3, "call"]], template: function CallsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CallsComponent_dx_data_grid_0_Template, 20, 17, "dx-data-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSearchPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoColumnChooserComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonComponent"], _variables_variables_component__WEBPACK_IMPORTED_MODULE_8__["VariablesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvY2FsbHMvY2FsbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-calls',
                templateUrl: './calls.component.html',
                styleUrls: ['./calls.component.scss']
            }]
    }], function () { return [{ type: _core_services_call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operators-center/calls/events/events.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/operators-center/calls/events/events.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services/event.service */ "./src/app/@core/services/event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");







const _c0 = function () { return [5, 10, 20]; };
function EventsComponent_dx_data_grid_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-data-grid", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dxo-paging", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dxo-search-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxo-header-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-column-chooser", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxo-pager", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-column", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxi-column", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxi-column", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxi-column", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxi-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxi-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dxi-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "dxi-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dxi-column", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "dxi-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "dxi-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "dxi-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "dxi-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "dxi-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "dxi-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "dxi-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r30.events)("showBorders", true)("allowColumnResizing", true)("allowColumnReordering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("showInfo", true);
} }
class EventsComponent {
    constructor(route, eventService) {
        this.route = route;
        this.eventService = eventService;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.pbxCallId = params['pbxCallId'];
            if (this.pbxCallId) {
                this.eventService.get(this.pbxCallId).subscribe(events => {
                    this.events = events;
                });
            }
            else {
                this.eventService.getAll().subscribe(events => {
                    this.events = events;
                });
            }
        });
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 1, vars: 1, consts: [["id", "gridContainer", 3, "dataSource", "showBorders", "allowColumnResizing", "allowColumnReordering", 4, "ngIf"], ["id", "gridContainer", 3, "dataSource", "showBorders", "allowColumnResizing", "allowColumnReordering"], [3, "pageSize"], [3, "visible"], ["mode", "dragAndDrop", 3, "enabled"], [3, "showPageSizeSelector", "allowedPageSizes", "showInfo"], ["dataField", "createdAt"], ["dataField", "Event"], ["dataField", "Privilege"], ["dataField", "Channel"], ["dataField", "ChannelState"], ["dataField", "ChannelStateDesc"], ["dataField", "CallerIDNum"], ["dataField", "CallerIDName"], ["dataField", "ConnectedLineNum"], ["dataField", "ConnectedLineName"], ["dataField", "Language"], ["dataField", "AccountCode"], ["dataField", "Context"], ["dataField", "Exten"], ["dataField", "Priority"], ["dataField", "Variable"], ["dataField", "Value"], ["dataField", "Uniqueid"], ["dataField", "Linkedid"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventsComponent_dx_data_grid_0_Template, 25, 12, "dx-data-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSearchPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoColumnChooserComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiColumnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvY2FsbHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operators-center/calls/variables/variables.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/operators-center/calls/variables/variables.component.ts ***!
  \*************************************************************************/
/*! exports provided: VariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesComponent", function() { return VariablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_variable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services/variable.service */ "./src/app/@core/services/variable.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");






function VariablesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VariablesComponent_div_7_Template_dx_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.show(data_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VariablesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.variable.response, "");
} }
const _c0 = function () { return [5, 10, 20]; };
class VariablesComponent {
    constructor(variableService) {
        this.variableService = variableService;
        this.popupShow = false;
    }
    ngOnInit() {
        this.variableService.get(this.call.pbx_call_id).subscribe(variables => {
            if (variables === null) {
                return;
            }
            console.log(variables);
            this.variables = variables;
        });
    }
    show(data) {
        console.log(data);
        this.popupShow = true;
        this.variable = data.data;
    }
}
VariablesComponent.ɵfac = function VariablesComponent_Factory(t) { return new (t || VariablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_variable_service__WEBPACK_IMPORTED_MODULE_1__["VariableService"])); };
VariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariablesComponent, selectors: [["app-variables"]], inputs: { call: "call" }, decls: 10, vars: 11, consts: [["id", "gridContainer", 3, "dataSource", "showBorders"], [3, "pageSize"], [3, "visible"], [3, "showPageSizeSelector", "allowedPageSizes", "showInfo"], ["dataField", "title"], ["dataField", "value"], ["dataField", "buttonShow", "caption", "", "width", "110", "cellTemplate", "cellButtonShowTemplate"], [4, "dxTemplate", "dxTemplateOf"], ["title", "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438", 3, "visible", "visibleChange"], ["icon", "file", 3, "click"]], template: function VariablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-data-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dxo-paging", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dxo-search-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxo-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxi-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VariablesComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "dx-popup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function VariablesComponent_Template_dx_popup_visibleChange_8_listener($event) { return ctx.popupShow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VariablesComponent_div_9_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.variables)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "cellButtonShowTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.popupShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoSearchPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__["DxTemplateDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy1jZW50ZXIvY2FsbHMvdmFyaWFibGVzL3ZhcmlhYmxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-variables',
                templateUrl: './variables.component.html',
                styleUrls: ['./variables.component.scss']
            }]
    }], function () { return [{ type: _core_services_variable_service__WEBPACK_IMPORTED_MODULE_1__["VariableService"] }]; }, { call: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/operators-center/operators-center-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/operators-center/operators-center-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OperatorsCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsCenterRoutingModule", function() { return OperatorsCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators-layout/operators-layout.component */ "./src/app/operators-center/operators-layout/operators-layout.component.ts");
/* harmony import */ var _calls_calls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls/calls.component */ "./src/app/operators-center/calls/calls.component.ts");
/* harmony import */ var _calls_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calls/events/events.component */ "./src/app/operators-center/calls/events/events.component.ts");
/* harmony import */ var _callbacks_callbacks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callbacks/callbacks.component */ "./src/app/operators-center/callbacks/callbacks.component.ts");








const routes = [
    {
        path: '', component: _operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_2__["OperatorsLayoutComponent"], children: [
            {
                path: '', component: _calls_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"]
            },
            {
                path: ':pbxCallId/events', component: _calls_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"]
            },
            {
                path: 'events', component: _calls_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"]
            },
            {
                path: 'callbacks', component: _callbacks_callbacks_component__WEBPACK_IMPORTED_MODULE_5__["CallbacksComponent"]
            }
        ]
    }
];
class OperatorsCenterRoutingModule {
}
OperatorsCenterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OperatorsCenterRoutingModule });
OperatorsCenterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OperatorsCenterRoutingModule_Factory(t) { return new (t || OperatorsCenterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OperatorsCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorsCenterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/operators-center/operators-center.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/operators-center/operators-center.module.ts ***!
  \*************************************************************/
/*! exports provided: OperatorsCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsCenterModule", function() { return OperatorsCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _operators_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators-center-routing.module */ "./src/app/operators-center/operators-center-routing.module.ts");
/* harmony import */ var _calls_calls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls/calls.component */ "./src/app/operators-center/calls/calls.component.ts");
/* harmony import */ var _operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators-layout/operators-layout.component */ "./src/app/operators-center/operators-layout/operators-layout.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _calls_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calls/events/events.component */ "./src/app/operators-center/calls/events/events.component.ts");
/* harmony import */ var _calls_variables_variables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calls/variables/variables.component */ "./src/app/operators-center/calls/variables/variables.component.ts");
/* harmony import */ var _callbacks_callbacks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callbacks/callbacks.component */ "./src/app/operators-center/callbacks/callbacks.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _callbacks_callback_form_callback_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./callbacks/callback-form/callback-form.component */ "./src/app/operators-center/callbacks/callback-form/callback-form.component.ts");












class OperatorsCenterModule {
}
OperatorsCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OperatorsCenterModule });
OperatorsCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OperatorsCenterModule_Factory(t) { return new (t || OperatorsCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _operators_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["OperatorsCenterRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OperatorsCenterModule, { declarations: [_calls_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"], _operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_4__["OperatorsLayoutComponent"], _calls_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"], _calls_variables_variables_component__WEBPACK_IMPORTED_MODULE_7__["VariablesComponent"], _callbacks_callbacks_component__WEBPACK_IMPORTED_MODULE_8__["CallbacksComponent"], _callbacks_callback_form_callback_form_component__WEBPACK_IMPORTED_MODULE_10__["CallbackFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _operators_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["OperatorsCenterRoutingModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorsCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calls_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"], _operators_layout_operators_layout_component__WEBPACK_IMPORTED_MODULE_4__["OperatorsLayoutComponent"], _calls_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"], _calls_variables_variables_component__WEBPACK_IMPORTED_MODULE_7__["VariablesComponent"], _callbacks_callbacks_component__WEBPACK_IMPORTED_MODULE_8__["CallbacksComponent"], _callbacks_callback_form_callback_form_component__WEBPACK_IMPORTED_MODULE_10__["CallbackFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _operators_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["OperatorsCenterRoutingModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=operators-center-operators-center-module-es2015.js.map