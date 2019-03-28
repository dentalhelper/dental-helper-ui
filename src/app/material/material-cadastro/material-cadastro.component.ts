import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/core/services/toast.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MaterialService } from 'src/app/core/services/material.service';
import { tap } from 'rxjs/operators';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-material-cadastro',
  templateUrl: './material-cadastro.component.html',
  styleUrls: ['./material-cadastro.component.scss'],
  animations: [
    trigger('linha', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto',
        animate('300ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('300ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0,
              transform: 'translateX(30px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class MaterialCadastroComponent implements OnInit {

  estadoDaLinha = 'pronto';
  formularioDeMaterial: FormGroup;
  nome: string;
  items: FormArray;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private materialService: MaterialService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Novo Material');
  }

  prepararFormulario() {
    this.formularioDeMaterial = new FormGroup({
      codigo: new FormControl(''),
      nome: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      fabricante: new FormControl('', Validators.maxLength(50)),
      atributoMateriais: this.formBuilder.array([])
    },
      {
        updateOn: 'change'
      });
  }

  get formData(){
    return <FormArray>this.formularioDeMaterial.get('atributoMateriais');
  }

  adicionarReferencia(): void {
    this.items = this.formularioDeMaterial.get('atributoMateriais') as FormArray;
    this.items.push(this.criarItemDeMaterial());
  }

  removerReferencia(index: number) {
    this.items.removeAt(index);
  }

  criarItemDeMaterial(): FormGroup {
    return this.formBuilder.group({
      codigo: new FormControl(''),
      nome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      valor: new FormControl('', [Validators.required, Validators.maxLength(30)]),
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
    this.materialService.salvar(this.formularioDeMaterial.value)
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

  }

  voltar() {
    this.router.navigate(['/materiais'], {
      relativeTo: this.route
    });
  }

  get isEditando(): boolean {
    return Boolean(this.formularioDeMaterial.get('codigo').value);
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
