import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { environment } from '../../../../../environments/aws.environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat/Observable';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
})
export class ProfileUserComponent implements OnInit {
  public userInfo: FormGroup;
  isEditing = false;
  isLoadingForm = false;
  selectedFiles: File;
  message: string;
  domain: string;
  selectedDate: any;
  defaultImg: string;
  userId: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.defaultImg = '../../../../../assets/images/avatar.jpg';
  }

  ngOnInit(): void {
    this.userInfo = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.email]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      speciality: new FormControl(null, [Validators.required]),
    });
    this.authService
      .getCurrentUserId()
      .pipe(
        switchMap((id) => {
          return this.userService.fetchUserById(id);
        }),
        map ( user => {
          this.userId = user.id;
          return user.avatarPath
        })
      )
      .subscribe((avatar) => {
        this.domain = `${environment.domain}/${avatar}`;
      });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files[0];
    if (this.selectedFiles) {
      const formData = new FormData();
      formData.append('file', this.selectedFiles);
      this.userService
        .uploadImageProfile(this.userId, formData)
        .pipe(
          map((user) => {
            this.domain = `${environment.domain}/${user.avatarPath}`;
            return this.domain;
          }),
        )
        .subscribe((val) => {
          console.log('val', val);
        });
    }
  }

  create() {
    console.log(this.userInfo.value);
  }
}
