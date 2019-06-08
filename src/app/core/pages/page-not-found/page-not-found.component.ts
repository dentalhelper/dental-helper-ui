import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  tempo = 10;
  constructor(
    private router: Router,
    private location: Location
  ) { }


  ngOnInit() {
    this.startTime();
  }

  voltar() {
    this.location.back();
  }

  startTime() {
    this.tempo -= 1;
    if (this.tempo !== 0) {
      setTimeout(() => {
        this.startTime();
      }, 1000);
    }
    if (this.tempo === 0) {
      this.router.navigate(['/pacientes']);
    }

  }
}
