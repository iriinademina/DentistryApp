import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.css'],
})
export class ConfirmCodeComponent implements OnInit {
  public confirmUser: FormGroup;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.confirmUser = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.min(3)]),
    });
  }

  async confirmCode() {
    try {
      const confirmUserStatus = await Auth.confirmSignUp(
        this.confirmUser.value.userName,
        this.confirmUser.value.code,
      );
      if (confirmUserStatus === 'SUCCESS') {
        this._router.navigate(['auth/sign-in']);
      }
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
}
