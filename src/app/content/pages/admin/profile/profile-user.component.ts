import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '@services/user.service';
import { AuthService } from '@services/auth.service';
import { environment } from '../../../../../environments/aws.environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { map, switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
})
export class ProfileUserComponent implements OnInit {
  public userInfo: FormGroup;
  selectedFiles: File;
  domain: string;
  userId: string;
  userName: string;
  isForm: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.isForm = false;
  }

  ngOnInit(): void {
    this.authService
      .getCurrentUserId()
      .pipe(
        switchMap((id) => {
          return this.userService.fetchUserById(id);
        }),
        map((user) => {
          const { firstName, lastName, speciality } = user;
          this.userId = user.id;
          this.userName = user.userName;
          this.initUserForm(firstName, lastName, speciality);
          return user.avatarPath;
        }),
      )
      .pipe(first())
      .subscribe((avatar) => {
        {
          if (avatar) {
            this.domain = `${environment.domain}/${avatar}`;
          }
        }
      });
  }

  initUserForm(
    firstName: string = '',
    lastName: string = '',
    speciality: string = '',
  ) {
    console.log('init form');
    this.userInfo = new FormGroup({
      firstName: new FormControl(firstName, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.patternValidator(/^[A-Za-z]+$/, {
          hasEnglishLetters: true,
        }),
      ]),
      lastName: new FormControl(lastName, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.patternValidator(/^[A-Za-z]+$/, {
          hasEnglishLetters: true,
        }),
      ]),
      speciality: new FormControl(speciality, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.patternValidator(/^[A-Za-z]+$/, {
          hasEnglishLetters: true,
        }),
      ]),
    });
    this.isForm = true;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files[0];
    if (this.selectedFiles) {
      const formData = new FormData();
      formData.append('file', this.selectedFiles);
      this.userService
        .uploadImageProfile(this.userId, formData)
        .pipe(map((user) => user.avatarPath))
        .pipe(first())
        .subscribe((avatar) => {
          this.domain = `${environment.domain}/${avatar}`;
        });
    }
  }

  editUserData() {
    this.userService
      .editUserData(this.userId, this.userInfo.value)
      .subscribe((data) => console.log('form data', data));
  }
}
