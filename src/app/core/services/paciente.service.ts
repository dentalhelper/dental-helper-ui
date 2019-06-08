import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { Anamnese } from 'src/app/domains/interfaces/anamnese.model';
import { PacienteNovoDTO } from 'src/app/domains/dtos/paciente-novo.dto';
import { PacienteResumoDTO } from 'src/app/domains/dtos/paciente-resumo.dto';
import { PacienteAnamneseDTO } from 'src/app/domains/dtos/paciente-anamnese.dto';
import { PacienteOrcamentoDTO } from 'src/app/domains/dtos/paciente-orcamento.dto';
import { OrcamentoPagamentoDTO } from 'src/app/domains/dtos/orcamento-pagamento.dto';
import { PacienteAgendamentoDTO } from 'src/app/domains/dtos/paciente-agendamento.dto';
import { PacienteSelectComFotoDTO } from 'src/app/domains/dtos/paciente-select-com-foto.dto';

import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  updateHeader = new Subject<any>();

  PACIENTE_URL = `${URL_API}/pacientes`;

  constructor(private http: AppHttp) { }

  salvar(paciente: PacienteNovoDTO): Observable<string> {
    return this.http.post<PacienteNovoDTO>(`${this.PACIENTE_URL}/novo`, paciente)
      .pipe(
        map(responsePaciente => responsePaciente.nome)
      );
  }

  pesquisar(form: any): Observable<PacienteResumoDTO[]> {
    let parametros = new HttpParams();

    if (form.filtro) {
      parametros = parametros.append('filtro', form.filtro);
    }
    return this.http.get<PacienteResumoDTO[]>(this.PACIENTE_URL, { params: parametros });
  }

  buscarPorCodigo(codigo: number): Observable<PacienteNovoDTO> {
    return this.http.get<PacienteNovoDTO>(`${this.PACIENTE_URL}/${codigo}/edit`).pipe(
      map((response) => {
        const paciente = response;
        this.converterStringsParaDatas([paciente]);
        return paciente;
      })
    );
  }

  buscarComFotoParaSelect(): Observable<PacienteSelectComFotoDTO[]> {
    return this.http.get<PacienteSelectComFotoDTO[]>(`${this.PACIENTE_URL}/nome-foto`);
  }

  buscarAnamnese(codigo: number): Observable<PacienteAnamneseDTO> {
    return this.http.get<PacienteAnamneseDTO>(`${this.PACIENTE_URL}/${codigo}/anamnese`);
  }

  buscarConsultas(codigo: number): Observable<PacienteAgendamentoDTO> {
    return this.http.get<PacienteAgendamentoDTO>(`${this.PACIENTE_URL}/${codigo}/agendamentos`);
  }

  buscarOrcamentos(codigo: number): Observable<PacienteOrcamentoDTO> {
    return this.http.get<PacienteOrcamentoDTO>(`${this.PACIENTE_URL}/${codigo}/orcamentos`);
  }

  buscarPagamentos(codigo: number): Observable<OrcamentoPagamentoDTO[]> {
    return this.http.get<OrcamentoPagamentoDTO[]>(`${this.PACIENTE_URL}/${codigo}/pagamentos`);
  }

  urlUploadImagem(): string {
    return `${this.PACIENTE_URL}/foto`;
  }

  atualizar(paciente: PacienteNovoDTO, codigo: number): Observable<PacienteNovoDTO> {
    return this.http.put<PacienteNovoDTO>(`${this.PACIENTE_URL}/${codigo}`, paciente)
      .pipe(
        map((response) => {
          const pacienteAlterado = response;
          this.converterStringsParaDatas([pacienteAlterado]);
          return pacienteAlterado;
        })
      );
  }

  atualizarAnamnese(anamnese: Anamnese, codigo: number): Observable<Anamnese> {
    return this.http.put<Anamnese>(`${this.PACIENTE_URL}/${codigo}/anamnese`, anamnese);
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }

  private converterStringsParaDatas(pacientes: PacienteNovoDTO[]) {
    for (const paciente of pacientes) {
      paciente.dataNascimento = moment(paciente.dataNascimento, 'YYYY-MM-DD').toDate();
    }
  }
}
