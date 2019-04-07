import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EMAIL_PATTERN } from 'src/app/shared/constants/validators.regex';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.scss']
})
export class PacienteCadastroComponent implements OnInit {

  formularioDePaciente: FormGroup;
  nome: string;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Novo Paciente');
  }

  prepararFormulario() {
    this.formularioDePaciente = new FormGroup(
      {
        nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        dataNascimento: new FormControl('', Validators.required),
        cPF: new FormControl('', [Validators.required, Validators.maxLength(14)]),
        rG: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        estadoCivil: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
        profissao: new FormControl('', Validators.required),
        fotoPerfil: new FormControl(''),
        telefonePrincipal: new FormControl(''),
        telefone2: new FormControl(''),
        logradouro: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', [Validators.required, Validators.maxLength(3)]),
        cep: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        codigoCidade: new FormControl('', Validators.required),
      },
      {
        updateOn: 'blur'
      }
    );
  }

  voltar() {
    this.router.navigate(['/pacientes'], {
      relativeTo: this.route
    });
  }

}
