import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/ITask';
import { UiService } from '../button/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  day: string;
  text: string;
  reminder: boolean = false;
  @Output() onSubmitEvent = new EventEmitter();
  openAddForm = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val: boolean) => {
      this.openAddForm = val;
    });
  }

  ngOnInit(): void {}

  addTaskSubmitted() {
    if (!this.text || !this.day) throw new Error('Invalid input');
    this.onSubmitEvent.emit({
      day: this.day,
      text: this.text,
      reminder: this.reminder
    } as ITask);
    this.day = '';
    this.text = '';
    this.reminder = false;
  }
}
