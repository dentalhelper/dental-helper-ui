import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imagem: Object = {};

  constructor() { }

  ngOnInit() {
    this.imagem = { 'background': `url(https://dok7xy59qfw9h.cloudfront.net/103/453/070/710003023-1q454qi-ikd82h9rpj1mna/original/1901_162643100560490_584881406_n.jpg) no-repeat`, 'background-size': 'cover' };
  }

}
