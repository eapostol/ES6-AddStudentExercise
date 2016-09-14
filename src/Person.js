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
