import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('login-error', [
      state('onErrorIn', style({
        opacity: 1
      })),
      state('onErrorOut', style({
        opacity: 1
      })),
      transition('onErrorIn => onErrorOut',
        animate('400ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 1,
              transform: 'translateX(30px)',
              offset: 0.4
            }),
            style({
              opacity: 1,
              transform: 'translateX(-30px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
      transition('onErrorOut => onErrorIn',
        animate('400ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 1,
              transform: 'translateX(30px)',
              offset: 0.4
            }),
            style({
              opacity: 1,
              transform: 'translateX(-30px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
    ]),
    trigger('login-create', [
      state('onCreate', style({
        opacity: 1
      })),
      transition('void => onCreate',
        animate('500ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-300px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-200px)',
              offset: 0.4
            }),
            style({
              opacity: 1,
              transform: 'translateX(-100px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
    ]),
    trigger('login-rotate', [
      state('toEmail', style({
        zIndex: -200,
        opacity: 0,
        transform: 'rotateY(180deg)'
      })),
      state('toLogin', style({
        opacity: 1,
        zIndex: 200
      })),
      transition('toEmail => toLogin',
        animate('500ms 0s',
        )
      ),
      transition('toEmail <=> toLogin',
        animate('500ms 0s',
        )
      ),
    ]),
    trigger('login-rotate2', [
      state('toEmail', style({
        opacity: 1,
        zIndex: 200
      })),
      state('toLogin', style({
        opacity: 0,
        zIndex: -200,
        transform: 'rotateY(180deg)',

      })),
      transition('toEmail <=> toLogin',
        animate('500ms 0s',
        )
      ),
    ])
  ]
})
export class LoginComponent implements OnInit {

  estadoLogin = 'onErrorIn';
  estadoLoginCriado = 'onCreate';
  estadoEmail = 'toEmail';
  estadoEmail2 = 'toEmail';

  aguarde = false;

  recuperarSenha = false;

  formulario: FormGroup;
  formularioEmail: FormGroup;
  verSenha = false;

  constructor(
    private title: Title,
    private router: Router,
    public authService: AuthService,
    private toastService: ToastService,
    private usuarioService: UsuarioService,
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
      }
    );

    this.formularioEmail = new FormGroup(
      { email: new FormControl('', [Validators.required, Validators.email]) }
    );
  }

  togglePasswordVisibility() {
    this.verSenha = this.verSenha === true ? false : true;
  }

  exibirLogin() {
    this.estadoEmail = 'toEmail';
    this.estadoEmail2 = 'toEmail';
    this.formularioEmail.reset();
  }

  exibirRecuperarSenha() {
    this.recuperarSenha = true;
    this.estadoEmail = 'toLogin';
    this.estadoEmail2 = 'toLogin';
  }

  submeterFormulario() {
    this.toastService.clearToasts();
    this.authService.login(this.formulario.value)
      .then(() => {
        this.router.navigate(['/pacientes']);
        const mensagemToast = `Bem vindo ${this.authService.jwtPayload.user_name}.`;
        this.toastService.exibirInfo('Conectado', mensagemToast);
      })
      .catch(() => {
        this.formulario.get('senha').setValue('');
        this.changeLoginStateOnError();
      });
  }

  submeterEmail() {
    this.aguarde = true;
    this.formularioEmail.get('email').disable();
    const email = this.formularioEmail.get('email').value;

    this.usuarioService.recuperarSenha(email)
      .subscribe(() => {
        const mensagemToast = `Uma nova senha foi criada e enviada para o seu e-mail.`;
        this.toastService.exibirInfoMail('E-mail enviado!', mensagemToast);
        this.aguarde = false;
        this.formularioEmail.get('email').enable();
        this.exibirLogin();
      }, (error) => {
        this.aguarde = false;
        this.formularioEmail.get('email').enable();
        this.changeLoginStateOnError();
      });
  }

  private changeLoginStateOnError() {
    this.estadoLogin = this.estadoLogin === 'onErrorIn' ? 'onErrorOut' : 'onErrorIn';
  }
}
