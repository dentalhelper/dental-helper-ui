import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/domains/estado.model';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/app/domains/cidade.model.';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  ESTADO_URL = `${URL_API}/estados`;

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.ESTADO_URL);
  }

  pesquisarCidades(codigoEstado: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${this.ESTADO_URL}/${codigoEstado}/cidades`);
  }
}
