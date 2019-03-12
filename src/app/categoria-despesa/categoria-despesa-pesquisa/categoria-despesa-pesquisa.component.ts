import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';

import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';

import { tap } from 'rxjs/operators';
import { ToastService } from 'src/app/core/services/toast.service';

import { MOBILE } from 'src/app/shared/constants/toast.key';

declare var $: any;
@Component({
  selector: 'app-categoria-despesa-pesquisa',
  templateUrl: './categoria-despesa-pesquisa.component.html',
  styleUrls: ['./categoria-despesa-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriaDespesaPesquisaComponent implements OnInit {

  categorias: CategoriaDespesa[];
  categoria: CategoriaDespesa;
  display = false;
  formulario: FormGroup;

  nomeCategoria: string;

  constructor(
    private categoriaDespesaService: CategoriaDespesaService,
    private messageService: MessageService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.categoria = new CategoriaDespesa();
    this.pesquisar();
  }
  isMobile(): string {
    return $.browser.mobile ? '50' : '200';
  }

  pesquisar() {
    this.categoriaDespesaService.pesquisar()
      .subscribe(response => {
        this.categorias = response;
      });
  }

  submeterFormulario(form: any) {
    if (this.isEditando()) {
      this.atualizar(form);
    } else {
      this.salvar(form);
    }
  }

  salvar(form: any) {
    this.categoriaDespesaService.salvar(form.value)
      .pipe(
        tap((response: string) => {
          this.nomeCategoria = response;
        })
      )
      .subscribe(() => {
        this.pesquisar();
        const mensagemToast = `"${this.nomeCategoria}" foi salva.`;
        this.toastService.exibirSucesso(mensagemToast);
        form.reset();
      });
  }

  atualizar(form: any) {
    const urlDoObjeto = this.categoria.links[0].href;
    this.categoriaDespesaService
      .atualizar(urlDoObjeto, form.value)
      .pipe(
        tap((response: string) => {
          this.nomeCategoria = response;
        })
      )
      .subscribe(() => {
        this.pesquisar();
        const mensagemToast = `"${this.nomeCategoria}" foi atualizado.`;
        this.toastService.exibirSucesso(mensagemToast);
        form.reset();
      });
  }

  showDialog(categoria?: CategoriaDespesa) {
    this.display = true;
    if (categoria === undefined) {
      this.categoria = null;
    } else {
      this.categoria = categoria;
    }
  }

  isEditando(): boolean {
    return this.categoria !== null;
  }

  limparInput() {
    this.categoria = null;
  }

  deletar(categoriaDespesa: any) {
    const url = categoriaDespesa.links[0].href;
    this.categoriaDespesaService
      .deletar(url)
      .then(() => {
        this.pesquisar();
        this.mensagemSucesso();
      })
      .catch();
  }

  mensagemSucesso() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Categoria excluída.'
    });
  }

  mensagemErro() {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro!',
      detail: 'Operação não implementada.'
    });
  }

}
