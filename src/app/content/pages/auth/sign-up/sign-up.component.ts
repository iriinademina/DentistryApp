import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public auth: FormGroup;
  public message: string;

  constructor(
    private _router: Router,
    private authService: AuthService,
    private amp: AmplifyService
  ) { }

  ngOnInit(): void {
    this.auth = new FormGroup({
      userName: new FormControl ( null,
        [Validators.required,
         Validators.minLength(4)
        ]
      ),
      email : new FormControl(null,
        [Validators.email,
         Validators.required
        ]
      ),
      password : new FormControl(null,
         [Validators.required]
      ),
      confirmPassword : new FormControl(null,
        [Validators.required]
     ),
    })
  }

  onSubmit () {
    this.authService.signUp({
      username : this.auth.value.userName, 
      email : this.auth.value.email, 
      password: this.auth.value.password})
   .then (data => {
     console.log(data)
     this._router.navigate(["auth/confirm"])
   })
   .catch(error => console.log(error));
  }
 
}
