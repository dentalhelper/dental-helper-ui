import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  verSenha = false;

  constructor(
    private title: Title,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title.setTitle('Login');
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
    this.authService.login(this.formulario.value).then(() => {
      this.router.navigate(['/pacientes']);
    }).catch(() => {
      this.formulario.get('senha').setValue('');
      console.log('asdigdsiagoitgasd');
    });
  }
}
