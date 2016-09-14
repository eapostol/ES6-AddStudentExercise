import {BaseClass} from "./BaseClass";
import {Student} from "./Student";
/**
 * Created by Edward_J_Apostol on 2016-09-13.
 */
export class WebDevClass extends BaseClass{

    isCourseActive:Boolean;
    studentClassList:Array<Student>;


    constructor( crsName:String,  crsType:String, crsCode:String, crsDesc: String )
    {
        super(crsName,crsType,crsCode,crsDesc);
        this.isCourseActive = false;
        this.studentClassList = [];
    }



}
