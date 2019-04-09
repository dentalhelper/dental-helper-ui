import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteResumoDTO } from 'src/app/domains/dtos/paciente-resumo.dto';
import { PacienteNovoDTO } from 'src/app/domains/dtos/paciente-novo.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  PACIENTE_URL = `${URL_API}/pacientes`;

  constructor(private http: HttpClient) { }

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
}
