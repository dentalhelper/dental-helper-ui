import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Despesa } from 'src/app/domains/despesa.model';
import { pt_BR } from '../../shared/constants/calendario.br';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';
import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { DespesaFilter } from 'src/app/core/classes/despesa-filter';

declare var $: any;
@Component({
  selector: 'app-despesas-pesquisa',
  templateUrl: './despesas-pesquisa.component.html',
  styleUrls: ['./despesas-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DespesasPesquisaComponent implements OnInit {

  pt_BR = pt_BR;
  categorias = [];

  despesas: Despesa[] = [];

  filtro: DespesaFilter = new DespesaFilter();

  constructor(
    private categoriaDespesaService: CategoriaDespesaService,
    private despesaService: DespesaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarDespesas();
  }

  criarDespesa() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }

  carregarDespesas() {
    this.despesaService.pesquisar(this.filtro).subscribe(resultado => {
      this.despesas = resultado;
    })
  }

  carregarCategorias() {
    this.categoriaDespesaService.pesquisar()
      .subscribe(response => {
        this.categorias = response.map(elemento => {
          return { label: elemento.nome, value: elemento.codigo };
        });
      });
  }
}
