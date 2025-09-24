import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router:Router,private loginservice:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
   
    let role:string=localStorage.getItem('role')
    if (!this.loginservice.getIsLoggedIn() ) {
      // alert('You are redirected to login Page');
     
      this.router.navigate(["/home"]);
      return false;
    }
  
       else 
       if(this.loginservice.getIsLoggedIn()==true && role=='EDUCATOR')
       { 
         let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();

        //  !currentUrl.match("/aaaaa**");
        //  console.log("URL => "+currentUrl);

          if( (currentUrl != "/adminnav") && (currentUrl != "/adminviewfeedback")  &&  (currentUrl != "/educatoraddcourse") && (currentUrl != "/educatoreditcourse") && (currentUrl != "/educatorviewcourse") && (currentUrl != "/enrollmentlist") && !currentUrl.startsWith("/educatoraddmaterial") && !currentUrl.startsWith("/educatoreditcourse") ){
            // if (currentUrl === "/educatoraddmaterial") {
            //     // Check if courseId is present in query parameters
            //     const courseIdFromParams = route.queryParams.courseid;
        
            //     if (courseIdFromParams) {
            //       return true; // User has access
            //     } else {
            //       // Redirect to error page if courseId is missing
            //       this.router.navigate(['/error']);
            //       return false;
            //     }
        //     // }
        //     if(currentUrl.match("/educatoraddmaterial**")){
        //     //     this.router.navigate(["/error"]);
        //     // return false;
        //     return true;
        //     }
           
            this.router.navigate(["/error-page"]);
            return false;
           
          }
         }
         else if(this.loginservice.getIsLoggedIn()==true && role=='STUDENT'){

          let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();
          if(  (currentUrl != "/mycourse")  && (currentUrl != "/studentviewcourse")  && (currentUrl != "/useraddfeedback") && (currentUrl != "/usernav") && (currentUrl != "/userviewfeedback") ){
           
            this.router.navigate(["/error-page"]);
            return false;
           }
         }
         
    return true;
  }
}
