import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UserManagementComponent } from './user-management.component';
import { UserMainComponent } from './user-main/user-main.component';

const routes: Routes = [
    {
        path: '',
        component: UserMainComponent,
    },
];

@NgModule({
    declarations: [
        UserManagementComponent,
        UserMainComponent
    ],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserManagementModule {}