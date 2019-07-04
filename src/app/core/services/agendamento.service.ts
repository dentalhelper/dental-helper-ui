import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { AgendamentoNovoDTO } from 'src/app/domains/dtos/agendamento-novo.dto';
import { AgendamentoResumoDTO } from 'src/app/domains/dtos/agendamento-resumo.dto';

import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  updateEvent = new Subject<any>();

  AGENDAMENTO_URL = `${URL_API}/agendamentos`;

  constructor(private http: AppHttp) { }

  salvar(agendamento: any): Observable<any> {
    agendamento.horaInicio = this.converterDataHoraParaString(agendamento.horaInicio);
    if (agendamento.horaFim !== null) {
      agendamento.horaFim = this.converterDataHoraParaString(agendamento.horaFim);
    }
    return this.http.post<AgendamentoNovoDTO>(`${this.AGENDAMENTO_URL}/novo`, agendamento);
  }

  pesquisar(): Observable<AgendamentoResumoDTO[]> {
    const parametros = new HttpParams();
    return this.http.get<AgendamentoResumoDTO[]>(`${this.AGENDAMENTO_URL}`, { params: parametros });
  }

  buscarPorCodigo(codigo: number): Observable<AgendamentoNovoDTO> {
    return this.http.get<AgendamentoNovoDTO>(`${this.AGENDAMENTO_URL}/${codigo}/edit`)
      .pipe(
        map((response) => {
          const agendamento = response;
          this.converterStringsParaDatas([agendamento]);
          return agendamento;
        })
      );
  }

  atualizar(codigoAgendamento: number, agendamento: any): Observable<AgendamentoNovoDTO> {
    agendamento.horaInicio = this.converterDataHoraParaString(agendamento.horaInicio);
    if (agendamento.horaFim !== null) {
      agendamento.horaFim = this.converterDataHoraParaString(agendamento.horaFim);
    }
    return this.http.put<AgendamentoNovoDTO>(`${this.AGENDAMENTO_URL}/${codigoAgendamento}`, agendamento)
      .pipe(
        map((response) => {
          const agendamentoAlterado = response;
          this.converterStringsParaDatas([agendamentoAlterado]);
          return agendamentoAlterado;
        })
      );
  }

  atualizarStatus(codigoAgendamento: number, status: number): Observable<string> {
    return this.http.patch<string>(`${this.AGENDAMENTO_URL}/${codigoAgendamento}`, status);
  }

  deletar(codigo: string): Observable<string> {
    return this.http.delete<string>(`${this.AGENDAMENTO_URL}/${codigo}`);
  }

  private converterStringsParaDatas(agendamentos: AgendamentoNovoDTO[]) {
    for (const agendamento of agendamentos) {
      agendamento.dataAgendamento = moment(agendamento.dataAgendamento, 'YYYY-MM-DD').toDate();
    }
  }

  private converterDataHoraParaString(hora: any): string {
    return moment(hora).format('H:mm');
  }
}
