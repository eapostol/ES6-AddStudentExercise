/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */

import { InstructionContract } from './InstructionContract'

export class BaseClass implements InstructionContract {
    courseName: String;
    courseType: String;
    courseCode: String;
    courseDescription: String;

    constructor(public crsName:String, public crsType:String,
    public crsCode:String, crsDesc: String ){
        this.courseName = crsName;
        this.courseType = crsType;
        this.courseCode = crsCode;
        this.courseDescription = crsDesc;
    }


}
