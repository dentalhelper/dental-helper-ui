import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { MaterialService } from 'src/app/core/services/material.service';

declare var $: any;
@Component({
  selector: 'app-materiais-lista',
  templateUrl: './materiais-lista.component.html',
  styleUrls: ['./materiais-lista.component.scss']
})
export class MateriaisListaComponent implements OnInit {

  materiais: any;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private materialService: MaterialService,
  ) { }

  ngOnInit() {
    this.carregar();
    this.title.setTitle('Lista de compras');
  }

  voltar() {
    this.router.navigate(['/materiais'], {
      relativeTo: this.route
    });
  }

  carregar() {
    const jsonMateriais = window.localStorage.getItem('materiais');
    if (jsonMateriais !== null) {
      this.materiais = JSON.parse(jsonMateriais);
    }
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }

  limpar() {
    localStorage.removeItem('materiais');
    this.materiais = undefined;
    const mensagemToast = `Sua lista foi removida`;
    this.toastService.exibirSucesso(mensagemToast);

  }
}
