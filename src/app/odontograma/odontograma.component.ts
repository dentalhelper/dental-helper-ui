import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.scss']
})
export class OdontogramaComponent implements OnInit {

  dente = '';
  mostrar = true;
  constructor() { }

  ngOnInit() {
  }

  mostrarDentes() {
    if (this.mostrar) {

      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  esconderDentes(dente: any) {
    this.mostrar = true;
    this.dente = dente;
  }

  temDente() {
    return this.dente !== '';
  }

}

