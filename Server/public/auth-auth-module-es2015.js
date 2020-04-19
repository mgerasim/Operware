(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/angular-google-recaptcha/__ivy_ngcc__/angular-google-recaptcha.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/angular-google-recaptcha/__ivy_ngcc__/angular-google-recaptcha.js ***!
  \****************************************************************************************/
/*! exports provided: RecaptchaModule, ScriptLoaderService, RecaptchaComponent, RECAPTCHA_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function() { return RecaptchaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function() { return RecaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_CONFIG", function() { return RECAPTCHA_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = ["container"];
const RECAPTCHA_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-recaptcha siteKey');

class ScriptLoaderService {
    /**
     * @param {?} config
     * @return {?}
     */
    injectAndLoadScript(config) {
        const /** @type {?} */ script = document.createElement('script');
        script.src = config.scriptSrc;
        script.async = true;
        script.defer = true;
        script.onload = () => config.onLoadCallback();
        script.onerror = err => config.onErrorCallback(err);
        document.body.appendChild(script);
    }
}
ScriptLoaderService.ɵfac = function ScriptLoaderService_Factory(t) { return new (t || ScriptLoaderService)(); };
ScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptLoaderService, factory: ScriptLoaderService.ɵfac });
/**
 * @nocollapse
 */
ScriptLoaderService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class RecaptchaComponent {
    /**
     * @param {?} recaptchaConfig
     * @param {?} controlDir
     * @param {?} scriptLoaderService
     * @param {?} zone
     * @param {?} cd
     */
    constructor(recaptchaConfig, controlDir, scriptLoaderService, zone, cd) {
        this.recaptchaConfig = recaptchaConfig;
        this.controlDir = controlDir;
        this.scriptLoaderService = scriptLoaderService;
        this.zone = zone;
        this.cd = cd;
        this.scriptLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scriptError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.GLOBAL_ON_LOAD_CALLBACK_NAME = '___recaptchaOnLoadCallback___';
        this.controlDir.valueAccessor = this;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ control = this.controlDir.control;
        if (!control) {
            return;
        }
        this.setGlobalHandlers();
        this.injectGoogleRecaptchaScript();
        /**
         * Only one validator (specifically our one below) makes sense for this Control, so we just overwrite
         * whatever was previously set
         */
        control.setValidators((ctrl) => {
            if (typeof this.activeRecaptchaId === 'undefined' || !this.recaptchaAPI) {
                return {
                    invalidRecaptcha: true,
                };
            }
            const /** @type {?} */ recaptchaResponse = this.recaptchaAPI.getResponse(this.activeRecaptchaId);
            if (!recaptchaResponse) {
                return {
                    invalidRecaptcha: true,
                };
            }
            return null;
        });
        control.updateValueAndValidity();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsetGlobalHandlers();
    }
    /**
     * There is currently no way to programmatically set the value of
     * a visible reCAPTCHA, so this is a noop
     * @param {?} val
     * @return {?}
     */
    writeValue(val) { }
    /**
     * Required method of the ControlValueAccessor interface, we register the callback
     * function that should be called whenever the model value changes
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Required method of the ControlValueAccessor interface, we register the callback
     * function that should be called whenever the control is "touched"
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Unfortunately we have to register a global handler for the onload
     * event from the recaptcha lib
     * @return {?}
     */
    setGlobalHandlers() {
        ((window))[this.GLOBAL_ON_LOAD_CALLBACK_NAME] = () => {
            /**
             * Make it easier to add type information to, and work with, the recaptcha lib
             * by storing a single reference to it
             */
            this.recaptchaAPI = ((window)).grecaptcha;
            this.renderRecaptcha();
        };
    }
    /**
     * @return {?}
     */
    unsetGlobalHandlers() {
        delete ((window))[this.GLOBAL_ON_LOAD_CALLBACK_NAME];
    }
    /**
     * Create a <script> element and inject it into the page in order
     * to load the recaptcha lib. Emit load or error events from the relevant
     * Outputs to the component
     * @return {?}
     */
    injectGoogleRecaptchaScript() {
        this.scriptLoaderService.injectAndLoadScript({
            scriptSrc: `https://www.google.com/recaptcha/api.js?render=explicit&onload=${this.GLOBAL_ON_LOAD_CALLBACK_NAME}`,
            onLoadCallback: () => this.scriptLoad.emit(),
            onErrorCallback: err => this.scriptError.emit(err),
        });
    }
    /**
     * Use the recaptcha lib to manually render a recaptcha widget with the ViewChild
     * container element, passing the relevant callbacks and configuration options
     * @return {?}
     */
    renderRecaptcha() {
        if (!this.recaptchaAPI) {
            return;
        }
        this.activeRecaptchaId = this.recaptchaAPI.render(this.container.nativeElement, {
            sitekey: this.recaptchaConfig.siteKey,
            callback: this.onRecaptchaValidCallback.bind(this),
            'expired-callback': this.onRecaptchaExpiredCallback.bind(this),
        });
    }
    /**
     * Handler which will be registered with the recaptcha lib to be called
     * whenever it has a valid status
     * @return {?}
     */
    onRecaptchaValidCallback() {
        this.zone.run(() => {
            this.onChange(true);
            this.onTouched();
            this.cd.markForCheck();
        });
    }
    /**
     * Handler which will be registered with the recaptcha lib to be called
     * whenever its valid status expires
     * @return {?}
     */
    onRecaptchaExpiredCallback() {
        this.zone.run(() => {
            this.onChange(false);
            this.cd.markForCheck();
        });
    }
}
RecaptchaComponent.ɵfac = function RecaptchaComponent_Factory(t) { return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RECAPTCHA_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RecaptchaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecaptchaComponent, selectors: [["recaptcha"]], viewQuery: function RecaptchaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, outputs: { scriptLoad: "scriptLoad", scriptError: "scriptError" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ScriptLoaderService])], decls: 2, vars: 0, consts: [[1, "angular-google-recaptcha-container"], ["container", ""]], template: function RecaptchaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2, changeDetection: 0 });
/**
 * @nocollapse
 */
RecaptchaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [RECAPTCHA_CONFIG,] },] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    { type: ScriptLoaderService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
];
RecaptchaComponent.propDecorators = {
    'scriptLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'scriptError': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'recaptcha',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="angular-google-recaptcha-container" #container></div>
  `,
                providers: [ScriptLoaderService]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [RECAPTCHA_CONFIG]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: ScriptLoaderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { scriptLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scriptError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();

class RecaptchaModule {
    /**
     * @param {?} recaptchaConfig
     * @return {?}
     */
    static forRoot(recaptchaConfig) {
        return {
            ngModule: RecaptchaModule,
            providers: [{ provide: RECAPTCHA_CONFIG, useValue: recaptchaConfig }],
        };
    }
}
RecaptchaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecaptchaModule });
RecaptchaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecaptchaModule_Factory(t) { return new (t || RecaptchaModule)(); } });
/**
 * @nocollapse
 */
RecaptchaModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecaptchaModule, { declarations: [RecaptchaComponent], exports: [RecaptchaComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [RecaptchaComponent],
                exports: [RecaptchaComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtcmVjYXB0Y2hhLmpzIiwic291cmNlcyI6WyJhbmd1bGFyLWdvb2dsZS1yZWNhcHRjaGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDLHdIQUdDOzs7Ozs7OzBCQUk0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUo3QyxnREFVQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFlQTs7Ozs7Ozs7Ozs7Ozs7O0NBYUQseUlBTUM7Ozs7Ozs7Ozs7OzswQkFJd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBOZ01vZHVsZSwgTmdab25lLCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3QgUkVDQVBUQ0hBX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignYW5ndWxhci1nb29nbGUtcmVjYXB0Y2hhIHNpdGVLZXknKTtcblxuY2xhc3MgU2NyaXB0TG9hZGVyU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGluamVjdEFuZExvYWRTY3JpcHQoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBjb25maWcuc2NyaXB0U3JjO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gY29uZmlnLm9uTG9hZENhbGxiYWNrKCk7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZXJyID0+IGNvbmZpZy5vbkVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbn1cblNjcmlwdExvYWRlclNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cblNjcmlwdExvYWRlclNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcbmNsYXNzIFJlY2FwdGNoYUNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZWNhcHRjaGFDb25maWdcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xEaXJcbiAgICAgKiBAcGFyYW0gez99IHNjcmlwdExvYWRlclNlcnZpY2VcbiAgICAgKiBAcGFyYW0gez99IHpvbmVcbiAgICAgKiBAcGFyYW0gez99IGNkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVjYXB0Y2hhQ29uZmlnLCBjb250cm9sRGlyLCBzY3JpcHRMb2FkZXJTZXJ2aWNlLCB6b25lLCBjZCkge1xuICAgICAgICB0aGlzLnJlY2FwdGNoYUNvbmZpZyA9IHJlY2FwdGNoYUNvbmZpZztcbiAgICAgICAgdGhpcy5jb250cm9sRGlyID0gY29udHJvbERpcjtcbiAgICAgICAgdGhpcy5zY3JpcHRMb2FkZXJTZXJ2aWNlID0gc2NyaXB0TG9hZGVyU2VydmljZTtcbiAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgdGhpcy5jZCA9IGNkO1xuICAgICAgICB0aGlzLnNjcmlwdExvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc2NyaXB0RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuR0xPQkFMX09OX0xPQURfQ0FMTEJBQ0tfTkFNRSA9ICdfX19yZWNhcHRjaGFPbkxvYWRDYWxsYmFja19fXyc7XG4gICAgICAgIHRoaXMuY29udHJvbERpci52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sID0gdGhpcy5jb250cm9sRGlyLmNvbnRyb2w7XG4gICAgICAgIGlmICghY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0R2xvYmFsSGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5pbmplY3RHb29nbGVSZWNhcHRjaGFTY3JpcHQoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgb25lIHZhbGlkYXRvciAoc3BlY2lmaWNhbGx5IG91ciBvbmUgYmVsb3cpIG1ha2VzIHNlbnNlIGZvciB0aGlzIENvbnRyb2wsIHNvIHdlIGp1c3Qgb3ZlcndyaXRlXG4gICAgICAgICAqIHdoYXRldmVyIHdhcyBwcmV2aW91c2x5IHNldFxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbC5zZXRWYWxpZGF0b3JzKChjdHJsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWN0aXZlUmVjYXB0Y2hhSWQgPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLnJlY2FwdGNoYUFQSSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRSZWNhcHRjaGE6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcmVjYXB0Y2hhUmVzcG9uc2UgPSB0aGlzLnJlY2FwdGNoYUFQSS5nZXRSZXNwb25zZSh0aGlzLmFjdGl2ZVJlY2FwdGNoYUlkKTtcbiAgICAgICAgICAgIGlmICghcmVjYXB0Y2hhUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkUmVjYXB0Y2hhOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuc2V0R2xvYmFsSGFuZGxlcnMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlcmUgaXMgY3VycmVudGx5IG5vIHdheSB0byBwcm9ncmFtbWF0aWNhbGx5IHNldCB0aGUgdmFsdWUgb2ZcbiAgICAgKiBhIHZpc2libGUgcmVDQVBUQ0hBLCBzbyB0aGlzIGlzIGEgbm9vcFxuICAgICAqIEBwYXJhbSB7P30gdmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICB3cml0ZVZhbHVlKHZhbCkgeyB9XG4gICAgLyoqXG4gICAgICogUmVxdWlyZWQgbWV0aG9kIG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UsIHdlIHJlZ2lzdGVyIHRoZSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlc1xuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1aXJlZCBtZXRob2Qgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSwgd2UgcmVnaXN0ZXIgdGhlIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb250cm9sIGlzIFwidG91Y2hlZFwiXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5mb3J0dW5hdGVseSB3ZSBoYXZlIHRvIHJlZ2lzdGVyIGEgZ2xvYmFsIGhhbmRsZXIgZm9yIHRoZSBvbmxvYWRcbiAgICAgKiBldmVudCBmcm9tIHRoZSByZWNhcHRjaGEgbGliXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBzZXRHbG9iYWxIYW5kbGVycygpIHtcbiAgICAgICAgKCh3aW5kb3cpKVt0aGlzLkdMT0JBTF9PTl9MT0FEX0NBTExCQUNLX05BTUVdID0gKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYWtlIGl0IGVhc2llciB0byBhZGQgdHlwZSBpbmZvcm1hdGlvbiB0bywgYW5kIHdvcmsgd2l0aCwgdGhlIHJlY2FwdGNoYSBsaWJcbiAgICAgICAgICAgICAqIGJ5IHN0b3JpbmcgYSBzaW5nbGUgcmVmZXJlbmNlIHRvIGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVjYXB0Y2hhQVBJID0gKCh3aW5kb3cpKS5ncmVjYXB0Y2hhO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWNhcHRjaGEoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICB1bnNldEdsb2JhbEhhbmRsZXJzKCkge1xuICAgICAgICBkZWxldGUgKCh3aW5kb3cpKVt0aGlzLkdMT0JBTF9PTl9MT0FEX0NBTExCQUNLX05BTUVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50IGFuZCBpbmplY3QgaXQgaW50byB0aGUgcGFnZSBpbiBvcmRlclxuICAgICAqIHRvIGxvYWQgdGhlIHJlY2FwdGNoYSBsaWIuIEVtaXQgbG9hZCBvciBlcnJvciBldmVudHMgZnJvbSB0aGUgcmVsZXZhbnRcbiAgICAgKiBPdXRwdXRzIHRvIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGluamVjdEdvb2dsZVJlY2FwdGNoYVNjcmlwdCgpIHtcbiAgICAgICAgdGhpcy5zY3JpcHRMb2FkZXJTZXJ2aWNlLmluamVjdEFuZExvYWRTY3JpcHQoe1xuICAgICAgICAgICAgc2NyaXB0U3JjOiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP3JlbmRlcj1leHBsaWNpdCZvbmxvYWQ9JHt0aGlzLkdMT0JBTF9PTl9MT0FEX0NBTExCQUNLX05BTUV9YCxcbiAgICAgICAgICAgIG9uTG9hZENhbGxiYWNrOiAoKSA9PiB0aGlzLnNjcmlwdExvYWQuZW1pdCgpLFxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrOiBlcnIgPT4gdGhpcy5zY3JpcHRFcnJvci5lbWl0KGVyciksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIHJlY2FwdGNoYSBsaWIgdG8gbWFudWFsbHkgcmVuZGVyIGEgcmVjYXB0Y2hhIHdpZGdldCB3aXRoIHRoZSBWaWV3Q2hpbGRcbiAgICAgKiBjb250YWluZXIgZWxlbWVudCwgcGFzc2luZyB0aGUgcmVsZXZhbnQgY2FsbGJhY2tzIGFuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHJlbmRlclJlY2FwdGNoYSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY2FwdGNoYUFQSSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlUmVjYXB0Y2hhSWQgPSB0aGlzLnJlY2FwdGNoYUFQSS5yZW5kZXIodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgc2l0ZWtleTogdGhpcy5yZWNhcHRjaGFDb25maWcuc2l0ZUtleSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLm9uUmVjYXB0Y2hhVmFsaWRDYWxsYmFjay5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2V4cGlyZWQtY2FsbGJhY2snOiB0aGlzLm9uUmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrLmJpbmQodGhpcyksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHdoaWNoIHdpbGwgYmUgcmVnaXN0ZXJlZCB3aXRoIHRoZSByZWNhcHRjaGEgbGliIHRvIGJlIGNhbGxlZFxuICAgICAqIHdoZW5ldmVyIGl0IGhhcyBhIHZhbGlkIHN0YXR1c1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgb25SZWNhcHRjaGFWYWxpZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgd2hpY2ggd2lsbCBiZSByZWdpc3RlcmVkIHdpdGggdGhlIHJlY2FwdGNoYSBsaWIgdG8gYmUgY2FsbGVkXG4gICAgICogd2hlbmV2ZXIgaXRzIHZhbGlkIHN0YXR1cyBleHBpcmVzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBvblJlY2FwdGNoYUV4cGlyZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblJlY2FwdGNoYUNvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAncmVjYXB0Y2hhJyxcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWdvb2dsZS1yZWNhcHRjaGEtY29udGFpbmVyXCIgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtTY3JpcHRMb2FkZXJTZXJ2aWNlXSxcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuUmVjYXB0Y2hhQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtSRUNBUFRDSEFfQ09ORklHLF0gfSxdIH0sXG4gICAgeyB0eXBlOiBOZ0NvbnRyb2wsIGRlY29yYXRvcnM6IFt7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBPcHRpb25hbCB9LF0gfSxcbiAgICB7IHR5cGU6IFNjcmlwdExvYWRlclNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiwgfSxcbl07XG5SZWNhcHRjaGFDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ3NjcmlwdExvYWQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdzY3JpcHRFcnJvcic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2NvbnRhaW5lcic6IFt7IHR5cGU6IFZpZXdDaGlsZCwgYXJnczogWydjb250YWluZXInLF0gfSxdLFxufTtcblxuY2xhc3MgUmVjYXB0Y2hhTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlY2FwdGNoYUNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgc3RhdGljIGZvclJvb3QocmVjYXB0Y2hhQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUmVjYXB0Y2hhTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBSRUNBUFRDSEFfQ09ORklHLCB1c2VWYWx1ZTogcmVjYXB0Y2hhQ29uZmlnIH1dLFxuICAgICAgICB9O1xuICAgIH1cbn1cblJlY2FwdGNoYU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbUmVjYXB0Y2hhQ29tcG9uZW50XSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbUmVjYXB0Y2hhQ29tcG9uZW50XSxcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuUmVjYXB0Y2hhTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW107XG5cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0IHsgUmVjYXB0Y2hhTW9kdWxlLCBTY3JpcHRMb2FkZXJTZXJ2aWNlLCBSZWNhcHRjaGFDb21wb25lbnQsIFJFQ0FQVENIQV9DT05GSUcgfTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/ts-md5/dist/md5.js":
/*!*****************************************!*\
  !*** ./node_modules/ts-md5/dist/md5.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = /** @class */ (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "./src/app/@core/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/@core/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    get(hash, observe = 'body', reportProgress = false) {
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
        return this.httpClient.get(`/api/auth/${hash}`, {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _core_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@core/layouts/auth-layout/auth-layout.component */ "./src/app/@core/layouts/auth-layout/auth-layout.component.ts");






const routes = [
    {
        path: '', component: _core_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], children: [
            {
                path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }
        ]
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-google-recaptcha */ "./node_modules/angular-google-recaptcha/__ivy_ngcc__/angular-google-recaptcha.js");









class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
            angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot({
                siteKey: '6LcYqcEUAAAAAAOjgEZHR7UTEf9tQvuUsiPCifUb',
            }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                    angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot({
                        siteKey: '6LcYqcEUAAAAAAOjgEZHR7UTEf9tQvuUsiPCifUb',
                    }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@core/services/auth.service */ "./src/app/@core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-google-recaptcha */ "./node_modules/angular-google-recaptcha/__ivy_ngcc__/angular-google-recaptcha.js");








const _c0 = function () { return { standalone: true }; };
class LoginComponent {
    // https://bootsnipp.com/snippets/dldxB
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.auth = { password: '' };
        this.showMessages = {};
        this.submitted = false;
    }
    ngOnInit() {
    }
    login() {
        if (this.auth.password.length === 0) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1___default()('Укажите пароль!', 'error');
            return;
        }
        if (!this.myRecaptcha) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1___default()('Пройдите reCaptcha', 'error');
            return;
        }
        const md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"]();
        const authToken = md5.appendStr(this.auth.password).end().toString();
        this.authService.get(authToken).subscribe(result => {
            console.log(result);
            if (result) {
                this.router.navigate(['configuration']).then();
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1___default()('Вход успешно выполнен');
                localStorage.setItem('authToken', authToken);
            }
            else {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1___default()('Пароль неверный!', 'error');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 4, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "assets/integration-background-image.png", "id", "icon", "alt", "User Icon"], [3, "ngSubmit"], ["type", "password", "id", "password", "name", "login", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], [1, "center-block"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", "value", "\u0412\u0445\u043E\u0434", 1, "fadeIn", "fourth"], ["id", "formFooter"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.auth.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "recaptcha", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_recaptcha_ngModelChange_7_listener($event) { return ctx.myRecaptcha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auth.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myRecaptcha)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  background-color: #56baed;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\na[_ngcontent-%COMP%] {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n#formContent[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n#formFooter[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\nh2.inactive[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\nh2.active[_ngcontent-%COMP%] {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover {\n  background-color: #39ace7;\n}\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\ninput[type=text][_ngcontent-%COMP%], .center-block[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\ninput[type=password][_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\ninput[type=text][_ngcontent-%COMP%]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\ninput[type=text][_ngcontent-%COMP%]:placeholder {\n  color: #cccccc;\n}\ninput[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\ninput[type=password][_ngcontent-%COMP%]:placeholder {\n  color: #cccccc;\n}\n\n\n.fadeInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.fadeIn.first[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.fadeIn.second[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n.fadeIn.third[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n.fadeIn.fourth[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.underlineHover[_ngcontent-%COMP%]:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover[_ngcontent-%COMP%]:hover {\n  color: #0d0d0d;\n}\n.underlineHover[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n#icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ2VyYXNpbS9Qcm9qZWN0cy9PcGVyd2FyZS9XZWJGcm9udGVkL09wZXJ3YXJlL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxVQUFBO0FBRUE7RUFDRSx5QkFBQTtBQ0RGO0FESUE7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNERjtBRE1BLGNBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDSkY7QURPQTtFQUVFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsNENBQUE7RUFDQSxrQkFBQTtBQ0pGO0FET0E7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7QUNKRjtBRFNBLFNBQUE7QUFFQTtFQUNFLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDUEY7QURZQSxtQkFBQTtBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsaURBQUE7RUFFQSw4QkFBQTtFQUNBLDBCQUFBO0VBS0EsZ0NBQUE7QUNWRjtBRGFBO0VBQ0UseUJBQUE7QUNWRjtBRGFBO0VBS0Usc0JBQUE7QUNWRjtBRGFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFLQSxnQ0FBQTtFQUVBLDhCQUFBO0FDVkY7QURZQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBS0EsZ0NBQUE7RUFFQSw4QkFBQTtBQ1RGO0FEWUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FDVEY7QURZQTtFQUNFLGNBQUE7QUNURjtBRFdBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0FDUkY7QURhQSxlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1hGO0FEY0E7RUFDRTtJQUNFLFVBQUE7SUFFQSxtQ0FBQTtFQ1hGO0VEYUE7SUFDRSxVQUFBO0lBRUEsZUFBQTtFQ1hGO0FBQ0Y7QURjQTtFQUNFO0lBQ0UsVUFBQTtJQUVBLG1DQUFBO0VDWkY7RURjQTtJQUNFLFVBQUE7SUFFQSxlQUFBO0VDWkY7QUFDRjtBRGVBLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFBO0VDWGpDO0VEVzhDO0lBQUssVUFBQTtFQ1JuRDtBQUNGO0FEU0E7RUFBb0I7SUFBTyxVQUFBO0VDR3pCO0VESHNDO0lBQUssVUFBQTtFQ00zQztBQUNGO0FETEE7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUVBLHFDQUFBO0VBRUEsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLHNCQUFBO0FDS0Y7QURGQTtFQUNFLDZCQUFBO0VBRUEscUJBQUE7QUNLRjtBREZBO0VBQ0UsNkJBQUE7RUFFQSxxQkFBQTtBQ0tGO0FERkE7RUFDRSw2QkFBQTtFQUVBLHFCQUFBO0FDS0Y7QURGQTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNLRjtBREZBLGtDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDS0Y7QURGQTtFQUNFLGNBQUE7QUNLRjtBREZBO0VBQ0UsV0FBQTtBQ0tGO0FEQUEsV0FBQTtBQUVBO0VBQ0UsYUFBQTtBQ0VGO0FEQ0E7RUFDRSxVQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTJiYWRkO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBTVFJVQ1RVUkUgKi9cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5oMi5hY3RpdmUge1xuICBjb2xvcjogIzBkMGQwZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIC5jZW50ZXItYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBBTklNQVRJT05TICovXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbi5mYWRlSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cblxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6MDtcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICBhbmltYXRpb24tZHVyYXRpb246MXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5zZWNvbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi50aGlyZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLmZvdXJ0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4vKiBPVEhFUlMgKi9cblxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpY29uIHtcbiAgd2lkdGg6NjAlO1xufVxuIiwiLyogQkFTSUMgKi9cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgY29sb3I6ICM5MmJhZGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4vKiBTVFJVQ1RVUkUgKi9cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jZm9ybUNvbnRlbnQge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuLyogVEFCUyAqL1xuaDIuaW5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaDIuYWN0aXZlIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCAuY2VudGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLyogQU5JTUFUSU9OUyAqL1xuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE9USEVSUyAqL1xuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpY29uIHtcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map