import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private toggle: boolean = false;
  private subject = new Subject();

  constructor() {}

  toggleAction() {
    this.toggle = !this.toggle;
    this.subject.next(this.toggle);
  }

  onToggle() {
    return this.subject.asObservable();
  }
}
