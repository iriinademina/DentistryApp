import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './content/main-layout/main-layout.component'
import { AuthGuard } from './guards/auth.guard';
import { MainPageComponent } from './content/pages/main-page/main-page.component';
import { UserManagementComponent } from './content/pages/user-management/user-management.component'

const AppRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: MainPageComponent
            },
            {
                path: 'admin',
                canActivate: [AuthGuard],
                loadChildren: () => import ('./content/pages/admin/admin.module').then (module => module.AdminModule)
            },
            {
                path: 'auth', 
                loadChildren: () => import ('./content/pages/auth/auth.module').then (module => module.AuthModule)
            },
            {
                path: 'user',
                canActivate: [AuthGuard],
                loadChildren: () => import ('./content/pages/user-management/user-management.module').then (module => module.UserManagementModule)
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}