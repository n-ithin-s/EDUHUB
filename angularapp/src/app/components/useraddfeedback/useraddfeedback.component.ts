import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UseraddfeedbackComponent implements OnInit {
  feedback:string;
  showModal=false;
  userId:string;
  

  newFeed:any=null;
  constructor(private service:FeedbackService,private rt:Router){ } 

  ngOnInit(): void {

    // this.feedbackUser=JSON.parse(localStorage.getItem('currentUser'));
    this.userId=localStorage.getItem('userId');
    //  this.service.getUserDetailByUserId(this.userId).subscribe(data=>this.feedbackUser=data);
    // console.log(this.feedbackUser);
    // console.log(this.userId);
    // this.sharedService.currentUserId.subscribe(userId => this.userId = userId);
  }


  onSubmit() {
   
      let sysdate:Date=new Date();
      let dp=new DatePipe("en-US");
      let myDatestr=dp.transform(sysdate,"yyyy-MM-dd");
      
      // let dateOnly = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
      // console.log(dateOnly);

      this.newFeed={feedbackText:this.feedback,date:myDatestr};
    console.log("new feed before post "+ JSON.stringify(this.newFeed))
      this.service.sendFeedback(this.newFeed).subscribe(data => {
        console.log("new feed "+JSON.stringify(data));

        this.service.updateFeedbackWithUser(this.userId,data).subscribe(val=>{
          console.log("updating feedback with user "+JSON.stringify(val))
        })

      });
      Swal.fire({
        text: "Feedback have been added successfully!",
        icon: "success"
      });
      

      this.feedback="";
      // this.showModal = true;
    
  }

  closeModal() { // Add this method
    this.showModal = false; // Hide the modal
    this.rt.navigate(['/userviewfeedback']);
  }
}


