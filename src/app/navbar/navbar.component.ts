import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

   async logOut() {
    await this.authService.logOut()
    console.log('Success logout')
    this._router.navigate (['auth/sign-in'])
  }

}
