import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';
import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';
import { ToastService } from 'src/app/core/services/toast.service';

import { tap } from 'rxjs/operators';

import { ConfirmationService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

declare var $: any;
const ALTURA_MODAL_MOBILE = '50';
const ALTURA_MODAL_DESKTOP = '200';
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
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Categorias de Despesa');
    this.categoria = new CategoriaDespesa();
    this.pesquisar();
    if (localStorage.getItem('criar')) {
      localStorage.removeItem('criar');
      this.showDialog();
    }
  }

  isMobile(): string {
    return $.browser.mobile ? ALTURA_MODAL_MOBILE : ALTURA_MODAL_DESKTOP;
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
    this.categoriaDespesaService.atualizar(urlDoObjeto, form.value)
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

  confirmarExclusao(categoriaDespesa: CategoriaDespesa) {

    this.confirmationService.confirm({
      message: `Você tem certeza que quer excluir "${categoriaDespesa.nome}"?`,
      accept: () => {
        this.deletar(categoriaDespesa);
      }
    });
  }

  deletar(categoriaDespesa: any) {
    const url = categoriaDespesa.links[0].href;
    this.categoriaDespesaService.deletar(url)
      .subscribe(() => {
        this.pesquisar();
        const mensagemToast = `"A categoria foi excluída."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }
}
