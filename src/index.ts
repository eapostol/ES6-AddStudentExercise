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
schoolB.classes.push(courseB);

// addForm class
let theForm = document.getElementById("addStudentForm");
let fNameField = document.getElementById("firstName");
let lNameField = document.getElementById("lastName");
let submitBtn = document.getElementById("submit");

let onSubmitForm = (e:Event) => {
    fNameField = document.getElementById("firstName");
    console.log("e = " + e);
    console.log("first Name = " +
        fNameField.getAttribute("value"));

};

submitBtn.addEventListener("click",onSubmitForm);





