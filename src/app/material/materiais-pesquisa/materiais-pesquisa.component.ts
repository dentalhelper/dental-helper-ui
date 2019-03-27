import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Material } from 'src/app/domains/material.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { MaterialFilter } from 'src/app/core/classes/material-filter';
import { MaterialService } from 'src/app/core/services/material.service';

import { ConfirmationService } from 'primeng/api';

declare var $: any;

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

  cols: any[];

  materiais: Material[] = [];

  filtro: MaterialFilter = new MaterialFilter();

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
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
  }

  criarMaterial() {

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

  confirmarExclusao() {

  }

  isMobile(): boolean {
    return $.browser.mobile;
  }

}
