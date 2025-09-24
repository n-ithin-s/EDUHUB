import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { LoginComponent } from './components/login/login.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentviewcourseComponent } from './components/studentviewcourse/studentviewcourse.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptor/authorization-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminnavComponent,
    AdminviewfeedbackComponent,
    AuthguardComponent,
    EducatoraddcourseComponent,
    EducatoraddmeterialComponent,
    EducatoreditcourseComponent,
    EducatorviewcourseComponent,
    EnrollmentlistComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    MycourseComponent,
    NavbarComponent,
    RegistrationComponent,
    StudentviewcourseComponent,
    UseraddfeedbackComponent,
    UsernavComponent,
    UserviewfeedbackComponent,
    LoaderComponent,
    ErrorPageComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthorizationInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
