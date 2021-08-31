import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/ITask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }

  updateTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url, task);
  }

  addTask(task: ITask): Promise<Observable<ITask>> {
    return this.getTasks()
      .toPromise()
      .then((tasks) => {
        const tasksCount = tasks.length;
        task.id = tasksCount + 1;
        return this.http.post<ITask>(this.apiUrl, task);
      });
  }
}
