import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { AgendamentoNovoDTO } from 'src/app/domains/dtos/agendamento-novo.dto';

import { Observable } from 'rxjs';

import * as moment from 'moment';
import { AgendamentoResumoDTO } from 'src/app/domains/dtos/agendamento-resumo.dto';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  AGENDAMENTO_URL = `${URL_API}/agendamentos`;

  constructor(private http: HttpClient) { }

  salvar(agendamento: any): Observable<any> {
    agendamento.horaInicio = this.converterDataHoraParaString(agendamento.horaInicio);
    agendamento.horaFim = this.converterDataHoraParaString(agendamento.horaFim);
    agendamento.statusAgendamento = 1;
    return this.http.post<AgendamentoNovoDTO>(`${this.AGENDAMENTO_URL}/novo`, agendamento);
  }

  pesquisar(): Observable<AgendamentoResumoDTO[]> {
    const parametros = new HttpParams();
    return this.http.get<AgendamentoResumoDTO[]>(`${this.AGENDAMENTO_URL}`, { params: parametros });
  }

  deletar(codigo: string): Observable<string> {
    return this.http.delete<string>(`${this.AGENDAMENTO_URL}/${codigo}`);
  }

  private converterDataHoraParaString(hora: any): string {
    return moment(hora).format('H:mm');
  }
}
