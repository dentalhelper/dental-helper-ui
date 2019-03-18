import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(
    private toastService: ToastService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
      let errorObj = error;
      if (errorObj.error) {
        errorObj = errorObj.error[0];
      }

      switch (errorObj.status) {
        case 400:
          this.handle400(errorObj);
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

  handle409(errorObj: any) {
    this.toastService.exibirAviso(`${errorObj.mensagemUsuario}`);
  }

  handleDefaultError(errorObj: any) {
    this.toastService.exibirErro('Ocorreu um erro inesperado.');
  }

}
