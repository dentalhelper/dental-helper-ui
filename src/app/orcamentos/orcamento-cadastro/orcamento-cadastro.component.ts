import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';


@Component({
  selector: 'app-orcamento-cadastro',
  templateUrl: './orcamento-cadastro.component.html',
  styleUrls: ['./orcamento-cadastro.component.scss']
})
export class OrcamentoCadastroComponent implements OnInit {

  edicao = false;
  codigoOrcamento: number;

  constructor(
    private title: Title,
    private location: Location,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private procedimentoService: ProcedimentoService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo Orçamento');

    const codigoOrcamento = this.route.snapshot.params['codigo'];

    if (codigoOrcamento) {
      this.edicao = true;
      this.codigoOrcamento = codigoOrcamento;
    }
  }

  voltar() {
    this.location.back();
  }

  get isEditando(): boolean {
    return this.edicao;
  }
}
