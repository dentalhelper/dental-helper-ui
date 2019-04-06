import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteResumoDTO } from 'src/app/domains/dtos/paciente-resumo.dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  PACIENTE_URL = `${URL_API}/pacientes`;

  constructor(private http: HttpClient) { }

  pesquisar(form: any): Observable<PacienteResumoDTO[]> {
    let parametros = new HttpParams();

    if (form.filtro) {
      parametros = parametros.append('filtro', form.filtro);
    }
    return this.http.get<PacienteResumoDTO[]>(this.PACIENTE_URL, { params: parametros });
  }
}
