import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-forbidden',
  templateUrl: './page-forbidden.component.html',
  styleUrls: ['./page-forbidden.component.scss']
})
export class PageForbiddenComponent implements OnInit, OnDestroy {


  tempo = 10;
  constructor(
    private router: Router,
    private location: Location
  ) { }


  ngOnInit() {
    this.startTime();
  }

  ngOnDestroy(): void {
    this.tempo = undefined;
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
