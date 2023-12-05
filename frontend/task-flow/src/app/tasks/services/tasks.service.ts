import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../model/task';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly API = 'api/tasks'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Task[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(tasks => console.log(tasks))
    )
  }

  save(record: Partial<Task>) {
    return this.httpClient.post<Task>(this.API, record).pipe(first());
  }
}
