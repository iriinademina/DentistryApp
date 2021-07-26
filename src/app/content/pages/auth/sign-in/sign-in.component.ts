import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private _router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    try {
      const user = await this.authService.signIn(
        this.signInForm.value.email,
        this.signInForm.value.password,
      );
      this.userService
        .fetchUserById(user.attributes.sub)
        .pipe(first())
        .subscribe((data) => {
          this._router.navigate(['/']);
        });
    } catch (err) {
      console.log(err);
    }
  }
}
