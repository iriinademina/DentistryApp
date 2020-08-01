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
// import { UploadFileComponent } from './shared/components/upload-file/upload-file.component'
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent
   
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

