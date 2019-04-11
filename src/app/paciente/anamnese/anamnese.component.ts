import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { PacienteAnamneseDTO } from 'src/app/domains/dtos/paciente-anamnese.dto';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.scss']
})
export class AnamneseComponent implements OnInit {

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
    private router: Router,
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
