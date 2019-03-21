import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Despesa } from 'src/app/domains/despesa.model';
import { pt_BR } from '../../shared/constants/calendario.br';

declare var $: any;
@Component({
  selector: 'app-despesas-pesquisa',
  templateUrl: './despesas-pesquisa.component.html',
  styleUrls: ['./despesas-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DespesasPesquisaComponent implements OnInit {

  pt_BR = pt_BR;
  categorias = [
    { label: 'Alimentação', value: '1' },
    { label: 'Transporte', value: '2' }
  ];

  status = [
    { label: 'Todos', value: '1' },
    { label: 'Pagos', value: '2' },
    { label: 'Abertos', value: '3' }
  ];

  despesas: Despesa[] = [
    {
      codigo: 1,
      dataPrevista: new Date(),
      dataRealizada: new Date(),
      valor: 200,
      descricao: 'Boi forte',
      comprovante: '',
      categoria: null,
      links: null
    },
    {
      codigo: 2,
      dataPrevista: new Date(),
      dataRealizada: new Date(),
      valor: 100,
      descricao: 'Internet',
      comprovante: '',
      categoria: null,
      links: null
    },
    {
      codigo: 3,
      dataPrevista: new Date(),
      dataRealizada: new Date(),
      valor: 40,
      descricao: 'Água mineral',
      comprovante: '',
      categoria: null,
      links: null
    }
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
