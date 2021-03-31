import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { UserService } from '../../../../services/user.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  userName: string;
  userName$ : Observable<string>;
  domain : string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userName = 'Irina'
    console.log('init user-main')
    this.userService.getUserAvatar().subscribe(
      data => {
        console.log('name',data)}
     
    )
  }

}
