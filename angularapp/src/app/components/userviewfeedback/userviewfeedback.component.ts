import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {
loader=true;

feedbacks:Feedback[]=[];
showModal=false;
feedbackId:number;
userId:number;

constructor(private service:FeedbackService) { }

ngOnInit(): void {
  // this.userId=this.activeLink.snapshot.params["id"];
  // this.getAllFeedbacksByUserId(this.userId);
  this.getAllFeedback();
}



// public getAllFeedbacksByUserId(userId:number){
//  this.service.getAllFeedbacksByUserId(userId).subscribe(data=>this.feedbacks=data);

// }

public getAllFeedback(){
  this.service.getFeedbacks().subscribe(data=>{
    this.feedbacks=data
    this.loader=false;
  });
}

onSubmit(id:number) {
  this.feedbackId=id;
    // this.showModal=true;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteFeedback(this.feedbackId).subscribe(data=>{
          this.showModal=false;
          
          this.getAllFeedback();
        
        
         });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
}

closeModal() { // Add this method
  this.showModal = false; // Hide the modal
}


deleteFeedback() {
  console.log("feedback Id ==>"+this.feedbackId);


}
}