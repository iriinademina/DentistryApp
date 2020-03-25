import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { UserMainComponent } from './user-main/user-main.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'create-user',
                component: CreateUserComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [CreateUserComponent, AdminLayoutComponent, UserMainComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminModule {}
