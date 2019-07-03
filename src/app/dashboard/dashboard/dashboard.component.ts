import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DataHoje } from 'src/app/domains/data-hoje.util';
import { BadgeConsulta } from 'src/app/domains/badge-consulta.model';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { DashBoardDTO } from 'src/app/domains/dtos/dashboard/dashboard.dto';
import { AgendamentoDashBoardDTO } from 'src/app/domains/dtos/dashboard/dashboard-consulta-dashboard.dto';
import { RecebimentoDespesaDashBoardGraficoDTO } from 'src/app/domains/dtos/dashboard/dashboard-fluxo-caixa-semana.dto';

import { DespesaRecebimentoDashBoardDTO } from 'src/app/domains/dtos/dashboard/dashboard-fluxo-caixa-dia.dto';

import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imagem: Object = {};

  consultas: AgendamentoDashBoardDTO[];
  pagamentos: DespesaRecebimentoDashBoardDTO[];
  pagamentosSemana: RecebimentoDespesaDashBoardGraficoDTO[];

  consultaSelecionada: AgendamentoDashBoardDTO;
  badgeConsultas: BadgeConsulta;
  dataHoje: DataHoje;

  caixa;
  saldo: number;
  receitaTotal: number;
  despesaTotal: number;

  chartSemana;

  options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const valor = dataset.data[tooltipItem.index];
          const label = dataset.label ? (dataset.label + ': ') : '';
          return label + this.currencyPipe.transform(valor, 'BRL', 'symbol');
        }
      }
    }
  };

  constructor(
    private title: Title,
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private dashboardService: DashboardService,
  ) {
    this.dataHoje = new DataHoje();
    this.badgeConsultas = new BadgeConsulta();
  }

  ngOnInit() {
    this.title.setTitle('Início');
    this.dashboardService.carregar()
      .subscribe((response: DashBoardDTO) => {
        this.consultas = response.agendamentos.sort((a, b) => {
          return a.horaInicio > b.horaInicio ? 1 : -1;
        });
        this.badgeConsultas.verificarStatusAgendamento(response.agendamentos);

        this.pagamentos = response.pagamentos;
        this.receitaTotal = this.calcularPagamentoDia(2);
        this.despesaTotal = this.calcularPagamentoDia(1);
        this.saldo = this.calcularSaldo();

        this.caixa = {
          labels: ['Receitas', 'Despesas'],
          datasets: [
            {
              data: [this.receitaTotal, this.despesaTotal],
              backgroundColor: ['#9ce1ba', '#ec9c99']
            }
          ]
        };
        const [receitas, despesas] = this.calcularTotais(response.pagamentosGrafico);

        this.chartSemana = {
          labels: ['Segunda', 'Terça ', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
          datasets: [
            {
              label: 'Receitas',
              data: receitas,
              fill: false,
              borderColor: '#9ce1ba'
            },
            {
              label: 'Despesas',
              data: despesas,
              fill: false,
              borderColor: '#ec9c99'
            }
          ]
        };
      });
  }

  exibirConsulta(consulta: AgendamentoDashBoardDTO) {
    this.consultaSelecionada = consulta;
    this.imagem = { 'background': `url(${this.consultaSelecionada.urlFoto}) 0%/ cover no-repeat` };
  }

  calcularPagamentoDia(tipo: number): number {
    let total = 0;
    this.pagamentos.forEach((pagamento) => {
      if (pagamento.tipo === tipo) {
        return total += pagamento.valor;
      }
    });
    return total;
  }

  calcularTotais(pagamentosSemana: RecebimentoDespesaDashBoardGraficoDTO[]) {
    const totaisReceita: number[] = [];
    const totaisDespesa: number[] = [];
    pagamentosSemana.forEach((pagamento) => {
      totaisReceita.push(pagamento.recebimento);
      totaisDespesa.push(pagamento.despesa);
    });
    const total = [totaisReceita, totaisDespesa];
    return total;
  }

  calcularSaldo(): number {
    return this.calcularPagamentoDia(2) - this.calcularPagamentoDia(1);
  }

  calcularIdade() {
    return moment(this.consultaSelecionada.dataNascimento, 'YYYY-MM-DD')
      .fromNow().substring(3, 6);
  }

  navegarParaPaciente() {
    this.router.navigate(['/pacientes', this.consultaSelecionada.codPaciente, 'consultas']);
  }

  navegarParaPagamento(pagamento: DespesaRecebimentoDashBoardDTO) {
    if (pagamento.idDespesa) {
      this.router.navigate(['/despesas', pagamento.idDespesa, 'edit']);
    } else {
      this.router.navigate(['/pacientes', pagamento.idRecebimento, 'pagamentos']);
    }
  }
}
