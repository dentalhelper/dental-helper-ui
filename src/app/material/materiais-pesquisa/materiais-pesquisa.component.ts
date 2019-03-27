import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Material } from 'src/app/domains/material.model';
import { MaterialService } from 'src/app/core/services/material.service';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MaterialFilter } from 'src/app/core/classes/material-filter';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  formularioDeFiltro: FormGroup;

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
    this.carregarMateriais();
    this.cols = [
      {
        field: 'nome', header: 'Nome'
      },
      {
        field: 'fabricante', header: 'Fabricante'
      }

    ]
  }

  criarMaterial() {

  }

  filtrar() {

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
