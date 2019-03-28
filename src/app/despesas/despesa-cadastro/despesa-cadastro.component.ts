import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { ToastService } from 'src/app/core/services/toast.service';

import { tap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.scss']
})
export class DespesaCadastroComponent implements OnInit {

  pt_BR = pt_BR;
  formularioDeDespesa: FormGroup;
  categorias = [];
  descricao: string;

  formaDePagamento = [
    { label: 'Dinheiro', value: 'DINHEIRO' },
    { label: 'Cartão', value: 'CARTAO' }
  ];

  constructor(
    private categoriaDespesaService: CategoriaDespesaService,
    private despesaService: DespesaService,
    private toastService: ToastService,
    private router: Router,
    private title: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.carregarCategorias();
    this.title.setTitle('Nova Despesa');
    const codigoDespsesa = this.route.snapshot.params['codigo'];
    if (codigoDespsesa) {
      this.carregarDespesa(codigoDespsesa);
    }
  }

  prepararFormulario() {
    this.formularioDeDespesa = new FormGroup({
      codigo: new FormControl(''),
      descricao: new FormControl('', Validators.maxLength(50)),
      valor: new FormControl('', Validators.required),
      categoria: new FormGroup({
        codigo: new FormControl('', Validators.required)
      }),
      pagamento: new FormGroup({
        forma: new FormControl('', Validators.required),
        dataPagamento: new FormControl('', Validators.required)
      }, {
          updateOn: 'change'
        })
    },
      {
        updateOn: 'blur'
      });
  }

  submeterFormulario() {
    if (this.isEditando) {
      this.atualizar();
    } else {
      this.salvar();
    }
  }

  salvar() {
    this.despesaService.salvar(this.formularioDeDespesa.value)
      .pipe(
        tap((response: string) => {
          this.descricao = response;
        })
      )
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `"${this.descricao}" foi salva.`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  atualizar() {
    this.despesaService.atualizar(this.formularioDeDespesa.value)
      .subscribe(() => {
        const mensagemToast = `"A despesa foi atualizada.`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  carregarDespesa(codigo: number) {
    this.despesaService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.formularioDeDespesa.patchValue(response);
        this.atualizarTituloDaPagina();
      });
  }

  voltar() {
    this.router.navigate(['/despesas'], {
      relativeTo: this.route
    });
  }

  novaCategoria() {
    localStorage.setItem('criar', 'true');
    this.router.navigate(['/categorias-despesa'], {
      relativeTo: this.route
    });
  }

  carregarCategorias() {
    this.categoriaDespesaService.pesquisar()
      .subscribe(response => {
        this.categorias = response.map(elemento =>
          ({ value: elemento.codigo, label: elemento.nome })
        );
      });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Editando: ${this.formularioDeDespesa.get('descricao').value}`);
  }

  get isEditando(): boolean {
    return Boolean(this.formularioDeDespesa.get('codigo').value);
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
