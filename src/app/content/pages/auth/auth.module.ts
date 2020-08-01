import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfirmCodeComponent } from './confirm-code/confirm-code.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)



@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmCodeComponent,
   
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, NgbModule,
  ],
  providers: []
})
export class AuthModule {}
