/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
import {Person} from "./Person";
import {BaseClass} from "./BaseClass";

export class Student extends Person {

    registeredClass : BaseClass;
    id              : String;

    constructor(public fName:String, public lName:String,
                public dateOfBirth:Number, public occ:String){
        super(fName,lName,dateOfBirth,occ);
        this.registeredClass = null;
        this.id = "";
    }
}
