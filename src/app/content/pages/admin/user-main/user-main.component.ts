import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service'

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor( private patientService : UserService) { }

  ngOnInit(): void {
    this.patientService.fetchListUsers().subscribe (
      data => console.log(data)
    )
  }

  postData () {
    this.patientService.addDataUser({
      age: 25,
      height: 172,
      income: 15000
    }).subscribe(data => console.log(data))
  }

  deleteData() {
    this.patientService.deleteDataUsers().subscribe(
      data => console.log(data)
    )
  }

}
