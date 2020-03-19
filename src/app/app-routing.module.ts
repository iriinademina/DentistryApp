import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './content/main-layout/main-layout.component'
import { AuthGuard } from './guards/auth.guard'

const AppRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        
        children: [
            {
                path: 'admin',
                canActivate: [AuthGuard],
                loadChildren: () => import ('./content/pages/admin/admin.module').then (module => module.AdminModule)
            }
        ]
    },
    {
        path: 'auth', 
        loadChildren: () => import ('./content/pages/auth/auth.module').then (module => module.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}