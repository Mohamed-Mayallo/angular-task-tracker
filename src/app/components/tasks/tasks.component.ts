import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private tasksService: TasksService) {}

  removeTask(task: ITask) {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleTask(task: ITask) {
    task.reminder = !task.reminder;
    this.tasksService.updateTask(task).subscribe();
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: ITask) {
    this.tasksService.addTask(task).then((task) => {
      task.subscribe((res) => {
        this.tasks.push(res);
      });
    });
  }
}
