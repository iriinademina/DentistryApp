import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs-compat/Observable';
import { map, switchMap, first, tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userId: string;
  userAvatar$: Observable<string>;
  isRequestAvatar$: Observable<any>;
  isAvatar: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private _router: Router,
  ) {
    this.isAvatar = false;
  }

  ngOnInit(): void {
    this.userAvatar$ = this.userService.getUserAvatar().pipe(
      map((link) => {
        this.isAvatar = true;
        return link;
      }),
    );

    if (!this.isAvatar) {
      this.isRequestAvatar$ = this.authService.getCurrentUserId().pipe(
        switchMap((id) => {
          return this.userService
            .fetchUserById(id)
            .pipe(map((user) => user.avatarPath));
        }),
      );
    }
  }

  goOnProfile() {
    this._router.navigate(['user/profile']);
  }

  async logOut() {
    await this.authService.logOut();
    console.log('Success logout');
    this._router.navigate(['auth/sign-in']);
  }
}
