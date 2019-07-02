import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imagem: Object = {};
  caixa = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        data: [1700, 1181],
        backgroundColor: ['#9ce1ba', '#ec9c99']
      }
    ]
  };

  semana = {
    labels: ['Segunda', 'Terça ', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Receitas',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#9ce1ba'
      },
      {
        label: 'Despesas',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#ec9c99'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
    this.imagem = { 'background': `url(https://dok7xy59qfw9h.cloudfront.net/103/453/070/710003023-1q454qi-ikd82h9rpj1mna/original/1901_162643100560490_584881406_n.jpg) no-repeat`, 'background-size': 'cover' };
  }

}
