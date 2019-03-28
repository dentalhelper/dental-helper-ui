import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Procedimento } from 'src/app/domains/procedimento.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-procedimentos-pesquisa',
  templateUrl: './procedimentos-pesquisa.component.html',
  styleUrls: ['./procedimentos-pesquisa.component.scss']
})
export class ProcedimentosPesquisaComponent implements OnInit {

  procedimentos: Procedimento[] = [];
  formularioDoFiltro: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private procedimentoService: ProcedimentoService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.inicializarFiltro();
    this.title.setTitle('Procedimentos');
    this.filtrar();
  }

  criarProcedimento() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  inicializarFiltro() {
    this.formularioDoFiltro = new FormGroup({
      nome: new FormControl('')
    });
  }

  carregarProcedimentos() {
    this.procedimentoService.pesquisar(this.formularioDoFiltro.value).subscribe(resultado => {
      this.procedimentos = resultado;
    });
  }

  deletar(procedimento: any) {
    const url = procedimento.links[0].href;
    this.procedimentoService.deletar(url)
      .subscribe(() => {
        this.carregarProcedimentos();
        const mensagemToast = `"A Despesa foi excluída."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  confirmarExclusao(procedimento: Procedimento) {
    this.confirmationService.confirm({
      message: `Você tem certeza que quer excluir "${procedimento.nome}"?`,
      accept: () => {
        this.deletar(procedimento);
      }
    });
  }

  filtrar() {
    this.carregarProcedimentos();
  }

}
