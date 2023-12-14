import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TasksService } from './services/tasks.service';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  providers:[TasksService],
  exports: [],
  declarations: [
    TasksFormComponent,

  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TasksModule { }
