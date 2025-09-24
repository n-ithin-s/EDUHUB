import { Course } from "./course.model";
import { User } from "./user.model";
export interface Enrollment {
    enrollmentId?:number;
    user?:User;
    course?:Course;
    enrollmentDate?:String;
    status?:string;
}
