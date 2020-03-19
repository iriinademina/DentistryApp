import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './content/main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular';


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
    AmplifyAngularModule
  ],
  providers: [ AmplifyService ],

  bootstrap: [AppComponent]
})
export class AppModule { }

