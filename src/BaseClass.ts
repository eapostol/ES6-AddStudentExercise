/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */

import { InstructionContract } from './InstructionContract'
import {Student} from "./Student";

export class BaseClass implements InstructionContract {
    courseName: String;
    courseType: String;
    courseCode: String;
    courseDescription: String;
    studentClassList:Array<Student>;

    constructor(public crsName:String, public crsType:String,
    public crsCode:String, crsDesc: String ){
        this.courseName = crsName;
        this.courseType = crsType;
        this.courseCode = crsCode;
        this.courseDescription = crsDesc;
        this.studentClassList = [];
    }

    addStudent(student:Student){
        this.studentClassList.push(student);
    }


}
