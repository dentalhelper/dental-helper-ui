import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Material } from 'src/app/domains/material.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { MaterialFilter } from 'src/app/core/classes/material-filter';
import { MaterialService } from 'src/app/core/services/material.service';

import { ConfirmationService } from 'primeng/api';

declare var $: any;
export const MATERIAL =
{
  materiais: 'materiais'
}
  ;

export const FACES_DO_DENTE = [{ label: 'O', value: 1 },]
@Component({
  selector: 'app-materiais-pesquisa',
  templateUrl: './materiais-pesquisa.component.html',
  styleUrls: ['./materiais-pesquisa.component.scss'],
  animations: [
    trigger('exibir', [
      state('void', style({
        transform: 'translateY(-10%)',
        opacity: 0
      })),
      state('ready', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('200ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MateriaisPesquisaComponent implements OnInit {

  messageState = 'ready';
  formularioDoFiltro: FormGroup;

  formulario: FormGroup;
  items: FormArray;

  cols: any[];

  materiais: Material[] = [];

  filtro: MaterialFilter = new MaterialFilter();

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private materialService: MaterialService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Materiais');
    this.inicializarFiltro();
    this.filtrar();

    this.cols = [
      {
        field: 'nome', header: 'Nome'
      },
      {
        field: 'fabricante', header: 'Fabricante'
      }
    ];
    this.prepararFormulario();
  }

  criarMaterial() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  inicializarFiltro() {
    this.formularioDoFiltro = new FormGroup({
      nome: new FormControl(''),
      fabricante: new FormControl(''),
      valorAtributo: new FormControl('')
    });
  }

  filtrar() {
    this.filtro.nome = this.formularioDoFiltro.get('nome').value;
    this.filtro.fabricante = this.formularioDoFiltro.get('fabricante').value;
    this.filtro.valorAtributo = this.formularioDoFiltro.get('valorAtributo').value;
    this.carregarMateriais();
  }

  carregarMateriais() {
    this.materialService.pesquisar(this.filtro).subscribe(resultado => {
      this.materiais = resultado;
    });
  }

  deletar(material: any) {
    const url = material.links[0].href;
    this.materialService.deletar(url)
      .subscribe(() => {
        this.carregarMateriais();
        const mensagemToast = `"O material foi excluído."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  confirmarExclusao(material: Material) {
    this.confirmationService.confirm({
      message: `Você tem certeza que quer excluir "${material.nome}"?`,
      accept: () => {
        this.deletar(material);
      }
    });
  }

  prepararFormulario() {
    this.formulario = new FormGroup({
      materiais: this.formBuilder.array([])
    },
      {
        updateOn: 'change'
      });
  }

  get formData() {
    return <FormArray>this.formulario.get('materiais');
  }

  adicionarMaterial(material): void {
    this.items = this.formulario.get('materiais') as FormArray;
    this.items.push(this.criarItemDeMaterial(material.nome));
  }

  removerMaterial(index: number) {
    this.items.removeAt(index);
  }

  criarItemDeMaterial(nome): FormGroup {
    return this.formBuilder.group({
      nome: new FormControl(nome, [Validators.required, Validators.maxLength(20)]),
      quantidade: new FormControl(1, [Validators.required, Validators.maxLength(10)]),
    });
  }

  salvarLista() {
    const aux = this.formulario.value;
    const jsonAux = JSON.stringify(aux);
    localStorage.setItem(MATERIAL.materiais, jsonAux);
    const mensagemToast = `Você criou uma lista de materiais`;
    this.toastService.exibirSucesso(mensagemToast);
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }

}
