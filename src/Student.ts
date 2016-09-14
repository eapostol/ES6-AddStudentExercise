/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
import {Person} from "./Person";
import {BaseClass} from "./BaseClass";

export class Student extends Person {

    registeredClass : BaseClass;
    id              : String;

    constructor(public fName:String, public lName:String,
                public ageInYears:Number, public occ:String,
                public studentID:String){
        super(fName,lName,ageInYears,occ);
        this.registeredClass = null;
        this.id = studentID;
    }
}
