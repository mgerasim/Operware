function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@core/models/configuration.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/@core/models/configuration.model.ts ***!
    \*****************************************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppCoreModelsConfigurationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = function Configuration() {
      _classCallCheck(this, Configuration);
    };
    /***/

  },

  /***/
  "./src/app/@core/services/configuration.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@core/services/configuration.service.ts ***!
    \*********************************************************/

  /*! exports provided: ConfigurationService */

  /***/
  function srcAppCoreServicesConfigurationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationService", function () {
      return ConfigurationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ConfigurationService = /*#__PURE__*/function () {
      function ConfigurationService(httpClient) {
        _classCallCheck(this, ConfigurationService);

        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
      }

      _createClass(ConfigurationService, [{
        key: "delete",
        value: function _delete(id) {
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json', 'text/json', 'application/xml', 'text/xml']; // to determine the Content-Type header

          var consumes = [];
          return this.httpClient["delete"]("/api/configuration/".concat(id), {
            headers: headers
          });
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json', 'text/json', 'application/xml', 'text/xml']; // to determine the Content-Type header

          var consumes = [];
          return this.httpClient.get("/api/configuration/".concat(id), {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "get",
        value: function get() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json', 'text/json', 'application/xml', 'text/xml']; // to determine the Content-Type header

          var consumes = [];
          return this.httpClient.get("/api/configuration", {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "add",
        value: function add(configuration) {
          var headers = this.defaultHeaders;
          return this.httpClient.post("/api/configuration", configuration, {
            observe: 'body',
            responseType: 'json'
          });
        }
      }, {
        key: "save",
        value: function save(configuration) {
          var headers = this.defaultHeaders;
          return this.httpClient.put("/api/configuration", configuration, {
            observe: 'body',
            responseType: 'json'
          });
        }
      }]);

      return ConfigurationService;
    }();

    ConfigurationService.ɵfac = function ConfigurationService_Factory(t) {
      return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigurationService,
      factory: ConfigurationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'configuration',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | configuration-center-configuration-center-module */
        "configuration-center-configuration-center-module").then(__webpack_require__.bind(null,
        /*! ./configuration-center/configuration-center.module */
        "./src/app/configuration-center/configuration-center.module.ts")).then(function (m) {
          return m.ConfigurationCenterModule;
        });
      }
    }, {
      path: 'calls',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | operators-center-operators-center-module */
        [__webpack_require__.e("common"), __webpack_require__.e("operators-center-operators-center-module")]).then(__webpack_require__.bind(null,
        /*! ./operators-center/operators-center.module */
        "./src/app/operators-center/operators-center.module.ts")).then(function (m) {
          return m.OperatorsCenterModule;
        });
      }
    }, {
      path: 'service',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | service-center-service-center-module */
        [__webpack_require__.e("common"), __webpack_require__.e("service-center-service-center-module")]).then(__webpack_require__.bind(null,
        /*! ./service-center/service-center.module */
        "./src/app/service-center/service-center.module.ts")).then(function (m) {
          return m.ServiceCenterModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
        enableTracing: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            enableTracing: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Operware';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _menu_menu_organization_menu_organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./menu/menu-organization/menu-organization.component */
    "./src/app/menu/menu-organization/menu-organization.component.ts");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(), devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _menu_menu_organization_menu_organization_component__WEBPACK_IMPORTED_MODULE_9__["MenuOrganizationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _menu_menu_organization_menu_organization_component__WEBPACK_IMPORTED_MODULE_9__["MenuOrganizationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(), devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"]],
          providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu-organization/menu-organization.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/menu/menu-organization/menu-organization.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MenuOrganizationComponent */

  /***/
  function srcAppMenuMenuOrganizationMenuOrganizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuOrganizationComponent", function () {
      return MenuOrganizationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _core_models_configuration_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@core/models/configuration.model */
    "./src/app/@core/models/configuration.model.ts");
    /* harmony import */


    var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! devextreme/ui/notify */
    "./node_modules/devextreme/ui/notify.js");
    /* harmony import */


    var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@core/services/configuration.service */
    "./src/app/@core/services/configuration.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
    /* harmony import */


    var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! devextreme-angular/core */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! devextreme-angular/ui/nested */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");

    function MenuOrganizationComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuOrganizationComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

          var item_r40 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r41.change(item_r40);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.titleOrganization === null ? "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E" : item_r40.titleOrganization, " ");
      }
    }

    function MenuOrganizationComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "dxi-item", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxo-label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "dx-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuOrganizationComponent_div_9_Template_dx_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r44.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formData", ctx_r39.organization);
      }
    }

    var MenuOrganizationComponent = /*#__PURE__*/function () {
      function MenuOrganizationComponent(configurationService) {
        _classCallCheck(this, MenuOrganizationComponent);

        this.configurationService = configurationService;
        this.popupVisible = false;
      }

      _createClass(MenuOrganizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.popupVisible = true;
          this.organization = new _core_models_configuration_model__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    console.log(this.organization);
                    _context.next = 4;
                    return this.configurationService.add(this.organization).toPromise();

                  case 4:
                    res = _context.sent;
                    console.log(res);
                    localStorage.setItem('organization', res.id.toString());
                    this.popupVisible = false;
                    location.reload();
                    _context.next = 15;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0);
                    devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default()(_context.t0.message, 'error');

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 11]]);
          }));
        }
      }, {
        key: "change",
        value: function change(item) {
          console.log(item);
          localStorage.setItem('organization', item.id.toString());
          location.reload();
        }
      }, {
        key: "isEmptyOrganization",
        get: function get() {
          return Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(localStorage.getItem('organization')) || localStorage.getItem('organization') === 'null';
        }
      }, {
        key: "title",
        get: function get() {
          return this.isEmptyOrganization ? 'Выберите организацию' : this.organization.titleOrganization;
        }
      }]);

      return MenuOrganizationComponent;
    }();

    MenuOrganizationComponent.ɵfac = function MenuOrganizationComponent_Factory(t) {
      return new (t || MenuOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]));
    };

    MenuOrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MenuOrganizationComponent,
      selectors: [["app-menu-organization"]],
      inputs: {
        organization: "organization",
        organizations: "organizations"
      },
      decls: 10,
      vars: 5,
      consts: [["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "title", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], ["colCount", "1", 3, "formData"], ["dataField", "titleOrganization"], ["text", "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"], ["stylingMode", "contained", "type", "success", "text", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 3, "click"]],
      template: function MenuOrganizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuOrganizationComponent_Template_button_click_4_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MenuOrganizationComponent_button_7_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "dx-popup", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MenuOrganizationComponent_Template_dx_popup_visibleChange_8_listener($event) {
            return ctx.popupVisible = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MenuOrganizationComponent_div_9_Template, 8, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.organizations);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435")("visible", ctx.popupVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__["DxoLabelComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardFooterComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS1vcmdhbml6YXRpb24vbWVudS1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuOrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-menu-organization',
          templateUrl: './menu-organization.component.html',
          styleUrls: ['./menu-organization.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]
        }];
      }, {
        organization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        organizations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@core/services/configuration.service */
    "./src/app/@core/services/configuration.service.ts");
    /* harmony import */


    var _menu_organization_menu_organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-organization/menu-organization.component */
    "./src/app/menu/menu-organization/menu-organization.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function MenuComponent_nb_menu_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-menu", 2);
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r37.items);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(configurationService) {
        _classCallCheck(this, MenuComponent);

        this.configurationService = configurationService;
        this.items = [{
          title: 'Звонки',
          link: '/calls'
        }, {
          title: 'События',
          link: '/calls/events'
        }, {
          title: 'Конфигурация',
          expanded: true,
          children: [{
            title: 'AMI подключение',
            link: '/configuration'
          }, {
            title: 'Привязка событий',
            link: '/configuration/event-binding'
          }, {
            title: 'Переменные',
            link: '/configuration/variables'
          }, {
            title: 'Обратный звонок',
            link: '/configuration/callback'
          }]
        }, {
          title: 'Обслуживание',
          link: '/service'
        }, {
          title: 'Обратные звонки',
          link: '/calls/callbacks'
        }];
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.configurationService.get().subscribe(function (configurations) {
            _this.configurations = configurations;

            if (!_this.isEmptyOrganization) {
              _this.configuration = _this.configurations.find(function (x) {
                return x.id.toString() === localStorage.getItem('organization');
              });

              if (!_this.configuration) {
                localStorage.setItem('organization', null);
              }
            }
          });
        }
      }, {
        key: "isEmptyOrganization",
        get: function get() {
          return Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(localStorage.getItem('organization')) || localStorage.getItem('organization') === 'null';
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 2,
      vars: 3,
      consts: [[3, "organization", "organizations"], [3, "items", 4, "ngIf"], [3, "items"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-organization", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_nb_menu_1_Template, 1, 1, "nb-menu", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organization", ctx.configuration)("organizations", ctx.configurations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configuration);
        }
      },
      directives: [_menu_organization_menu_organization_component__WEBPACK_IMPORTED_MODULE_3__["MenuOrganizationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mgerasim/Projects/Operware/WebFronted/Operware/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map