import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Procedimento } from 'src/app/domains/procedimento.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  PROCEDIMENTO_URL = `${URL_API}/procedimentos`;

  constructor(private http: HttpClient) { }

  salvar(procedimento: Procedimento): Observable<string> {
    return this.http.post<Procedimento>(`${this.PROCEDIMENTO_URL}/novo`, procedimento)
      .pipe(
        map(responseProcedimento => responseProcedimento.nome)
      );
  }

  pesquisar(): Observable<Procedimento[]> {
    return this.http.get<Procedimento[]>(this.PROCEDIMENTO_URL);
  }

  buscarPorCodigo(codigo: number): Observable<Procedimento> {
    return this.http.get<Procedimento>(`${this.PROCEDIMENTO_URL}/${codigo}`);
  }

  atualizar(procedimento: Procedimento): Observable<Procedimento> {
    return this.http.put<Procedimento>(`${this.PROCEDIMENTO_URL}/${procedimento.codigo}`, procedimento);
  }
}
