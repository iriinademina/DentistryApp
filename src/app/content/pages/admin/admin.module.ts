import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { UserMainComponent } from './user-main/user-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'users',
                component: UserMainComponent
            },
            {
                path: 'create-user',
                component: CreateUserComponent
            }
        ],
    },
];

@NgModule({
    declarations: [CreateUserComponent, AdminLayoutComponent, UserMainComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)
    , BsDatepickerModule.forRoot()],
    exports: [RouterModule,   BsDatepickerModule],
})
export class AdminModule {}
