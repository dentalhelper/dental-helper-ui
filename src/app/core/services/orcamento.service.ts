import { Injectable } from '@angular/core';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { OrcamentoNovoDTO } from 'src/app/domains/dtos/orcamento-novo.dto';
import { OrcamentoResumoDTO } from 'src/app/domains/dtos/orcamento-resumo.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  ORCAMENTO_URL = `${URL_API}/orcamentos`;

  constructor(private http: AppHttp) { }

  salvar(orcamento: any): Observable<any> {
    return this.http.post<any>(`${this.ORCAMENTO_URL}/novo`, orcamento);
  }

  pesquisar(): Observable<OrcamentoResumoDTO[]> {
    return this.http.get<OrcamentoResumoDTO[]>(this.ORCAMENTO_URL);
  }

  buscarPorCodigo(codigo: number): Observable<OrcamentoNovoDTO> {
    return this.http.get<OrcamentoNovoDTO>(`${this.ORCAMENTO_URL}/${codigo}/edit`)
      .pipe(
        map((response) => {
          const orcamento = response;
          this.converterStringsParaDatas([orcamento]);
          return orcamento;
        })
      );
  }

  atualizar(codigoOrcamento: number, orcamento: any): Observable<OrcamentoNovoDTO> {
    return this.http.put<OrcamentoNovoDTO>(`${this.ORCAMENTO_URL}/${codigoOrcamento}`, orcamento)
      .pipe(
        map((response) => {
          const orcamentoAlterado = response;
          this.converterStringsParaDatas([orcamentoAlterado]);
          return orcamentoAlterado;
        })
      );
  }

  atualizarStatus(codigoOrcamento: number): Observable<string> {
    // TODO: CONVERSÃO DE BOOLEAN NO BACKEND
    return this.http.patch<string>(`${this.ORCAMENTO_URL}/${codigoOrcamento}`, { 'true': true });
  }

  cancelar(codigoOrcamento: number): Observable<string> {
    return this.http.patch<string>(`${this.ORCAMENTO_URL}/${codigoOrcamento}/pagamento`,
      {
        codigo: codigoOrcamento
      });
  }

  deletar(codigo: string): Observable<string> {
    return this.http.delete<string>(`${this.ORCAMENTO_URL}/${codigo}`);
  }

  private converterStringsParaDatas(orcamentos: OrcamentoNovoDTO[]) {
    for (const orcamento of orcamentos) {
      orcamento.dataOrcamento = moment(orcamento.dataOrcamento, 'YYYY-MM-DD').toDate();
    }
  }
}
