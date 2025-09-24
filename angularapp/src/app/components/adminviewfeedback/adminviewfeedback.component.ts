import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-adminviewfeedback',
  templateUrl: './adminviewfeedback.component.html',
  styleUrls: ['./adminviewfeedback.component.css']
})
export class AdminviewfeedbackComponent implements OnInit {
loader=true;
  feedbacks:Feedback[]=[];
showModal=false;
user:User;


constructor(private service:FeedbackService) { }

ngOnInit(): void {
  this.getAllFeedbacks();
}



public getAllFeedbacks(){
 this.service.getFeedbacks().subscribe(data=>{
  this.feedbacks=data
  this.loader=false;
 });

}

onSubmit(id:string) {
  this.service.getUserDetailByUserId(id).subscribe(data=>this.user=data);
    this.showModal=true;
}

closeModal() { // Add this method
  this.showModal = false; // Hide the modal
}


}
