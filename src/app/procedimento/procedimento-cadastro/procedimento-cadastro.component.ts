import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastService } from 'src/app/core/services/toast.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';
import { SOMENTE_NUMEROS } from 'src/app/shared/constants/validators.regex';

import { tap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-procedimento-cadastro',
  templateUrl: './procedimento-cadastro.component.html',
  styleUrls: ['./procedimento-cadastro.component.scss']
})
export class ProcedimentoCadastroComponent implements OnInit {

  formularioDeProcedimento: FormGroup;
  nome: string;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private procedimentoService: ProcedimentoService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Novo Procedimento');
    const codigProcedimento = this.route.snapshot.params['codigo'];
    if (codigProcedimento) {
      this.carregarProcedimentoPeloCodigo(codigProcedimento);
    }

  }

  prepararFormulario() {
    this.formularioDeProcedimento = new FormGroup(
      {
        codigo: new FormControl(''),
        descricao: new FormControl(''),
        duracaoMinutos: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required,
          Validators.pattern(SOMENTE_NUMEROS),
          Validators.maxLength(3)]
        }),
        nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        valorBase: new FormControl(null, Validators.required),
      },
      {
        updateOn: 'blur'
      }
    );
  }

  submeterFormulario() {
    if (this.isEditando) {
      this.atualizar();
    } else {
      this.salvar();
    }
  }

  salvar() {
    this.procedimentoService.salvar(this.formularioDeProcedimento.value)
      .pipe(
        tap((response: string) => {
          this.nome = response;
        })
      )
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `"${this.nome}" foi salva."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  atualizar() {
    this.procedimentoService.atualizar(this.formularioDeProcedimento.value)
      .subscribe(() => {
        const mensagemToast = `"O procedimento foi atualizado."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  carregarProcedimentoPeloCodigo(codigo: number) {
    this.procedimentoService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.formularioDeProcedimento.patchValue(response);
        this.atualizarTituloDaPagina();
      });
  }

  voltar() {
    this.router.navigate(['/procedimentos'], {
      relativeTo: this.route
    });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Editando: ${this.formularioDeProcedimento.get('descricao').value}`);
  }

  get isEditando(): boolean {
    return Boolean(this.formularioDeProcedimento.get('codigo').value);
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
