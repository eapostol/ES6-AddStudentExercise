/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */

import { Being } from './Being'
export class Person implements Being {

    firstName : String;
    lastName  : String;
    age       : Number;
    occupation: String;
    // wakeUp    : Function;
    // goToSleep : Function;
    // eatFood   : Function;

    constructor(public fName:String, public lName:String,
    public ageYear:Number, public occ:String){
        this.firstName = fName;
        this.lastName = lName;
        this.age = ageYear;
        this.occupation = occ;
    }

    goToSleep() {

    }

    wakeUp() {

    }

    eatFood() {

    }

}
