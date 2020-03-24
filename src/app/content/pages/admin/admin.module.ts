import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { PatientMainComponent } from './patient-main/patient-main.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'create-patient',
                component: CreatePatientComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [CreatePatientComponent, AdminLayoutComponent, PatientMainComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminModule {}
