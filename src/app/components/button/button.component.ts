import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiService } from '../button/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() toggleFormEventEmitted = new EventEmitter();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  onToggleForm() {
    this.toggleFormEventEmitted.emit();
    this.uiService.toggleAction();
  }
}
