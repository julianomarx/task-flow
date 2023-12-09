import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'new', component: TasksFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
