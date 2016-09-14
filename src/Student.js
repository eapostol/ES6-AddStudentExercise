"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
var Person_1 = require("./Person");
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName, ageInYears, occ, studentID) {
        _super.call(this, fName, lName, ageInYears, occ);
        this.registeredClass = null;
        this.id = studentID;
    }
    return Student;
}(Person_1.Person));
exports.Student = Student;
