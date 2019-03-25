import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Despesa } from 'src/app/domains/despesa.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DespesaFilter } from '../classes/despesa-filter';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  DESPESA_URL = `${URL_API}/despesas`;

  constructor(private http: HttpClient) { }

  salvar(categoria: Despesa): Observable<string> {
    return this.http.post<Despesa>(`${this.DESPESA_URL}/novo`, categoria)
      .pipe(
        map(responseCategoria => responseCategoria.descricao)
      );
  }

  pesquisar(filtro: DespesaFilter): Observable<Despesa[]> {
    let parametros = new HttpParams();

    if (filtro.descricao) {
      parametros = parametros.append('descricao', filtro.descricao);
    }

    if (filtro.dataPagamentoDe) {
      parametros = parametros.append('dataPagamentoDe', moment(filtro.dataPagamentoDe)
        .format('YYYY-MM-DD'));
    }

    if (filtro.dataPagamentoAte) {
      parametros = parametros.append('dataPagamentoAte', moment(filtro.dataPagamentoAte)
        .format('YYYY-MM-DD'));
    }

    if (filtro.categoria) {
      parametros = parametros.append('categoria', filtro.categoria);
    }

    return this.http.get<Despesa[]>(`${this.DESPESA_URL}`, { params: parametros });
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }
}
