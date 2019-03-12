import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odonto',
  templateUrl: './odonto.component.html',
  styleUrls: ['./odonto.component.scss']
})
export class OdontoComponent implements OnInit {

  mostrar = true;
  mostrar2 = true;

  constructor() { }

  ngOnInit() {
  }

  mostrarInfo() {
    if (this.mostrar) {

      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  mostrarInfo2() {
    if (this.mostrar2) {

      this.mostrar2 = false;
    } else {
      this.mostrar2 = true;
    }
  }

  select() {
    if (!this.mostrar) {
      return 'dente-select-top';
    }
  }

  selectd() {
    if (!this.mostrar2) {
      return 'dente-select';
    }
  }

}
