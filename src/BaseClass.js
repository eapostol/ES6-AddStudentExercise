/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
"use strict";
var BaseClass = (function () {
    function BaseClass(crsName, crsType, crsCode, crsDesc) {
        this.crsName = crsName;
        this.crsType = crsType;
        this.crsCode = crsCode;
        this.courseName = crsName;
        this.courseType = crsType;
        this.courseCode = crsCode;
        this.courseDescription = crsDesc;
        this.studentClassList = [];
    }
    BaseClass.prototype.addStudent = function (student) {
        this.studentClassList.push(student);
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
