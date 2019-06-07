import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  verSenha = false;

  constructor() { }

  ngOnInit() {
    this.prepararFormulario();
  }

  prepararFormulario() {
    this.formulario = new FormGroup(
      {
        login: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required),
      },
      {
        updateOn: 'change'
      }
    );
  }

  exibirSenha() {
    this.verSenha = true;
  }

  ocultarSenha() {
    this.verSenha = false;
  }

  submeterFormulario() {
    console.log('Login');
    console.log(this.formulario.get('senha').value !== '');

  }
}
