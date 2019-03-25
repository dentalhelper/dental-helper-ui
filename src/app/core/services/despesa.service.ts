import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { Despesa } from 'src/app/domains/despesa.model';
import { DespesaFilter } from '../classes/despesa-filter';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  DESPESA_URL = `${URL_API}/despesas`;

  constructor(private http: HttpClient) { }

  salvar(categoria: Despesa): Observable<string> {
    categoria.pagamento.forma.toUpperCase();
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

    return this.http.get<Despesa[]>(`${this.DESPESA_URL}`, { params: parametros }).pipe(
      map((response) => {
        return this.converterEnumParaDescricao(response);
      })
    );
  }

  buscarPorCodigo(codigo: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.DESPESA_URL}/${codigo}`)
      .pipe(
        map((response) => {
          const despesa = response;
          this.converterStringsParaDatas([despesa]);
          return despesa;
        })
      );
  }

  atualizar(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(`${this.DESPESA_URL}/${despesa.codigo}`, despesa)
      .pipe(
        map((response) => {
          const despesaAlterada = response;
          this.converterStringsParaDatas([despesaAlterada]);
          return despesaAlterada;
        })
      );
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }

  private converterStringsParaDatas(despesas: Despesa[]) {
    for (const despesa of despesas) {
      despesa.pagamento.dataPagamento = moment(despesa.pagamento.dataPagamento, 'YYYY-MM-DD').toDate();
    }
  }

  private converterEnumParaDescricao(despesas: Despesa[]): Despesa[] {
    despesas.forEach(function (elemento) {
      if (elemento.pagamento.forma === 'DINHEIRO') {
        elemento.pagamento.forma = 'Dinheiro';
      }
      if (elemento.pagamento.forma === 'CARTAO') {
        elemento.pagamento.forma = 'Cartão';
      }
    });
    return despesas;
  }
}
