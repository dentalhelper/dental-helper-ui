import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  pesquisar(filtro: any): Observable<Procedimento[]> {
    let parametros = new HttpParams();

    if (filtro.nome) {
      parametros = parametros.append('nome', filtro.nome);
    }
    return this.http.get<Procedimento[]>(this.PROCEDIMENTO_URL, { params: parametros });
  }

  buscarPorCodigo(codigo: number): Observable<Procedimento> {
    return this.http.get<Procedimento>(`${this.PROCEDIMENTO_URL}/${codigo}`);
  }

  atualizar(procedimento: Procedimento): Observable<Procedimento> {
    return this.http.put<Procedimento>(`${this.PROCEDIMENTO_URL}/${procedimento.codigo}`, procedimento);
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }
}
