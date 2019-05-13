import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrcamentoResumoDTO } from 'src/app/domains/dtos/orcamento-resumo.dto';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  ORCAMENTO_URL = `${URL_API}/orcamentos`;

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<OrcamentoResumoDTO[]> {
    return this.http.get<OrcamentoResumoDTO[]>(this.ORCAMENTO_URL);
  }
}
