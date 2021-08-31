import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  buttonState: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleAddButtonState() {
    this.buttonState = !this.buttonState;
  }

  isRoute(route: string) {
    return this.router.url === route;
  }
}
