import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoPrevistoService {

  PROCEDIMENTO_PREVISTO_URL = `${URL_API}/procedimentos-previstos`;

  constructor(private http: AppHttp) { }

  atualizar(codigo): Observable<any> {
    return this.http.patch<any>(`${this.PROCEDIMENTO_PREVISTO_URL}/${codigo}`);
  }
}
