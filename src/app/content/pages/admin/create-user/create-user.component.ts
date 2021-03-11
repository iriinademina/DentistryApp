import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { environment } from '../../../../../environments/aws.environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  public auth: FormGroup;
 
  isEditing = false;
  isLoadingForm = false;
  selectedFiles: File;
  message: string ;
  domain : string;
  selectedDate : any;
  defaultImg: string

  constructor( private userService: UserService  ) {
    this.defaultImg = '../../../../../assets/images/avatar.jpg'
  }

  ngOnInit(): void {
    this.auth = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.email]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  upload() {
    let file = this.selectedFiles
    this.userService.uploadFile(file).subscribe(data => {
      console.log(data)
    })
  }
    
    getData() {
      console.log( this.selectedFiles)
     
      this.userService.getFile(
        this.selectedFiles
        ).subscribe(data => {
          console.log('file',data)
          if (data) {
            this.domain = data
            // this.domain = `${environment.domain}/${this.selectedFiles.name}`
          }   
        })
    }

    selectFile(event) {
       this.selectedFiles = event.target.files [0];
       console.log(this.selectedFiles)
    }

    appearCalendar() {
    
    }

    create () {
      console.log(this.auth.value)
    }
}
