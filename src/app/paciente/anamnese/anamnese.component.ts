import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { PacienteAnamneseDTO } from 'src/app/domains/dtos/paciente-anamnese.dto';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.scss'],
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
              opacity: 0.5,
              transform: 'translateX(-20px)',
              offset: 0.5
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
export class AnamneseComponent implements OnInit {

  activeTab = 'pronto';
  form: FormGroup;
  questoes: FormArray;
  codigPaciente: number;
  anamnese: PacienteAnamneseDTO;

  respostas = [
    { label: 'Sim', value: 'SIM' },
    { label: 'Não', value: 'NAO' },
    { label: 'Não sei', value: 'NAO_SEI' }
  ];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarAnamnese();
  }

  prepararFormulario() {
    this.form = new FormGroup({
      codigo: new FormControl(''),
      dataResp: new FormControl(''),
      questoes: this.formBuilder.array([])
    },
      {
        updateOn: 'change'
      });
  }

  get formData() {
    return <FormArray>this.form.get('questoes');
  }

  adicionarQuestao(): void {
    this.questoes = this.form.get('questoes') as FormArray;
    this.questoes.push(this.criarItemDeQuestao());
  }

  criarItemDeQuestao(): FormGroup {
    return this.formBuilder.group({
      codigo: new FormControl(''),
      descricao: new FormControl(''),
      resposta: new FormControl(null),
      informAdicionais: new FormControl('', [Validators.maxLength(135)]),
    });
  }

  carregarAnamnese() {
    this.pacienteService.buscarAnamnese(this.codigPaciente)
      .subscribe((response) => {
        response.anamnese.questoes.forEach(() => {
          this.adicionarQuestao();
        });
        this.form.patchValue(response.anamnese);
        this.atualizarTituloDaPagina();

      });
  }

  submeterFormulario() {
    this.atualizar();
  }

  atualizar() {
    this.pacienteService.atualizarAnamnese(this.form.value, this.codigPaciente)
      .subscribe(() => {
        const mensagemToast = `"A anamnese foi atualizada."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Anamnese`);
  }
}
