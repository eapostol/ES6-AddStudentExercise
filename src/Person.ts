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

    constructor(fName:String, lName:String, ageYear:Number, occ:String){
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
