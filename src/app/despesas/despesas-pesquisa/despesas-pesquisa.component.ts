import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-despesas-pesquisa',
  templateUrl: './despesas-pesquisa.component.html',
  styleUrls: ['./despesas-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DespesasPesquisaComponent implements OnInit {

  categorias = [
    { label: 'Alimentação', value: '1' },
    { label: 'Transporte', value: '2' }
  ];

  status = [
    { label: 'Todos', value: '1' },
    { label: 'Pagos', value: '2' },
    { label: 'Abertos', value: '3' }
  ];

  constructor() { }

  ngOnInit() {
  }

  criarDespesa() {
    // TODO: Implementar a criação de despesa
  }
  isMobile(): boolean {
    return $.browser.mobile;
  }
}
