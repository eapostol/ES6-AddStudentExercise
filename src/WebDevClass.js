"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseClass_1 = require("./BaseClass");
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
var WebDevClass = (function (_super) {
    __extends(WebDevClass, _super);
    function WebDevClass(crsName, crsType, crsCode, crsDesc) {
        _super.call(this, crsName, crsType, crsCode, crsDesc);
        this.isCourseActive = false;
        this.studentClassList = [];
    }
    return WebDevClass;
}(BaseClass_1.BaseClass));
exports.WebDevClass = WebDevClass;
