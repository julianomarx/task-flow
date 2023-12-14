import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksFormComponent } from './tasks/tasks-form/tasks-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tasks'},
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  { path: 'new', component: TasksFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
