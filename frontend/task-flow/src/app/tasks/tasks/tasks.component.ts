import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  onAdd() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
