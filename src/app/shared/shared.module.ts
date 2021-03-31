import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilestackModule } from '@filestack/angular';


const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  FilestackModule,
];

@NgModule({
  declarations: [UploadFileComponent],
  imports: [...modules],
  exports: [...modules, UploadFileComponent],
})
export class SharedModule {}
