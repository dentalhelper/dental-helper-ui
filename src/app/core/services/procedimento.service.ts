import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Procedimento } from 'src/app/domains/procedimento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  PROCEDIMENTO_URL = `${URL_API}/procedimentos`;

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Procedimento[]> {
    return this.http.get<Procedimento[]>(this.PROCEDIMENTO_URL);
  }
}
