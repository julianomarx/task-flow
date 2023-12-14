import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



import { Location } from '@angular/common'
import { delay } from 'rxjs';


@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  form = this.formBuilder.group({
    ticketNumber: [''],
    description: [''],
    status: { value: 'Aguardando', disabled: true }
  })


  constructor(private formBuilder: NonNullableFormBuilder,
    private service: TasksService,
    private _snackBar: MatSnackBar,
    private location: Location) {

  }
  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError())
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open("Tarefa salva com sucesso!", "OK", { duration: 3000 });
  }

  private onError() {
    this._snackBar.open("Erro ao salvar tarefa!", "OPS", {duration: 3000 });
  }

}
