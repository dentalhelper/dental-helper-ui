import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ToastService } from 'src/app/core/services/toast.service';

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
    ])
  ]
})
export class LoginComponent implements OnInit {

  estadoLogin = 'onErrorIn';
  estadoLoginCriado = 'onCreate';

  formulario: FormGroup;
  verSenha = false;

  constructor(
    private title: Title,
    private router: Router,
    public authService: AuthService,
    private toastService: ToastService,
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
      const mensagemToast = `Bem vindo ${this.authService.jwtPayload.user_name}.`;
        this.toastService.exibirSucesso(mensagemToast);
    }).catch(() => {
      this.formulario.get('senha').setValue('');
      this.estadoLogin = this.estadoLogin === 'onErrorIn' ? 'onErrorOut' : 'onErrorIn';
    });
  }
}
