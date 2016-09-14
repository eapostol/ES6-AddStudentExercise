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
