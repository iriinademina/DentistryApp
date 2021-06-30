import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs-compat/Observable';
import { map, switchMap, first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userId: string;
  userAvatar$: Observable<any>;
  userName: any;
  isAvatar: boolean;
  isUserName: boolean;
 
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private activatedroute:ActivatedRoute,
    private _router: Router,
  ) {
    this.isAvatar = false;
    this.isUserName = false;
  }

  ngOnInit(): void {
    this.userAvatar$ = this.userService.getUserAvatar().pipe(
      map((link) => {
          this.isAvatar = true;
          console.log('navbar link', link)
          return link;
        })
    );
    
    if (!this.isAvatar) {
      this.authService
        .getCurrentUserId()
        .pipe(
          switchMap((id) => {
            return this.userService.fetchUserById(id).pipe(
              map((user) => {
                return this.userService.getUserAvatar();
              }),
            );
          }),
        )
       .pipe(first())
       .subscribe((val) => console.log(val));
    }
  }

  goOnProfile() {
    this._router.navigate(['admin/profile'])
     
  }

  async logOut() {
    await this.authService.logOut();
    console.log('Success logout');
    this._router.navigate(['auth/sign-in']);
  }
}
