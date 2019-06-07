import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dental Helper!!!';

  constructor(private router: Router) { }

  isLogin() {
    return this.router.url !== '/login';
  }
}
