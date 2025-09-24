import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { EducatoraddcourseComponent } from './components/educatoraddcourse/educatoraddcourse.component';
import { EducatoraddmeterialComponent } from './components/educatoraddmeterial/educatoraddmeterial.component';
import { EducatoreditcourseComponent } from './components/educatoreditcourse/educatoreditcourse.component';
import { EducatorviewcourseComponent } from './components/educatorviewcourse/educatorviewcourse.component';
import { EnrollmentlistComponent } from './components/enrollmentlist/enrollmentlist.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentviewcourseComponent } from './components/studentviewcourse/studentviewcourse.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"adminnav",component:AdminnavComponent,canActivate:[AuthguardGuard]},
  {path:"adminviewfeedback",component:AdminviewfeedbackComponent,canActivate:[AuthguardGuard]},
  {path:"authguard",component:AuthguardComponent},
  {path:"educatoraddcourse",component:EducatoraddcourseComponent,canActivate:[AuthguardGuard]},
  {path:"educatoraddmaterial",component:EducatoraddmeterialComponent,canActivate:[AuthguardGuard]},
  {path:"educatoreditcourse",component:EducatoreditcourseComponent,canActivate:[AuthguardGuard]},
  {path:"educatorviewcourse",component:EducatorviewcourseComponent,canActivate:[AuthguardGuard]},
  {path:"enrollmentlist",component:EnrollmentlistComponent,canActivate:[AuthguardGuard]},
  {path:"error",component:ErrorComponent},
  {path:"home",component:HomeComponent},
  {path:"mycourse",component:MycourseComponent,canActivate:[AuthguardGuard]},
  {path:"navbar",component:NavbarComponent},
  {path:"studentviewcourse",component:StudentviewcourseComponent,canActivate:[AuthguardGuard]},
  {path:"useraddfeedback",component:UseraddfeedbackComponent,canActivate:[AuthguardGuard]},
  {path:"usernav",component:UsernavComponent,canActivate:[AuthguardGuard]},
  {path:"userviewfeedback",component:UserviewfeedbackComponent,canActivate:[AuthguardGuard]},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"mycourse/:id",component:MycourseComponent},
  {path:"error-page",component:ErrorPageComponent},
  { path: 'contact-us', component: ContactUsComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"**",redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
