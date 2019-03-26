import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Procedimento } from 'src/app/domains/procedimento.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';


@Component({
  selector: 'app-procedimentos-pesquisa',
  templateUrl: './procedimentos-pesquisa.component.html',
  styleUrls: ['./procedimentos-pesquisa.component.scss']
})
export class ProcedimentosPesquisaComponent implements OnInit {

  procedimentos: Procedimento[] = [];
  formularioDoFiltro: FormGroup;

  constructor(
    private procedimentoService: ProcedimentoService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Procedimentos');
    this.carregarProcedimentos();
  }

  criarProcedimento() {

  }

  carregarProcedimentos() {
    this.procedimentoService.pesquisar().subscribe(resultado => {
      this.procedimentos = resultado;
    });
  }
  confirmarExclusao() {

  }

  // TODO: Implementar filtro (aguardando do backend)
  filtrar() {
    console.log('FILTRADO');
  }

}
