/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
import {Person} from "./Person";
import {BaseClass} from "./BaseClass";

export class Student extends Person {

    registeredClass : BaseClass;
    id              : String;

    constructor(fName:String, lName:String, ageInYears:Number, occ:String,
                studentID:String)
    {
        super(fName,lName,ageInYears,occ);
        this.registeredClass = null;
        this.id = studentID;
    }
}
