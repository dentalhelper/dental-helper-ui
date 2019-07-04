import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { AuthService } from '../core/services/auth.service';

import { from as observableFromPromise, Observable } from 'rxjs';

export class NotAuthenticatedError { }

@Injectable()
export class AppHttp extends HttpClient {

  constructor(
    private auth: AuthService,
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.delete<T>(url, options));
  }

  public patch<T>(url: string, body?: any, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.patch<T>(url, body, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.head<T>(url, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.options<T>(url, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.get<T>(url, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.post<T>(url, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.fazerRequisicao<T>(() => super.put<T>(url, body, options));
  }

  private fazerRequisicao<T>(fn: Function): Observable<T> {
    if (!localStorage.getItem('token')) {
      return fn();
    } else if (this.auth.isAccessTokenInvalido()) {
      console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

      const chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalido()) {
            throw new NotAuthenticatedError();
          }
          return fn().toPromise();
        });

      return observableFromPromise(chamadaNovoAccessToken);
    } else {
      return fn();
    }
  }

}
