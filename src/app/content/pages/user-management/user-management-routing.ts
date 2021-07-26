import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { UserMainComponent } from './user-main/user-main.component';

const routes: Routes  = [
    {
        path: '',
        component: UserManagementComponent,
        children : [
            {
                path: 'profile',
                component: ProfileUserComponent
            },
            {
                path: 'home',
                component: UserMainComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UserManagementRoutingModule {}