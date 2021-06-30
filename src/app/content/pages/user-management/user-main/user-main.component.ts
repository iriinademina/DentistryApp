import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  userName$ : Observable<string>;
  isInfoUser: boolean;
  userName: any;
 
  constructor(
    private userService: UserService,

  ) { 
    this.isInfoUser = false;
  }

  ngOnInit(): void {}
}
