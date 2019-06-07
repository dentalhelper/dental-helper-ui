import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { ToastService } from './toast.service';
import { NotAuthenticatedError } from 'src/app/seguranca/app-http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastService: ToastService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
      let errorObj = error;
      if (errorObj.error) {
        errorObj = errorObj.error[0];
      }

      if (errorObj === undefined) {
        console.log(error);
        if (error.status === 401) {
          const mensagem = 'Olá, sua sessão expirou, realize o login novamente.';
          this.toastService.exibirErro(mensagem);
          this.router.navigate(['/login']);
        }

        if (error.status === 400) {
          if(error.error.error === 'invalid_grant'){
            this.toastService.exibirErro('Usuário e/ou senha incorretos.');
          }
        }
      }

      switch (errorObj.status) {
        case 400:
          this.handle400(errorObj);
          break;
        case 403:
          this.handle403(errorObj);
          break;
        case 409:
          this.handle409(errorObj);
          break;
        default:
          this.handleDefaultError(errorObj);
      }

      return throwError(error);
    })) as any;
  }

  handle400(errorObj: any) {
    this.toastService.exibirErro(`${errorObj.mensagemUsuario}`);
  }

  handle403(errorObj: any) {
    this.toastService.exibirErro(`${errorObj.mensagemUsuario}`);
  }

  handle409(errorObj: any) {
    this.toastService.exibirAviso(`${errorObj.mensagemUsuario}`);
  }

  handleDefaultError(errorObj: any) {
    this.toastService.exibirErro('Ocorreu um erro inesperado.');
  }

}
