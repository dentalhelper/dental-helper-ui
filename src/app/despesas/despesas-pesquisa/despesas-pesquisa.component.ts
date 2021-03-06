import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { Despesa } from 'src/app/domains/despesa.model';
import { pt_BR } from '../../shared/constants/calendario.br';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DespesaFilter } from 'src/app/core/classes/despesa-filter';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';

import { ConfirmationService } from 'primeng/api';

import * as moment from 'moment';

declare var $: any;
@Component({
  selector: 'app-despesas-pesquisa',
  templateUrl: './despesas-pesquisa.component.html',
  styleUrls: ['./despesas-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DespesasPesquisaComponent implements OnInit {

  pt_BR = pt_BR;
  formularioDeFiltro: FormGroup;

  dataInicial = new Date(moment().startOf('month').add(1, 'day').format('YYYY-MM-DD'));
  dataFinal = new Date(moment().endOf('month').add(1, 'day').format('YYYY-MM-DD'));

  categorias = [];
  despesas: Despesa[] = [];
  total = 0;

  filtro: DespesaFilter = new DespesaFilter();

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastService: ToastService,
    private despesaService: DespesaService,
    private confirmationService: ConfirmationService,
    private categoriaDespesaService: CategoriaDespesaService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Despesas');
    this.inicializarFiltro();
    this.carregarCategorias();
    this.filtrar();
  }

  criarDespesa() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  inicializarFiltro() {
    this.formularioDeFiltro = new FormGroup({
      dataPagamentoDe: new FormControl(this.dataInicial),
      dataPagamentoAte: new FormControl(this.dataFinal),
      descricao: new FormControl(null),
      categoria: new FormControl(null)
    });
  }

  filtrar() {
    this.filtro.dataPagamentoDe = this.formularioDeFiltro.get('dataPagamentoDe').value;
    this.filtro.dataPagamentoAte = this.formularioDeFiltro.get('dataPagamentoAte').value;
    this.filtro.descricao = this.formularioDeFiltro.get('descricao').value;
    this.filtro.categoria = this.formularioDeFiltro.get('categoria').value;
    this.carregarDespesas();
  }

  carregarDespesas() {
    this.total = 0;
    this.despesaService.pesquisar(this.filtro).subscribe(resultado => {
      this.despesas = resultado;
      resultado.forEach((d) => {
        this.total += d.valor;
      });
    });
  }

  deletar(despesa: any) {
    const url = despesa.links[0].href;
    this.despesaService.deletar(url)
      .subscribe(() => {
        this.filtrar();
        const mensagemToast = `"A Despesa foi excluída."`;
        this.toastService.exibirSucesso(mensagemToast);
      }, (error) => { console.log(error); });
  }

  confirmarExclusao(despesa: Despesa) {

    this.confirmationService.confirm({
      message: `Você tem certeza que quer excluir "${despesa.descricao}"?`,
      accept: () => {
        this.deletar(despesa);
      }
    });
  }

  carregarCategorias() {
    this.categoriaDespesaService.pesquisar()
      .subscribe(response => {

        this.categorias = response.map(elemento => {
          return { label: elemento.nome, value: elemento.nome };
        });
        this.categorias.push({ label: 'Todos', value: '' });
      });
  }

  hideForRole(role: string) {
    return !this.authService.hasAuthority(role);
  }

  getTotal() {
    this.despesas.forEach((d) => {

      this.total = d.valor;
    });
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
