import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing';
import { SharedModule } from '../../../shared/shared.module';
import { UserManagementComponent } from './user-management.component';
import { UserMainComponent } from './user-main/user-main.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

@NgModule({
    declarations: [
        UserManagementComponent,
        UserMainComponent,
        ProfileUserComponent,
    ],
    imports: [CommonModule, SharedModule, UserManagementRoutingModule ],
    exports: [RouterModule],
})
export class UserManagementModule {}