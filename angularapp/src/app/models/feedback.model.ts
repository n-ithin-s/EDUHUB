import { User } from "./user.model";

export interface Feedback {
    feedbackId?:number;
    feedbackText?:string;
    date?:String;
    user?:User;
}
