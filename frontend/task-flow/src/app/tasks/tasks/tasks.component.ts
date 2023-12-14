import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

 // tasks$: Observable<Task[]>;
  // REFERENCIA displayedColumns = [ 'name', 'category', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private dialo: MatDialog,

    ) {


     // this.tasks$ = this.tasksService.list()
  }


  ngOnInit(): void {

  }


}
