import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { ToastService } from 'src/app/core/services/toast.service';

import { tap } from 'rxjs/operators';
import * as moment from 'moment';

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
    private formBuilder: FormBuilder,
    private categoriaDespesaService: CategoriaDespesaService,
    private despesaService: DespesaService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.prepararFormulario();
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

  prepararFormulario() {
    this.formularioDeDespesa = new FormGroup({
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

  carregarCategorias() {
    this.categoriaDespesaService.pesquisar()
      .subscribe(response => {
        this.categorias = response.map(elemento => {
          return { value: elemento.codigo, label: elemento.nome };
        });
      });
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

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
