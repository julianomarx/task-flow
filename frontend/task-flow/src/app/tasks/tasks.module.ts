import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  exports: [AppMaterialModule],
  declarations: [
    TaskListComponent,
    TasksComponent,

  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
