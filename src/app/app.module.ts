import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './content/main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular';
import { AuthInterceptor }  from './helpers/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MainPageComponent } from './content/pages/main-page/main-page.component';
import { CreatePatientComponent } from './content/pages/patients/create-patient/create-patient.component';
import { DetailInfoPatientComponent } from './content/pages/patients/detail-info-patient/detail-info-patient.component';
import { PatientsComponent } from './content/pages/patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    MainPageComponent,
    CreatePatientComponent,
    DetailInfoPatientComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AmplifyAngularModule,
    SharedModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    AmplifyService ],

  bootstrap: [AppComponent]
})
export class AppModule { }

