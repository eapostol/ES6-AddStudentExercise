import {BaseClass} from "./BaseClass";
import {WebDevClass} from "./WebDevClass";
import {Student} from "./Student";
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */

export default class RedAcademy {

    classes:Array<BaseClass>;
    studentBody:Array<Student>;
    constructor(){
        this.classes = [];
        this.studentBody = [];
    }

}


let schoolB = new RedAcademy();
let courseB = new WebDevClass("Web Developer","Programming","001","Web Development Program");


// addForm class
let theForm = document.getElementById("addStudentForm");
let fNameField = document.getElementById("firstName");
let lNameField = document.getElementById("lastName");
let ageField = document.getElementById("age");
let occupationField = document.getElementById("occupation");
let submitBtn = document.getElementById("submit");
let idField = document.getElementById("id");
let studentIDSearchField = document.getElementById("studentIDSearchField");
let searchBtn = document.getElementById("searchSubmitBtn");

let firstNameValue = "", lastNameValue = "", age = 0,
    occupation = "nerf herder", id = "";

let onSubmitForm = (e:Event) => {
    // <objectType>varName is an example of casting in Javascript/ ES6

    // console.log(fNameField.value);
    firstNameValue = (<HTMLInputElement>fNameField).value;
    console.log(firstNameValue);
    lastNameValue = (<HTMLInputElement>lNameField).value;
    age = parseInt( (<HTMLInputElement>ageField).value );
    occupation = (<HTMLInputElement>occupationField).value;
    id =  (<HTMLInputElement>idField).value ;

    // create a new student
    let newStudent = new Student(firstNameValue,lastNameValue,age,occupation,id);
    // add a new student to webdevclass
    courseB.addStudent(newStudent);
    console.log(courseB.studentClassList);

};

let onSubmitSearchForm = (e:Event) => {

};

submitBtn.addEventListener("click",onSubmitForm);
searchBtn.addEventListener("click",onSubmitSearchForm);

schoolB.classes.push(courseB);