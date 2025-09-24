import { Course } from "./course.model";

export interface Material {
    materialId?:number;
    title?:string;
    description?:string;
    url?:string;
    youTube?:string;
    contentType?:string;
    course?:Course;
    uploadDate?:string;
}
