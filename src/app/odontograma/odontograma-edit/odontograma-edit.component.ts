import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';

@Component({
  selector: 'app-odontograma-edit',
  templateUrl: './odontograma-edit.component.html',
  styleUrls: ['./odontograma-edit.component.scss']
})
export class OdontogramaEditComponent implements OnInit {

  formulario: FormGroup;
  codigoPaciente: number;

  formasRosto = [
    { label: 'Quadrado', value: 1, flag: 'square.png' },
    { label: 'Redondo', value: 2, flag: 'circle.png' },
    { label: 'Triangular', value: 3, flag: 'triangle.png' },
    { label: 'Retangular', value: 4, flag: 'retangle.png' }
  ];

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    this.codigoPaciente = this.route.snapshot.params['codigo'];
    this.title.setTitle('Atualizar Odontograma');
    this.prepararFormulario();
    this.carregarDados(this.route.snapshot.params['codigo']);
  }

  prepararFormulario() {
    this.formulario = new FormGroup(
      {
        escalaDente: new FormControl('', [Validators.required]),
        corDente: new FormControl('', [Validators.required]),
        formaRosto: new FormControl('', [Validators.required]),
      }
    );
  }

  salvar() {
    const form = this.formulario.value;
    this.pacienteService.atualizarOdontograma(form, this.codigoPaciente)
      .subscribe(() => {
        this.voltar();
        this.toastService.exibirSucesso('O Odontograma foi atualizado!');
      });
  }
  carregarDados(codigo: number) {
    this.pacienteService.buscarOdontograma(codigo)
      .subscribe((response) => {
        this.formulario.patchValue(response);
      });
  }

  voltar() {
    this.router.navigate(['/pacientes', this.codigoPaciente, 'odontograma']);
  }
}
