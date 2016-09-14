(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
"use strict";
var Person = (function () {
    // wakeUp    : Function;
    // goToSleep : Function;
    // eatFood   : Function;
    function Person(fName, lName, ageYear, occ) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = ageYear;
        this.occupation = occ;
    }
    Person.prototype.goToSleep = function () {
    };
    Person.prototype.wakeUp = function () {
    };
    Person.prototype.eatFood = function () {
    };
    return Person;
}());
exports.Person = Person;

},{}],3:[function(require,module,exports){
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

},{"./Person":2}],4:[function(require,module,exports){
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

},{"./BaseClass":1}],5:[function(require,module,exports){
"use strict";
var WebDevClass_1 = require("./WebDevClass");
var Student_1 = require("./Student");
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
var RedAcademy = (function () {
    function RedAcademy() {
        this.classes = [];
        this.studentBody = [];
    }
    return RedAcademy;
}());
exports.__esModule = true;
exports["default"] = RedAcademy;
var schoolB = new RedAcademy();
var courseB = new WebDevClass_1.WebDevClass("Web Developer", "Programming", "001", "Web Development Program");
// addForm class
var theForm = document.getElementById("addStudentForm");
var fNameField = document.getElementById("firstName");
var lNameField = document.getElementById("lastName");
var ageField = document.getElementById("age");
var occupationField = document.getElementById("occupation");
var submitBtn = document.getElementById("submit");
var idField = document.getElementById("id");
var studentIDSearchField = document.getElementById("studentIDSearchField");
var searchBtn = document.getElementById("searchSubmitBtn");
var studentIDToRemoveField = document.getElementById("studentIDToRemoveField");
var removeStudentBtn = document.getElementById("removeStudentBtn");
var firstNameValue = "", lastNameValue = "", age = 0, occupation = "nerf herder", id = "", searchFieldValue = "", removeStudentFieldValue = "";
var onSubmitForm = function (e) {
    // <objectType>varName is an example of casting in Javascript/ ES6
    // console.log(fNameField.value);
    firstNameValue = fNameField.value;
    console.log(firstNameValue);
    lastNameValue = lNameField.value;
    age = parseInt(ageField.value);
    occupation = occupationField.value;
    id = idField.value;
    // create a new student
    var newStudent = new Student_1.Student(firstNameValue, lastNameValue, age, occupation, id);
    // add a new student to webdevclass
    newStudent.registeredClass = courseB;
    courseB.addStudent(newStudent);
    console.log(courseB.studentClassList);
    // update the ID field
    var newID = parseInt(idField.value) + 1;
    idField.value = newID.toString();
};
var onSubmitSearchForm = function (e) {
    console.log("onSubmitSearchForm");
    searchFieldValue = studentIDSearchField.value;
    var studentList = courseB.studentClassList;
    if (searchFieldValue != "" || searchFieldValue != null) {
        // loop through students array
        for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
            var student = studentList_1[_i];
            var currentStudent = student;
            if (currentStudent.id == searchFieldValue) {
                console.log("found match : \n");
                console.log(student);
            }
        }
    }
};
var onSubmitRemoveForm = function (e) {
    removeStudentFieldValue = studentIDToRemoveField.value;
    var studentList = courseB.studentClassList;
    if (removeStudentFieldValue != "" || removeStudentFieldValue != null) {
        // loop through students array
        for (var i = 0; i <= studentList.length - 1; i++) {
            var currentStudent = studentList[i];
            if (currentStudent.id == removeStudentFieldValue) {
                console.log("found a student I can delete");
                console.log(currentStudent);
                // delete the student
                var removedItem = studentList.splice(i, 1);
                console.log("deleted item: \n " + removedItem);
                break;
            }
            console.log("searching...");
        }
        console.log("students left: \n" + studentList);
    }
};
submitBtn.addEventListener("click", onSubmitForm);
searchBtn.addEventListener("click", onSubmitSearchForm);
removeStudentBtn.addEventListener("click", onSubmitRemoveForm);
schoolB.classes.push(courseB);

},{"./Student":3,"./WebDevClass":4}]},{},[5]);
