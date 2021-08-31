import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  @Output() removeClicked = new EventEmitter();
  @Output() toggleClicked = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onClick(task: ITask) {
    this.removeClicked.emit(task);
  }

  onToggle(task: ITask) {
    this.toggleClicked.emit(task);
  }
}
